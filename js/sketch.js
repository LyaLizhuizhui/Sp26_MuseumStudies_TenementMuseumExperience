const CONFIG = {
    rooms: [
        { name: "Room 1", position: { x: -10, y: 1, z: 5 } },
        { name: "Room 2", position: { x: 0, y: 1, z: 5 } },
        { name: "Room 3", position: { x: 10, y: 1, z: 4 } }
    ],
    interactivePanels: [
        { position: { x: -5.5, y: -2, z: 6 }, text: "Panel 1 Info", hasImage: true, hasAudio: true, type: 'audio' },
        { position: { x: 3, y: -2, z: 7 }, text: "Panel 2 Info", hasImage: true, hasAudio: false, type: 'official' },
        { position: { x: 18, y: -1, z: 11 }, text: "Panel 3 Info", hasImage: false, hasAudio: true, type: 'comparison' },
        { position: { x: 16, y: 0, z: -1 }, text: "Panel 4 Info", hasImage: false, hasAudio: false, type: 'comparison' },
        { position: { x: -11, y: 0, z: 12 }, text: "Panel 5 Info", hasImage: true, hasAudio: true, type: 'comparison' }
    ],
    modelStart: { x: 0, y: 8, z: -40 },
    modelEnd: { x: 11, y: 8, z: 9 },
    animDuration: 4200,
    hudTitlePosition: { x: 0, y: 0.35, z: -1.2 },
    hudTitleScale: { x: 1, y: 1, z: 1 },
    hudLoadingPosition: { x: 0, y: 0, z: -1 },
    hudLoadingScale: { x: 1.2, y: 1.2, z: 1.2 },
    hudPlayPosition: { x: 0, y: -0.1, z: -1 },
    hudPlayScale: { x: 0.5, y: 0.5, z: 0.5 },
    hudColor: "#ffffff",
    triangleColor: "#ffcc00",
    gridSize: { width: 5, height: 5 },
    gridPosition: { x: 0, y: 0, z: 0 },
    gridRotation: { x: -90, y: 0, z: 0 },
    gridColor: "#444444",
    axesLength: 6,
    axesOrigin: { x: 0, y: 0, z: 0 }
};

let world;
let apartment;
let roomMarkers = [];
let ui;
const animationState = { modelDone: false };

let panelGraphics = [];
let panelTextures = []; // NEW: Array to hold the AFrameP5 dynamic textures
let panelBoxes = [];
let panelPlanes = [];
let currentRoomIndex = 1; // Track the current room context
let placeholderImage;
const AUDIO_PLACEHOLDER_SRC = 'assets/audios/bell.wav';

function preload() {
    placeholderImage = loadImage('assets/images/placeholderImage.png');
}

function setup() {
    noCanvas();
    world = new AFrameP5.World("VRScene");
    ui = getUiElements();

    // Create graphics buffers, textures, and assign initial content
    for (let i = 0; i < CONFIG.interactivePanels.length; i++) {
        const buffer = createGraphics(512, 512);
        panelGraphics.push(buffer);

        // NEW: Create the AFrameP5 dynamic texture directly from the buffer
        const texture = world.createDynamicTextureFromCreateGraphics(buffer);
        panelTextures.push(texture);

        // Initialize Audio Object
        const audioPath = AUDIO_PLACEHOLDER_SRC;
        const sound = loadSound(audioPath);
        const fft = new p5.FFT();
        fft.setInput(sound);

        CONFIG.interactivePanels[i].sound = sound;
        CONFIG.interactivePanels[i].fft = fft;

        drawPanelBuffer(i);
    }

    apartment = new AFrameP5.GLTF({
        asset: "apartment",
        x: CONFIG.modelStart.x,
        y: CONFIG.modelStart.y,
        z: CONFIG.modelStart.z
    });
    world.add(apartment);

    injectDebugHelpers();
    createRoomMarkers();
    createInteractivePanels();
    updatePanelOrientations(); // Initial orientation based on default room
    setupDebugPanel();

    setStateLoading();

    apartment.tag.addEventListener("model-loaded", () => {
        if (apartment.tag.object3D) {
            apartment.tag.object3D.userData.solid = true;
            apartment.tag.object3D.traverse((node) => {
                if (node.isMesh) {
                    node.frustumCulled = false;
                }
            });
        }
        setStateB1();
    });

    apartment.tag.addEventListener("animationcomplete__position", () => {
        animationState.modelDone = true;
        if (animationState.modelDone) {
            setStateInteractive();
        }
    });
}

function drawPanelBuffer(index) {
    const buffer = panelGraphics[index];
    const config = CONFIG.interactivePanels[index];

    buffer.textAlign(LEFT, TOP);
    buffer.textSize(32);

    switch (config.type) {
        case 'audio':
            buffer.background('#FF6250');
            buffer.fill(255);
            buffer.text(config.text, 20, 20);

            // Draw actual dynamic audio waveform using p5.sound FFT
            buffer.stroke('#5AC4F5');
            buffer.strokeWeight(4);
            buffer.noFill();

            if (config.fft) {
                const waveform = config.fft.waveform();
                buffer.beginShape();
                for (let i = 0; i < waveform.length; i++) {
                    const x = map(i, 0, waveform.length, 0, buffer.width);
                    const y = map(waveform[i], -1, 1, 0, buffer.height);
                    buffer.vertex(x, y);
                }
                buffer.endShape();
            }

            buffer.fill(255);
            buffer.noStroke();
            buffer.text("Placeholder for audio details.", 20, buffer.height - 80);
            break;

        case 'official':
            buffer.background('#F6CE46');
            buffer.fill(0);
            buffer.text(config.text, 20, 20);
            buffer.textSize(24);
            buffer.text("This is the official record text.", 20, 80);
            buffer.text("It contains important details.", 20, 120);
            buffer.text("More lines of information here.", 20, 160);
            break;

        case 'comparison':
            buffer.background('#7FB5FA');
            buffer.fill(0);
            buffer.text("Comparison View", 20, 20);

            const colWidth = buffer.width / 2 - 20;
            const imgSize = 200;

            // Column 1
            if (placeholderImage) {
                buffer.image(placeholderImage, 20, 80, imgSize, imgSize);
            }
            buffer.textSize(20);
            buffer.text("Left side comparison text, constrained to column.", 20, 300, colWidth);

            // Column 2
            if (placeholderImage) {
                buffer.image(placeholderImage, buffer.width / 2 + 10, 80, imgSize, imgSize);
            }
            buffer.text("Right side comparison text, also constrained.", buffer.width / 2 + 10, 300, colWidth);
            break;
    }

    // Force update if the plane's material has already been constructed
    if (panelPlanes[index] && panelPlanes[index].tag.getObject3D('mesh')) {
        const material = panelPlanes[index].tag.getObject3D('mesh').material;
        if (material && material.map) {
            material.map.needsUpdate = true;
        }
    }
}

function getUiElements() {
    return {
        layer: document.querySelector("#ui-layer"),
        title: document.querySelector("#title"),
        loading: document.querySelector("#text-loading"),
        button: document.querySelector("#btn-start")
    };
}

function setStateLoading() {
    apartment.setPosition(CONFIG.modelStart.x, CONFIG.modelStart.y, CONFIG.modelStart.z);
    apartment.setRotation(0, 0, 0);

    if (ui.layer) ui.layer.style.display = "flex";
    if (ui.loading) ui.loading.style.display = "block";
    if (ui.title) ui.title.style.display = "none";
    if (ui.button) ui.button.style.display = "none";

    const cam = document.querySelector("#main-camera");
    if (cam) {
        cam.setAttribute("look-controls", "enabled", false);
    }
}

function setStateB1() {
    if (ui.layer) ui.layer.style.display = "flex";
    if (ui.loading) ui.loading.style.display = "none";
    if (ui.title) ui.title.style.display = "block";
    if (ui.button) ui.button.style.display = "inline-flex";

    apartment.setPosition(CONFIG.modelStart.x, CONFIG.modelStart.y, CONFIG.modelStart.z);
    apartment.setRotation(0, 0, 0);

    attachEntranceAnimations();

    if (ui.button) {
        ui.button.onclick = null;
        ui.button.addEventListener("click", () => {
            setStateB2();
        }, { once: true });
    }
}

function setStateB2() {
    if (ui.layer) ui.layer.style.display = "none";

    apartment.tag.emit("trigger-entrance");

    const cam = document.querySelector("#main-camera");
    if (cam) {
        cam.emit("trigger-entrance");
    }
}

function setStateInteractive() {
    const cam = document.querySelector("#main-camera");
    if (cam) {
        cam.setAttribute("look-controls", "enabled", true);
    }
}

function injectDebugHelpers() {
    const grid = new AFrameP5.Plane({
        width: CONFIG.gridSize.width,
        height: CONFIG.gridSize.height,
        x: CONFIG.gridPosition.x,
        y: CONFIG.gridPosition.y,
        z: CONFIG.gridPosition.z
    });
    grid.setRotation(CONFIG.gridRotation.x, CONFIG.gridRotation.y, CONFIG.gridRotation.z);
    grid.tag.setAttribute("material", {
        color: CONFIG.gridColor,
        wireframe: true,
        opacity: 0.6
    });
    world.add(grid);

    const axes = new AFrameP5.Box({
        x: CONFIG.axesOrigin.x,
        y: CONFIG.axesOrigin.y,
        z: CONFIG.axesOrigin.z,
        width: 0.01,
        height: 0.01,
        depth: 0.01
    });
    axes.tag.appendChild(createAxisLine({ x: 0, y: 0, z: 0 }, { x: CONFIG.axesLength, y: 0, z: 0 }, "#ff0000"));
    axes.tag.appendChild(createAxisLine({ x: 0, y: 0, z: 0 }, { x: 0, y: CONFIG.axesLength, z: 0 }, "#00ff00"));
    axes.tag.appendChild(createAxisLine({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: CONFIG.axesLength }, "#0000ff"));
    world.add(axes);
}

function createAxisLine(start, end, color) {
    const line = document.createElement("a-entity");
    line.setAttribute("line", {
        start: toVec3String(start),
        end: toVec3String(end),
        color
    });
    return line;
}

function createRoomMarkers() {
    roomMarkers = CONFIG.rooms.map((room, index) => {
        const marker = new AFrameP5.Box({
            x: room.position.x,
            y: room.position.y,
            z: room.position.z,
            width: 1,
            height: 1,
            depth: 1,
            red: 255,
            green: 0,
            blue: 0,
            clickFunction: () => {
                world.slideToObject(marker, 700);
                currentRoomIndex = index;
                updatePanelOrientations();
            },
            enterFunction: function () {
                marker.setScale(1.2, 1.2, 1.2);
            },
            leaveFunction: function () {
                marker.setScale(1, 1, 1);
            },
        });
        world.add(marker);
        return marker;
    });
}

function createInteractivePanels() {
    CONFIG.interactivePanels.forEach((panelConfig, index) => {
        // NEW: Refactored to use the AFrameP5 dynamic texture properties directly
        const plane = new AFrameP5.Plane({
            x: panelConfig.position.x,
            y: panelConfig.position.y + 2,
            z: panelConfig.position.z,
            width: 2,
            height: 3,
            asset: panelTextures[index],
            dynamicTexture: true,
            dynamicTextureWidth: 142,
            dynamicTextureHeight: 256,
        });

        plane.tag.setAttribute('visible', false);

        // The wrapper handles the core material creation, but we still need 
        // to ensure the plane is double-sided so it doesn't disappear from behind.
        const currentMaterial = plane.tag.getAttribute('material') || {};
        currentMaterial.side = 'double';
        plane.tag.setAttribute('material', currentMaterial);

        world.add(plane);
        panelPlanes.push(plane);

        // Ensure the plane has an object3D before calling lookAt
        plane.tag.addEventListener('loaded', () => {
            updatePanelOrientations();
        });

        let isPanelVisible = false;

        const box = new AFrameP5.Box({
            x: panelConfig.position.x,
            y: panelConfig.position.y,
            z: panelConfig.position.z,
            width: 0.2,
            height: 0.2,
            depth: 0.2,
            red: 0,
            green: 0,
            blue: 255,
            rotateY: 180,
            enterFunction: () => box.setScale(1.2, 1.2, 1.2),
            leaveFunction: () => box.setScale(1, 1, 1),
            clickFunction: () => {
                isPanelVisible = !isPanelVisible;
                plane.tag.setAttribute('visible', isPanelVisible);

                if (isPanelVisible) {
                    console.log(`Panel ${index + 1} opened.`);
                    if (panelConfig.hasAudio && panelConfig.sound) {
                        panelConfig.sound.stop(); // Reset to start
                        panelConfig.sound.loop();
                    }
                } else {
                    console.log(`Panel ${index + 1} closed.`);
                    if (panelConfig.sound) {
                        panelConfig.sound.pause();
                    }
                }
            }
        });
        world.add(box);
        panelBoxes.push(box);
    });
}

function updatePanelPosition(index) {
    const config = CONFIG.interactivePanels[index];
    const box = panelBoxes[index];
    const plane = panelPlanes[index];

    if (box) box.setPosition(config.position.x, config.position.y, config.position.z);
    if (plane) {
        plane.setPosition(config.position.x, config.position.y + 2, config.position.z);
        updatePanelOrientations();
    }
}

function updatePanelOrientations() {
    const targetPos = CONFIG.rooms[currentRoomIndex].position;
    panelPlanes.forEach((plane) => {
        if (plane && plane.tag) {
            // Use A-Frame's look-at component or manual rotation logic
            // Since we want the panel to FACE the room, we point it towards the room position
            plane.tag.object3D.lookAt(targetPos.x, targetPos.y + 1.6, targetPos.z);
            // A-Frame planes are usually rotated by default, we might need to adjust based on p5 world coords
        }
    });
}

function setupDebugPanel() {
    if (!window.Pane) {
        return;
    }

    const pane = new window.Pane({ title: "A-Frame Debug" });

    const modelStart = pane.addFolder({ title: "Model Start", expanded: false });
    modelStart.addBinding(CONFIG.modelStart, "x", { step: 0.1 });
    modelStart.addBinding(CONFIG.modelStart, "y", { step: 0.1 });
    modelStart.addBinding(CONFIG.modelStart, "z", { step: 0.1 });

    const modelEnd = pane.addFolder({ title: "Model End", expanded: false });
    modelEnd.addBinding(CONFIG.modelEnd, "x", { step: 0.1 });
    modelEnd.addBinding(CONFIG.modelEnd, "y", { step: 0.1 });
    modelEnd.addBinding(CONFIG.modelEnd, "z", { step: 0.1 });

    pane.addBinding(CONFIG, "animDuration", { min: 200, max: 12000, step: 100 });

    const rooms = pane.addFolder({ title: "Rooms", expanded: false });
    CONFIG.rooms.forEach((room) => {
        const folder = rooms.addFolder({ title: room.name });
        folder.addBinding(room.position, "x", { step: 0.1 });
        folder.addBinding(room.position, "y", { step: 0.1 });
        folder.addBinding(room.position, "z", { step: 0.1 });
    });

    const actions = pane.addFolder({ title: "States", expanded: false });
    actions.addButton({ title: "Back to B1" }).on("click", () => {
        setStateB1();
    });

    actions.addButton({ title: "Start B2" }).on("click", () => {
        apartment.setPosition(CONFIG.modelStart.x, CONFIG.modelStart.y, CONFIG.modelStart.z);
        apartment.setRotation(0, 0, 0);
        attachEntranceAnimations();
        setStateB2();
    });

    actions.addButton({ title: "Force C" }).on("click", () => {
        cancelEntranceAnimations();
        snapToEnd();
        setStateInteractive();
    });

    const panelsFolder = pane.addFolder({ title: "Interactive Panels" });
    CONFIG.interactivePanels.forEach((panelConfig, index) => {
        const f = panelsFolder.addFolder({ title: `Panel ${index + 1}`, expanded: false });

        f.addBinding(panelConfig.position, "x", { step: 0.1 }).on('change', () => updatePanelPosition(index));
        f.addBinding(panelConfig.position, "y", { step: 0.1 }).on('change', () => updatePanelPosition(index));
        f.addBinding(panelConfig.position, "z", { step: 0.1 }).on('change', () => updatePanelPosition(index));

        f.addBinding(panelConfig, 'type', { options: { Audio: 'audio', Official: 'official', Comparison: 'comparison' } }).on('change', () => drawPanelBuffer(index));

        f.addBinding(panelConfig, "hasImage").on('change', () => {
            drawPanelBuffer(index);
        });

        f.addBinding(panelConfig, "hasAudio").on('change', () => {
            if (!panelConfig.hasAudio && panelConfig.sound) {
                panelConfig.sound.pause();
            }
        });
    });
}

function attachEntranceAnimations() {
    apartment.tag.setAttribute("animation__position", {
        property: "position",
        from: toVec3String(CONFIG.modelStart),
        to: toVec3String(CONFIG.modelEnd),
        dur: CONFIG.animDuration,
        easing: "easeInOutCubic",
        startEvents: "trigger-entrance"
    });

    apartment.tag.setAttribute("animation__rotation", {
        property: "rotation",
        from: "100 15 0",
        to: "0 375 0",
        dur: CONFIG.animDuration,
        easing: "easeInOutCubic",
        startEvents: "trigger-entrance"
    });

    const cam = document.querySelector("#main-camera");
    if (cam) {
        cam.setAttribute("animation__rotation", {
            property: "rotation",
            from: "-90 0 0",
            to: "0 0 0",
            dur: CONFIG.animDuration,
            easing: "easeInOutCubic",
            startEvents: "trigger-entrance"
        });
    }
}

function cancelEntranceAnimations() {
    apartment.tag.removeAttribute("animation__position");
    apartment.tag.removeAttribute("animation__rotation");

    const cam = document.querySelector("#main-camera");
    if (cam) {
        cam.removeAttribute("animation__rotation");
    }
    attachEntranceAnimations();
}

function snapToEnd() {
    apartment.setPosition(CONFIG.modelEnd.x, CONFIG.modelEnd.y, CONFIG.modelEnd.z);
    apartment.setRotation(0, 360, 0);
}

function toVec3String(vec) {
    return `${vec.x} ${vec.y} ${vec.z}`;
}

function draw() {
    // Dynamically update the panel buffers to show the waveform animation
    for (let i = 0; i < CONFIG.interactivePanels.length; i++) {
        // Redraw the buffer every frame if it's visible and is of type 'audio'
        if (panelPlanes[i] && panelPlanes[i].tag.getAttribute('visible')) {
            drawPanelBuffer(i);
        }
    }
}
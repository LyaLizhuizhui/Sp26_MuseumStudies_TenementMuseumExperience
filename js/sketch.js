const CONFIG = {
    rooms: [
        // { name: "Room 1", position: { x: 20, y: 0, z: 13 } },
        // { name: "Room 2", position: { x: 11, y: 0, z: 9 } },
        // { name: "Room 3", position: { x: -3, y: 0, z: 7 } }
        { name: "Room 1", position: { x: -10, y: 1, z: 5 } },
        { name: "Room 2", position: { x: 0, y: 1, z: 5 } },
        { name: "Room 3", position: { x: 10, y: 1, z: 4 } }
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

function setup() {
    noCanvas();
    world = new AFrameP5.World("VRScene");
    ui = getUiElements();
    world.setFlying(false);

    world.camera.cameraEl.removeAttribute('wasd-controls');

    apartment = new AFrameP5.GLTF({
        asset: "apartment",
        x: CONFIG.modelStart.x,
        y: CONFIG.modelStart.y,
        z: CONFIG.modelStart.z
    });
    world.add(apartment);

    injectDebugHelpers();
    createRoomMarkers();
    setupDebugPanel();

    setStateLoading();

    apartment.tag.addEventListener("model-loaded", () => {
        if (apartment.tag.object3D) {
            apartment.tag.object3D.userData.solid = true;
            // Force shaders to compile even when the model is at y: -40 out of view
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

    // Disable camera look controls while loading
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

    // Pre-attach the A-Frame animations so they are ready before the user clicks
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

    // Trigger animations
    apartment.tag.emit("trigger-entrance");

    const cam = document.querySelector("#main-camera");
    if (cam) {
        cam.emit("trigger-entrance");
    }
}

function setStateInteractive() {
    // Restore camera controls on completion
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
    roomMarkers = CONFIG.rooms.map((room) => {
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
            },
            enterFunction: function () {
                marker.setScale(1.2, 1.2, 1.2);
            },
            leaveFunction: function () {
                marker.setScale(1, 1, 1);
            },
        });
        //marker.tag.setAttribute("material", { depthTest: false });
        world.add(marker);
        return marker;
    });
}

function setupDebugPanel() {
    if (!window.Pane) {
        return;
    }

    const pane = new window.Pane({ title: "A-Frame Debug" });
    const modelStart = pane.addFolder({ title: "Model Start" });
    modelStart.addBinding(CONFIG.modelStart, "x", { step: 0.1 });
    modelStart.addBinding(CONFIG.modelStart, "y", { step: 0.1 });
    modelStart.addBinding(CONFIG.modelStart, "z", { step: 0.1 });

    const modelEnd = pane.addFolder({ title: "Model End" });
    modelEnd.addBinding(CONFIG.modelEnd, "x", { step: 0.1 });
    modelEnd.addBinding(CONFIG.modelEnd, "y", { step: 0.1 });
    modelEnd.addBinding(CONFIG.modelEnd, "z", { step: 0.1 });

    pane.addBinding(CONFIG, "animDuration", { min: 200, max: 12000, step: 100 });

    const rooms = pane.addFolder({ title: "Rooms" });
    CONFIG.rooms.forEach((room) => {
        const folder = rooms.addFolder({ title: room.name });
        folder.addBinding(room.position, "x", { step: 0.1 });
        folder.addBinding(room.position, "y", { step: 0.1 });
        folder.addBinding(room.position, "z", { step: 0.1 });
    });

    const actions = pane.addFolder({ title: "States" });
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
}

function attachEntranceAnimations() {
    // Apartment position animation
    apartment.tag.setAttribute("animation__position", {
        property: "position",
        from: toVec3String(CONFIG.modelStart),
        to: toVec3String(CONFIG.modelEnd),
        dur: CONFIG.animDuration,
        easing: "easeInOutCubic",
        startEvents: "trigger-entrance"
    });

    // Apartment rotation animation
    apartment.tag.setAttribute("animation__rotation", {
        property: "rotation",
        from: "100 15 0",
        to: "0 375 0",
        dur: CONFIG.animDuration,
        easing: "easeInOutCubic",
        startEvents: "trigger-entrance"
    });

    // Camera rotation animation
    const cam = document.querySelector("#main-camera");
    if (cam) {
        console.log("Camera found");
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

}
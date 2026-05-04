const CONFIG = {
    rooms: [
        { name: "Room 1", position: { x: -11.5, y: 1, z: 8 } },
        { name: "Room 2", position: { x: 0, y: 1, z: 5 } },
        { name: "Room 3", position: { x: 13.5, y: 1, z: 5.5 } }
    ],
    interactivePanels: [
        {
            position: { x: 0, y: -1, z: 1 },
            titleText: "The Baldizzis' Life in the Tenement",
            detailText: 'The Lower East Side is historically known as an immigrant neighborhood. For generations, it served as a receiving place for people arriving from other countries, as well as from other parts of the United States. Many of these newcomers found their first New York homes in tenements. \n\nThe Baldizzis, a Catholic family from Sicily, lived at 97 Orchard Street in the 1930s. Their story took place during both a low point in American immigration and the height of the Great Depression. \n\nThis virtual tour explores how the family’s story connects with the larger historical events of this era. We will see how the Baldizzis experienced a defining period in the nation’s past.',
            type: 'official'
        },
        {
            position: { x: 3.3, y: 0, z: 11 },
            titleText: "Josephine's Memories: Radio",
            detailText: '"(Josephine laughs) The radio, always playing: Italian music, Italian soap operas, and my mother crying all the time (chuckles). She used to miss her family. She left her whole family in Italy, came here as a young girl and she never saw them again for many, many years later, she never saw her mother or her father again (Italian music begins softly, grows louder, then fades out)."',
            type: 'audio',
            audioSrc: 'assets/audios/radio.m4a'
        },
        {
            position: { x: -1.7, y: -0.6, z: 11.1 },
            titleText: "Josephine's Memories: Kitchen",
            detailText: '"I remember sitting around the table in the kitchen under the window and we would – my mother would have made us a fried egg or something on a roll with butter. And my father would put the ketchup on it. That was a treat every Saturday. Had to be Saturday or a Sunday, we would sit around and enjoy that roll with the butter. My mother’d be moving around, always cooking, serving, doing things, busy as a bee, never sitting down. \n\n In the kitchen, at the table, when we weren’t eating, we used to play games. My father would play cards with us: checkers, Chinese checkers and riddles. He would write things down, and draw pictures of things, and we had to figure them out. And that was another way we passed our time. He always made sure we had things to do. And he taught us how to play all the card games, rummy and… things like that."',
            type: 'audio',
            audioSrc: 'assets/audios/kitchen.m4a'
        },
        {
            position: { x: 16.2, y: 0, z: -0.5 },
            titleText: "Josephine's Memories: Bedroom",
            detailText: '"In the back room, my brother and I slept on a folding bed. Every night, my mother would open it up, or my father, and my brother would sleep at one end and I slept at the other end. Every morning, we would have to fold it up, cover it very nicely, and put it back against the wall. \n\nThe other thing in that bedroom was a trunk that my brother and I enjoyed playing with. When I say playing, I mean standing on top of it. That was our stage. I became Claudette Colbert, and he became somebody else. Whatever movie was out, we were acting. We would do a song and dance or something, whatever was amusing to us. \n\nSometimes in the trunk, there must have been my mother’s clothing, hats, and whatever. We would take them out, wear them, put them on, high heels, you know, and have a lot of fun. \n\nRita Bonfiglio, who lived upstairs in the tenement, used to come down and play with us too. There would be three of us, and we would fight. I wanted to be Claudette Colbert. She wanted to be Claudette Colbert. We had a ball. We just enjoyed doing that. \n\nIn the back room, there was a shaft, a window facing a shaft. Across the way was another window, and back there, the Rosenthals lived. I can still see Mrs. Rosenthal in the air shaft window, waving to me, motioning for me to come in and turn on the lights because it was the Sabbath, the Jewish holiday, and they were not allowed to touch the electricity. \n\nIt made me very proud to have to do that. I used to feel good that she chose me to do that job for her. I can still see her today. The vision of her in that window has never left my memory."',
            type: 'audio',
            audioSrc: 'assets/audios/bedroom.mp3'
        },
        {
            position: { x: 18, y: -1, z: 10.7 },
            titleText: "Josephine's Parents",
            summaryText: "Adolfo (1918), Rosaria (1920)",
            type: 'comparison',
            imageSources: ['assets/images/parent1.png', 'assets/images/parent2.png'],
            currentImageIndex: 0
        },
        {
            position: { x: 20, y: 0, z: 5.5 },
            titleText: "Orchard and Hester St",
            summaryText: "1930s and Today:\nPushcart vendors sold food, sweets, nuts, clothing, jewelry, and tools, making the street an important part of daily life for tenement families.",
            type: 'comparison',
            imageSources: ['assets/images/Orchard1.png', 'assets/images/Orchard2.png', 'assets/images/occupation1.jpg', 'assets/images/occupation2.jpg', 'assets/images/occupation3.jpg', 'assets/images/occupation4.jpg'],
            currentImageIndex: 0
        },
        {
            position: { x: -15.5, y: -0.3, z: 6.4 },
            titleText: "Josephine Baldizzi",
            summaryText: "with family and neighbors, 1935 and 1992",
            type: 'comparison',
            imageSources: ['assets/images/josephine1.png', 'assets/images/josephine2.png'],
            currentImageIndex: 0
        },
        {
            position: { x: -11.5, y: 0.2, z: 13 },
            titleText: "Rosaria Baldizzi",
            summaryText: "(second from the right) at a garment factory, 1940",
            type: 'comparison',
            imageSources: ['assets/images/factory1.png'],
            currentImageIndex: 0
        }
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
    axesOrigin: { x: 0, y: 0, z: 0 },
    navigationWaypoints: [
        { name: "A", position: { x: -7.4, y: -3.6, z: 4 }, rooms: [0, 1] },
        { name: "B", position: { x: 5.8, y: -3.3, z: 2.9 }, rooms: [1, 2] }
    ],
    navigationWaypointStyle: {
        ringInnerRadius: 0.35,
        ringOuterRadius: 0.55,
        ringColor: "#4aff1a",
        ringOpacity: 0.35,
        arrowColor: "#4aff1a",
        arrowOpacity: 0.65,
        hoverColor: "#4aff1a",
        hoverRingOpacity: 0.6,
        hoverArrowOpacity: 0.85,
        arrowLift: 0.02,
        arrowShaftLength: 0.35,
        arrowShaftWidth: 0.08,
        arrowHeadLength: 0.18,
        arrowHeadWidth: 0.22,
        navigationWaypointSlideDuration: 700,
    }
};

let world;
let apartment;
let magnifier;
let roomMarkers = [];
let navigationWaypoints = [];
let ui;
const animationState = { modelDone: false };
let hudReady = false;
let fingerIcon;

const debugState = {
    cameraPos: "0.00, 0.00, 0.00"
};

let panelGraphics = [];
let panelTextures = [];
let panelBoxes = [];
let panelMagnifiers = [];
let panelPlanes = [];
let panelHighlightCircles = [];
let currentRoomIndex = 1;

const AUDIO_TRANSCRIPT = {
    textSize: 16,
    lineHeight: 22,
    hintText: "press panel to pause / resume",
    hintGap: 10,
    hintIconSize: 16,
    hintTextGap: 8,
    contentPaddingBottom: 8
};

function wrapTextToLines(buffer, text, maxWidth) {
    const paragraphs = String(text || "").split(/\n\n+/);
    const lines = [];

    paragraphs.forEach((paragraph, index) => {
        const words = paragraph.replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
        let current = "";

        words.forEach((word) => {
            const testLine = current ? `${current} ${word}` : word;
            if (buffer.textWidth(testLine) <= maxWidth) {
                current = testLine;
                return;
            }

            if (current) {
                lines.push(current);
            }
            current = word;
        });

        if (current) {
            lines.push(current);
        }

        if (index < paragraphs.length - 1) {
            lines.push("");
        }
    });

    return lines;
}

function getAudioScrollOffset(panelConfig, scrollRange) {
    if (!panelConfig || !panelConfig.loadedSound) {
        return 0;
    }

    const duration = panelConfig.loadedSound.duration();
    if (!duration || duration <= 0 || scrollRange <= 0) {
        return 0;
    }

    const current = panelConfig.loadedSound.currentTime();
    const progress = constrain(current / duration, 0, 1);
    return progress * scrollRange;
}

function toggleAudioPlayback(panelConfig) {
    if (!panelConfig || !panelConfig.loadedSound) {
        return;
    }

    if (panelConfig.loadedSound.isPlaying()) {
        panelConfig.loadedSound.pause();
        return;
    }

    panelConfig.loadedSound.play();
}

function togglePanelOpen(panelConfig, plane, index) {
    const wasVisible = plane.tag.getAttribute('visible');

    // Step A: Close ALL panels and pause ALL audio
    panelPlanes.forEach((p, i) => {
        p.tag.setAttribute('visible', false);
        const conf = CONFIG.interactivePanels[i];
        if (conf.type === 'audio' && conf.loadedSound) {
            conf.loadedSound.pause();
        }
    });

    // Step B: If the panel we clicked wasn't already open, open it now
    if (!wasVisible) {
        plane.tag.setAttribute('visible', true);
        console.log(`Panel ${index + 1} opened.`);

        if (panelConfig.type === 'audio' && panelConfig.loadedSound) {
            panelConfig.loadedSound.stop();
            panelConfig.loadedSound.loop();
        }
        return;
    }

    console.log(`Panel ${index + 1} closed.`);
}

function getPanelBufferSize(panelConfig) {
    if (panelConfig && panelConfig.type === 'official') {
        return { w: 341, h: 426 };
    }
    return { w: 512, h: 341 };
}

function preload() {
    CONFIG.interactivePanels.forEach((panel) => {
        panel.loadedImages = [];
        if (Array.isArray(panel.imageSources)) {
            panel.loadedImages = panel.imageSources.map((src) => loadImage(src));
        }
        if (panel.audioSrc) {
            panel.loadedSound = loadSound(panel.audioSrc);
        }
    });
    fingerIcon = loadImage('assets/images/finger.png');
}

function setup() {
    noCanvas();
    world = new AFrameP5.World("VRScene");
    ui = getUiElements();

    for (let i = 0; i < CONFIG.interactivePanels.length; i++) {
        const size = getPanelBufferSize(CONFIG.interactivePanels[i]);
        const buffer = createGraphics(size.w, size.h);
        panelGraphics.push(buffer);

        const texture = world.createDynamicTextureFromCreateGraphics(buffer);
        panelTextures.push(texture);

        if (CONFIG.interactivePanels[i].type === 'audio' && CONFIG.interactivePanels[i].loadedSound) {
            const fft = new p5.FFT();
            fft.setInput(CONFIG.interactivePanels[i].loadedSound);

            CONFIG.interactivePanels[i].fft = fft;
        }

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
    createNavigationWaypoints();
    createInteractivePanels();
    setHudVisibility(false);
    updatePanelOrientations();
    updateWaypointArrowDirections();
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
            hudReady = true;
            setHudVisibility(true);
            setStateInteractive();
        }
    });
}

function drawPanelBuffer(index) {
    const buffer = panelGraphics[index];
    const config = CONFIG.interactivePanels[index];

    buffer.textAlign(LEFT, TOP);

    switch (config.type) {
        case 'audio':
            buffer.background('#FF6250');
            buffer.fill(255);

            const audioMaxW = buffer.width - 40;
            const audioTitle = config.titleText || "";
            buffer.textSize(26);
            buffer.text(audioTitle, 20, 18, audioMaxW);

            buffer.stroke('#5AC4F5');
            buffer.strokeWeight(4);
            buffer.noFill();

            if (config.fft) {
                const waveform = config.fft.waveform();
                const waveX = 20;
                // Move waveform down slightly if title is multi-line
                const audioTitleW = buffer.textWidth(audioTitle);
                const audioLines = Math.ceil(audioTitleW / audioMaxW) || 1;
                const waveY = 18 + (audioLines * 30) + 15;

                const waveW = buffer.width - 40;
                const waveH = 130;
                buffer.beginShape();
                for (let i = 0; i < waveform.length; i += 10) {
                    const x = map(i, 0, waveform.length, waveX, waveX + waveW);
                    const y = map(waveform[i], -1, 1, waveY + waveH, waveY);
                    buffer.vertex(x, y);
                }
                buffer.endShape();


                const hintY = waveY + waveH + AUDIO_TRANSCRIPT.hintGap;
                buffer.fill(225);
                buffer.noStroke();
                buffer.textSize(AUDIO_TRANSCRIPT.textSize);

                const hintTextWidth = buffer.textWidth(AUDIO_TRANSCRIPT.hintText);
                const hintTotalWidth = AUDIO_TRANSCRIPT.hintIconSize + AUDIO_TRANSCRIPT.hintTextGap + hintTextWidth;
                const hintStartX = 20 + (audioMaxW / 2) - (hintTotalWidth / 2);

                if (typeof fingerIcon !== 'undefined' && fingerIcon) {
                    buffer.image(fingerIcon, hintStartX, hintY, AUDIO_TRANSCRIPT.hintIconSize, AUDIO_TRANSCRIPT.hintIconSize);
                }

                buffer.textAlign(LEFT, TOP);
                buffer.text(AUDIO_TRANSCRIPT.hintText, hintStartX + AUDIO_TRANSCRIPT.hintIconSize + AUDIO_TRANSCRIPT.hintTextGap, hintY + 1);

                const detailY = hintY + AUDIO_TRANSCRIPT.hintIconSize + AUDIO_TRANSCRIPT.hintGap;
                const detailHeight = buffer.height - detailY - AUDIO_TRANSCRIPT.contentPaddingBottom;

                buffer.fill(255);
                const lines = wrapTextToLines(buffer, config.detailText || "", audioMaxW);
                const totalHeight = lines.length * AUDIO_TRANSCRIPT.lineHeight;
                const scrollRange = Math.max(0, totalHeight - detailHeight);
                const scrollOffset = getAudioScrollOffset(config, scrollRange);

                buffer.push();
                buffer.textSize(AUDIO_TRANSCRIPT.textSize);

                const startLine = Math.max(0, Math.floor(scrollOffset / AUDIO_TRANSCRIPT.lineHeight));
                const maxLines = Math.ceil(detailHeight / AUDIO_TRANSCRIPT.lineHeight) + 1;
                const visibleLines = lines.slice(startLine, startLine + maxLines);
                const yOffset = detailY - (scrollOffset - (startLine * AUDIO_TRANSCRIPT.lineHeight)) + 15;

                visibleLines.forEach((line, idx) => {
                    buffer.text(line, 20, yOffset + (idx * AUDIO_TRANSCRIPT.lineHeight), audioMaxW);
                });
                buffer.pop();
            } else {
                buffer.fill(255);
                buffer.noStroke();
                buffer.textSize(20);
                buffer.text(config.detailText || "", 20, 100, audioMaxW, buffer.height - 120);
            }
            break;

        case 'official':
            buffer.background('#F6CE46');
            buffer.fill(0);

            const officialTitle = config.titleText || "";
            const officialMaxW = buffer.width - 40;

            buffer.textSize(22);
            // Draw title with word wrap
            buffer.text(officialTitle, 20, 18, officialMaxW);

            // Calculate dynamic Y position to avoid overlap
            const officialTitleW = buffer.textWidth(officialTitle);
            const officialLines = Math.ceil(officialTitleW / officialMaxW) || 1;
            const officialDescY = 18 + (officialLines * 26) + 13; // 26 is approx line height, 13 is gap

            buffer.textSize(14);
            buffer.text(config.detailText || "", 20, officialDescY, officialMaxW, buffer.height - officialDescY - 10);
            break;

        case 'comparison':
            buffer.background('#7FB5FA');

            if (typeof config.currentImageIndex !== 'number') {
                config.currentImageIndex = 0;
            }

            const layout = getComparisonLayout(buffer);

            buffer.noStroke();
            buffer.fill(255, 255, 255, 80);
            buffer.rect(layout.imageRect.x, layout.imageRect.y, layout.imageRect.w, layout.imageRect.h);

            const images = Array.isArray(config.loadedImages) ? config.loadedImages : [];
            const imgCount = images.length;
            if (imgCount > 0) {
                const clampedIndex = ((config.currentImageIndex % imgCount) + imgCount) % imgCount;
                config.currentImageIndex = clampedIndex;
                const img = images[clampedIndex];
                if (img) {
                    buffer.image(img, layout.imageRect.x, layout.imageRect.y, layout.imageRect.w, layout.imageRect.h);
                }
            } else {
                buffer.stroke(255);
                buffer.noFill();
                buffer.rect(layout.imageRect.x, layout.imageRect.y, layout.imageRect.w, layout.imageRect.h);
                buffer.noStroke();
                buffer.fill(255);
                buffer.textAlign(LEFT, TOP);
                buffer.textSize(14);
                buffer.text("No images", layout.imageRect.x + 10, layout.imageRect.y + 10);
            }

            buffer.textSize(16);
            buffer.fill(225);
            const promptText = "press panel to see more!";
            buffer.fill(255);
            const textWidth = buffer.textWidth(promptText);
            const iconSize = 16;
            const gap = 8;

            // Calculate total width to center everything
            const totalWidth = iconSize + gap + textWidth;
            const startX = layout.imageRect.x + (layout.imageRect.w / 2) - (totalWidth / 2);
            const drawY = layout.imageRect.y + layout.imageRect.h + 5;

            if (typeof fingerIcon !== 'undefined' && fingerIcon) {
                buffer.image(fingerIcon, startX, drawY, iconSize, iconSize);
            }

            buffer.textAlign(LEFT, TOP);
            buffer.fill(0, 0, 0, 180);
            buffer.text(promptText, startX + iconSize + gap, drawY);

            buffer.textAlign(LEFT, TOP);
            buffer.fill(0);

            const compTitle = config.titleText || "";
            buffer.textSize(24);
            buffer.text(compTitle, layout.textRect.x, layout.textRect.y, layout.textRect.w);

            const compTitleWidth = buffer.textWidth(compTitle);
            const compTitleLines = Math.ceil(compTitleWidth / layout.textRect.w) || 1;
            const compDynamicY = layout.textRect.y + (compTitleLines * 28) + 12; // 28 is approx line height

            buffer.textSize(16);
            buffer.text(config.summaryText || "", layout.textRect.x, compDynamicY, layout.textRect.w, layout.textRect.h - (compDynamicY - layout.textRect.y));
            break;
    }

    if (panelPlanes[index] && panelPlanes[index].tag.getObject3D('mesh')) {
        const material = panelPlanes[index].tag.getObject3D('mesh').material;
        if (material && material.map) {
            material.map.needsUpdate = true;
        }
    }
}

function getComparisonLayout(buffer) {
    const margin = 20;
    const imageSize = 300;
    const imageX = margin;
    const imageY = Math.floor((buffer.height - imageSize) / 2) - 8;

    const textX = imageX + imageSize + margin;
    const textY = margin;
    const textW = buffer.width - textX - margin;
    const textH = buffer.height - (margin * 2);

    return {
        imageRect: { x: imageX, y: imageY, w: imageSize, h: imageSize },
        textRect: { x: textX, y: textY, w: textW, h: textH }
    };
}

function getUiElements() {
    return {
        layer: document.querySelector("#ui-layer"),
        title: document.querySelector("#title"),
        loading: document.querySelector("#text-loading"),
        spinner: document.querySelector("#loading-spinner"),
        button: document.querySelector("#btn-start")
    };
}

function setStateLoading() {
    apartment.setPosition(CONFIG.modelStart.x, CONFIG.modelStart.y, CONFIG.modelStart.z);
    apartment.setRotation(0, 0, 0);

    if (ui.layer) ui.layer.style.display = "flex";
    if (ui.loading) ui.loading.style.display = "block";
    if (ui.spinner) ui.spinner.style.display = "block";
    if (ui.title) {
        ui.title.hidden = true;
        ui.title.style.display = "none";
    }
    if (ui.button) {
        ui.button.hidden = true;
        ui.button.style.display = "none";
    }

    const cam = document.querySelector("#main-camera");
    if (cam) {
        cam.setAttribute("look-controls", "enabled", false);
    }
}

function setStateB1() {
    if (ui.layer) ui.layer.style.display = "flex";
    if (ui.loading) ui.loading.style.display = "none";
    if (ui.spinner) ui.spinner.style.display = "none";
    if (ui.title) {
        ui.title.hidden = false;
        ui.title.style.display = "block";
    }
    if (ui.button) {
        ui.button.hidden = false;
        ui.button.style.display = "inline-flex";
    }

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

function setHudVisibility(isVisible) {

    panelPlanes.forEach((plane) => {
        if (plane && plane.tag) {
            const defaultVisible = plane.tag.dataset.defaultVisible === "true";
            plane.tag.setAttribute("visible", isVisible && defaultVisible);
        }
    });

    panelHighlightCircles.forEach((circle) => {
        if (circle && circle.tag) {
            circle.tag.setAttribute("visible", isVisible);
        }
    });

    panelMagnifiers.forEach((magnifierModel) => {
        if (magnifierModel && magnifierModel.tag) {
            magnifierModel.tag.setAttribute("visible", isVisible);
        }
    });

    panelBoxes.forEach((box) => {
        if (box && box.tag) {
            box.tag.setAttribute("visible", isVisible);
        }
    });

    navigationWaypoints.forEach((waypoint) => {
        if (waypoint && waypoint.anchor && waypoint.anchor.tag) {
            waypoint.anchor.tag.setAttribute("visible", isVisible);
        }
    });
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
            enterFunction: function () {
                marker.setScale(1.2, 1.2, 1.2);
            },
            leaveFunction: function () {
                marker.setScale(1, 1, 1);
            },
        });
        marker.tag.setAttribute('visible', false);
        world.add(marker);
        return marker;
    });
}

function createNavigationWaypoints() {
    const scene = document.querySelector("#VRScene");
    if (!scene) {
        return;
    }

    const style = CONFIG.navigationWaypointStyle;
    navigationWaypoints = CONFIG.navigationWaypoints.map((waypoint) => {
        const anchor = new AFrameP5.Box({
            x: waypoint.position.x,
            y: waypoint.position.y,
            z: waypoint.position.z,
            width: 0.6,
            height: 0.2,
            depth: 0.6,
            red: 255,
            green: 255,
            blue: 255,
            enterFunction: () => setWaypointHoverState(anchor, true),
            leaveFunction: () => setWaypointHoverState(anchor, false),
            clickFunction: () => {
                if (!hudReady) {
                    return;
                }
                handleWaypointClick(waypoint);
            }
        });

        world.add(anchor);

        anchor.tag.setAttribute("material", {
            color: "#ffffff",
            transparent: true,
            opacity: 0
        });

        anchor.tag.setAttribute("visible", false);

        const ring = document.createElement("a-entity");
        ring.setAttribute("geometry", `primitive: ring; radiusInner: ${style.ringInnerRadius}; radiusOuter: ${style.ringOuterRadius}`);
        ring.setAttribute("material", {
            color: style.ringColor,
            transparent: true,
            opacity: style.ringOpacity,
            side: "double"
        });
        ring.setAttribute("rotation", "-90 0 0");

        const arrowRoot = document.createElement("a-entity");
        arrowRoot.setAttribute("rotation", "-90 0 0");
        arrowRoot.setAttribute("position", `0 ${style.arrowLift} 0`);

        const shaft = document.createElement("a-entity");
        shaft.setAttribute("geometry", `primitive: plane; width: ${style.arrowShaftLength}; height: ${style.arrowShaftWidth}`);
        shaft.setAttribute("material", {
            color: style.arrowColor,
            transparent: true,
            opacity: style.arrowOpacity,
            side: "double"
        });
        shaft.setAttribute("position", `${style.arrowShaftLength * 0.1} 0 0`);

        const head = document.createElement("a-entity");
        head.setAttribute("geometry", `primitive: cone; radiusBottom: ${style.arrowHeadWidth * 0.5}; radiusTop: 0; height: ${style.arrowHeadLength}`);
        head.setAttribute("material", {
            color: style.arrowColor,
            transparent: true,
            opacity: style.arrowOpacity
        });
        head.setAttribute("rotation", "0 0 -90");
        head.setAttribute("position", `${style.arrowShaftLength * 0.55} 0 0`);
        head.setAttribute("scale", "1 1 0.2");

        arrowRoot.appendChild(shaft);
        arrowRoot.appendChild(head);

        anchor.tag.appendChild(ring);
        anchor.tag.appendChild(arrowRoot);

        const waypointData = {
            name: waypoint.name,
            rooms: waypoint.rooms,
            anchor,
            ring,
            arrowRoot,
            arrowParts: [shaft, head]
        };

        anchor.tag.dataset.waypoint = waypoint.name;
        anchor.tag.__waypointData = waypointData;

        return waypointData;
    });
}

function setWaypointHoverState(anchor, isHovering) {
    if (!hudReady) {
        return;
    }
    const style = CONFIG.navigationWaypointStyle;
    const waypointData = anchor.tag.__waypointData;
    if (!waypointData) {
        return;
    }

    const ringMaterial = {
        color: isHovering ? style.hoverColor : style.ringColor,
        transparent: true,
        opacity: isHovering ? style.hoverRingOpacity : style.ringOpacity,
        side: "double"
    };

    waypointData.ring.setAttribute("material", ringMaterial);

    const arrowMaterial = {
        color: isHovering ? style.hoverColor : style.arrowColor,
        transparent: true,
        opacity: isHovering ? style.hoverArrowOpacity : style.arrowOpacity,
        side: "double"
    };

    waypointData.arrowParts.forEach((part) => {
        part.setAttribute("material", arrowMaterial);
    });
}

function handleWaypointClick(waypoint) {
    const roomA = waypoint.rooms[0];
    const roomB = waypoint.rooms[1];

    if (currentRoomIndex === roomA) {
        slideToRoomIndex(roomB);
        return;
    }

    if (currentRoomIndex === roomB) {
        slideToRoomIndex(roomA);
        return;
    }
}

function slideToRoomIndex(index) {
    const marker = roomMarkers[index];
    if (!marker) {
        return;
    }

    world.slideToObject(marker, 700);
    currentRoomIndex = index;
    updatePanelOrientations();
    updateWaypointArrowDirections();
}

function updateWaypointArrowDirections() {
    if (!navigationWaypoints.length) {
        return;
    }

    const currentX = CONFIG.rooms[currentRoomIndex].position.x;

    navigationWaypoints.forEach((waypoint) => {
        const roomA = waypoint.rooms[0];
        const roomB = waypoint.rooms[1];
        const destinationIndex = currentRoomIndex === roomA ? roomB : roomA;
        const destinationX = CONFIG.rooms[destinationIndex].position.x;
        const rotationY = destinationX >= currentX ? 0 : 180;
        waypoint.arrowRoot.setAttribute("rotation", `-90 ${rotationY} 0`);
    });
}

function createInteractivePanels() {
    CONFIG.interactivePanels.forEach((panelConfig, index) => {

        // --- FEATURE 2: Adjust panel size based on type ---
        const panelWidth = panelConfig.type === 'official' ? 4 : 4;
        const panelHeight = panelConfig.type === 'official' ? 5 : 2.67;

        const buffer = panelGraphics[index];
        const textureW = buffer ? buffer.width : 512;
        const textureH = buffer ? buffer.height : 341;

        const plane = new AFrameP5.Plane({
            x: panelConfig.position.x,
            y: panelConfig.type === 'official' ? panelConfig.position.y + 3 : panelConfig.position.y + 2,
            z: panelConfig.position.z,
            width: panelWidth,
            height: panelHeight,
            asset: panelTextures[index],
            dynamicTexture: true,
            dynamicTextureWidth: textureW,
            dynamicTextureHeight: textureH,
            clickFunction: function (entity, intersectionInfo) {
                if (!hudReady) {
                    return;
                }
                if (panelConfig.type === 'audio') {
                    if (!plane.tag.getAttribute('visible')) {
                        return;
                    }
                    toggleAudioPlayback(panelConfig);
                    return;
                }
                if (panelConfig.type !== 'comparison') {
                    return;
                }

                if (!plane.tag.getAttribute('visible')) {
                    return;
                }

                const images = Array.isArray(panelConfig.loadedImages) ? panelConfig.loadedImages : [];
                const count = images.length;
                if (count <= 0) {
                    return;
                }

                panelConfig.currentImageIndex = ((panelConfig.currentImageIndex || 0) + 1) % count;
                drawPanelBuffer(index);
                console.log(`Switched to image: index ${panelConfig.currentImageIndex}`);
            }
        });

        plane.tag.dataset.defaultVisible = panelConfig.type === 'official';
        plane.tag.setAttribute('visible', false);

        const currentMaterial = plane.tag.getAttribute('material') || {};
        currentMaterial.side = 'double';
        plane.tag.setAttribute('material', currentMaterial);

        world.add(plane);
        panelPlanes.push(plane);

        plane.tag.addEventListener('loaded', () => {
            updatePanelOrientations();
        });

        const typeColors = {
            'audio': '#FF6250',
            'official': '#F6CE46',
            'comparison': '#7FB5FA'
        };
        const circleColor = typeColors[panelConfig.type] || "#FFD700"; // Default to gold if type not found

        const highlightCircle = new AFrameP5.Circle({
            x: panelConfig.position.x,
            y: panelConfig.position.y,
            z: panelConfig.position.z,
            radius: 0.5,
        });

        highlightCircle.tag.setAttribute("material", {
            color: circleColor,
            transparent: true,
            opacity: 0.4,
            side: "double",
            depthWrite: false
        });

        highlightCircle.tag.setAttribute("visible", false);

        world.add(highlightCircle);
        panelHighlightCircles.push(highlightCircle);

        const magnifierModel = new AFrameP5.GLTF({
            asset: "magnifier",
            x: panelConfig.position.x,
            y: panelConfig.position.y + 0.3,
            z: panelConfig.position.z,
            clickFunction: () => {
                if (!hudReady) {
                    return;
                }
                togglePanelOpen(panelConfig, plane, index);
            }
        });
        world.add(magnifierModel);
        magnifierModel.setScale(0.15, 0.15, 0.15);
        magnifierModel.setRotation(0, -45, -90);
        panelMagnifiers.push(magnifierModel);

        magnifierModel.tag.setAttribute("visible", false);

        const box = new AFrameP5.Box({
            x: panelConfig.position.x,
            y: panelConfig.position.y,
            z: panelConfig.position.z,
            width: 0.6,
            height: 0.6,
            depth: 0.6,
            red: 255,
            green: 255,
            blue: 255,
            enterFunction: () => magnifierModel.setScale(0.2, 0.2, 0.2),
            leaveFunction: () => magnifierModel.setScale(0.15, 0.15, 0.15),
            clickFunction: () => {
                if (!hudReady) {
                    return;
                }
                togglePanelOpen(panelConfig, plane, index);
            }
        });
        world.add(box);

        box.tag.setAttribute("material", {
            color: "#ffffff",
            transparent: true,
            opacity: 0
        });

        box.tag.setAttribute("visible", false);

        panelBoxes.push(box);
    });
}

function updatePanelPosition(index) {
    const config = CONFIG.interactivePanels[index];
    const box = panelBoxes[index];
    const plane = panelPlanes[index];
    const magnifierModel = panelMagnifiers[index];
    const circle = panelHighlightCircles[index];

    if (box) box.setPosition(config.position.x, config.position.y, config.position.z);
    if (magnifierModel) magnifierModel.setPosition(config.position.x, config.position.y, config.position.z);
    if (circle) circle.setPosition(config.position.x, config.position.y + 0.7, config.position.z);
    if (plane) {
        plane.setPosition(config.position.x, config.position.y + 2, config.position.z);
        updatePanelOrientations();
    }
}

function updateRoomMarkerPosition(index) {
    const config = CONFIG.rooms[index];
    const marker = roomMarkers[index];

    if (marker) {
        marker.setPosition(config.position.x, config.position.y, config.position.z);
        if (currentRoomIndex === index) {
            updatePanelOrientations();
            updateWaypointArrowDirections();
        }
    }
}

function updatePanelOrientations() {
    const targetPos = CONFIG.rooms[currentRoomIndex].position;
    panelPlanes.forEach((plane) => {
        if (plane && plane.tag) {
            plane.tag.object3D.lookAt(targetPos.x, targetPos.y + 0.6, targetPos.z);
        }
    });

    panelHighlightCircles.forEach((circle) => {
        if (circle && circle.tag) {
            circle.tag.object3D.lookAt(targetPos.x, targetPos.y + 0.6, targetPos.z);
        }
    });
}

function setupDebugPanel() {
    if (!window.Pane) {
        return;
    }

    const pane = new window.Pane({ title: "A-Frame Debug" });

    pane.addBinding(debugState, 'cameraPos', {
        readonly: true,
        title: "User Camera (XYZ)"
    });

    pane.addFolder({ title: "" });

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
    CONFIG.rooms.forEach((room, index) => {
        const folder = rooms.addFolder({ title: room.name });
        folder.addBinding(room.position, "x", { step: 0.1 }).on('change', () => updateRoomMarkerPosition(index));
        folder.addBinding(room.position, "y", { step: 0.1 }).on('change', () => updateRoomMarkerPosition(index));
        folder.addBinding(room.position, "z", { step: 0.1 }).on('change', () => updateRoomMarkerPosition(index));
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

        f.addBinding(panelConfig, 'type', { options: { Audio: 'audio', Official: 'official', Comparison: 'comparison' } }).on('change', () => {
            if (panelConfig.type !== 'audio' && panelConfig.loadedSound && panelConfig.loadedSound.isPlaying()) {
                panelConfig.loadedSound.pause();
            }

            if (panelConfig.type === 'audio' && panelConfig.loadedSound && !panelConfig.fft) {
                const fft = new p5.FFT();
                fft.setInput(panelConfig.loadedSound);
                panelConfig.fft = fft;
            }

            drawPanelBuffer(index);
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
    const cam = document.querySelector("#main-camera");
    if (cam && cam.object3D) {
        const x = cam.object3D.position.x.toFixed(2);
        const y = cam.object3D.position.y.toFixed(2);
        const z = cam.object3D.position.z.toFixed(2);
        debugState.cameraPos = `${x}, ${y}, ${z}`;
    }

    for (let i = 0; i < CONFIG.interactivePanels.length; i++) {
        if (panelPlanes[i] && panelPlanes[i].tag.getAttribute('visible') && CONFIG.interactivePanels[i].type === 'audio') {
            drawPanelBuffer(i);
        }
    }
}
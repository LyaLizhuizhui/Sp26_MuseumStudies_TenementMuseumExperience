const CONFIG = {
    rooms: [
        { name: "Room 1", position: { x: 20, y: 9, z: 13 } },
        { name: "Room 2", position: { x: 13, y: 9, z: 11 } },
        { name: "Room 3", position: { x: -3, y: 9, z: 7 } }
    ],
    modelStart: { x: 13, y: -40, z: 11 }, // Entrance animation start (raise Y to drop in)
    modelEnd: { x: 13, y: 9, z: 11 }, // Resting position (Room 2 center)
    animDuration: 4200, // Drop-and-spin duration in milliseconds
    hudTitlePosition: { x: 0, y: 0.35, z: -1.2 },
    hudTitleScale: { x: 1, y: 1, z: 1 },
    hudLoadingPosition: { x: 0, y: 0, z: -1 },
    hudLoadingScale: { x: 1.2, y: 1.2, z: 1.2 },
    hudPlayPosition: { x: 0, y: -0.1, z: -1 },
    hudPlayScale: { x: 0.5, y: 0.5, z: 0.5 },
    hudColor: "#ffffff",
    cameraStartPosition: { x: 0, y: 0, z: 0 },
    triangleColor: "#ffcc00",
    gridSize: { width: 60, height: 60 },
    gridPosition: { x: 0, y: 0, z: 0 },
    gridRotation: { x: -90, y: 0, z: 0 },
    gridColor: "#444444",
    axesLength: 6,
    axesOrigin: { x: 0, y: 0, z: 0 }
};

document.addEventListener("DOMContentLoaded", () => {
    const scene = document.querySelector("a-scene#VRScene") || document.querySelector("a-scene");
    if (!scene) {
        return;
    }

    const model = document.querySelector("#apartment");
    if (!model) {
        return;
    }

    const camera = ensureCamera(scene);
    const cursor = ensureCursor(scene);
    const hud = createHud(camera);

    injectDebugHelpers(scene);
    setupDebugPanel(model, camera, hud);

    setStateLoading(model, hud, camera);

    model.addEventListener("model-loaded", () => {
        setStateB1(model, hud, camera);
    });

    model.addEventListener("animationcomplete__position", () => {
        setStateInteractive(camera);
    });
});

function ensureCamera(scene) {
    let camera = scene.querySelector("a-camera");
    if (!camera) {
        camera = document.createElement("a-camera");
        camera.setAttribute("position", toVec3String(CONFIG.cameraStartPosition));
        scene.appendChild(camera);
    }
    return camera;
}

function ensureCursor(scene) {
    let cursor = scene.querySelector("a-entity[cursor]");
    if (!cursor) {
        cursor = document.createElement("a-entity");
        cursor.setAttribute("cursor", "rayOrigin: mouse");
        scene.appendChild(cursor);
    }
    return cursor;
}

function createHud(camera) {
    const titleText = document.createElement("a-text");
    titleText.setAttribute("value", "TENEMENT MUSEUM 7A");
    titleText.setAttribute("color", CONFIG.hudColor);
    titleText.setAttribute("align", "center");
    titleText.setAttribute("position", toVec3String(CONFIG.hudTitlePosition));
    titleText.setAttribute("scale", toVec3String(CONFIG.hudTitleScale));
    titleText.setAttribute("visible", "false");
    camera.appendChild(titleText);

    const loadingText = document.createElement("a-text");
    loadingText.setAttribute("value", "LOADING...");
    loadingText.setAttribute("color", CONFIG.hudColor);
    loadingText.setAttribute("align", "center");
    loadingText.setAttribute("position", toVec3String(CONFIG.hudLoadingPosition));
    loadingText.setAttribute("scale", toVec3String(CONFIG.hudLoadingScale));
    camera.appendChild(loadingText);

    const playButton = document.createElement("a-triangle");
    playButton.setAttribute("color", CONFIG.triangleColor);
    playButton.setAttribute("position", toVec3String(CONFIG.hudPlayPosition));
    playButton.setAttribute("scale", toVec3String(CONFIG.hudPlayScale));
    playButton.setAttribute("vertex-a", "0 0.5 0");
    playButton.setAttribute("vertex-b", "-0.4 -0.3 0");
    playButton.setAttribute("vertex-c", "0.4 -0.3 0");
    playButton.setAttribute("visible", "false");
    camera.appendChild(playButton);

    return { titleText, loadingText, playButton };
}

function setStateLoading(model, hud, camera) {
    model.setAttribute("visible", "false");
    model.setAttribute("position", toVec3String(CONFIG.modelStart));
    model.setAttribute("rotation", "0 0 0");
    hud.loadingText.setAttribute("visible", "true");
    hud.titleText.setAttribute("visible", "false");
    hud.playButton.setAttribute("visible", "false");
    setCameraControls(camera, false);
}

function setStateB1(model, hud, camera) {
    hud.loadingText.setAttribute("visible", "false");
    hud.titleText.setAttribute("visible", "true");
    hud.playButton.setAttribute("visible", "true");
    model.setAttribute("visible", "false");
    model.setAttribute("position", toVec3String(CONFIG.modelStart));
    model.setAttribute("rotation", "0 0 0");
    setCameraControls(camera, false);

    hud.playButton.onclick = null;
    hud.playButton.addEventListener("click", () => {
        setStateB2(model, hud, camera);
    }, { once: true });
}

function setStateB2(model, hud, camera) {
    hud.titleText.setAttribute("visible", "false");
    hud.playButton.setAttribute("visible", "false");
    model.setAttribute("visible", "true");
    setCameraControls(camera, false);
    startEntranceAnimation(model);
}

function setStateInteractive(camera) {
    setCameraControls(camera, true);
}

function setCameraControls(camera, enabled) {
    camera.setAttribute("look-controls", { enabled });
    if (enabled) {
        camera.setAttribute("wasd-controls", { enabled: true, fly: false });
    } else {
        camera.setAttribute("wasd-controls", { enabled: false });
    }
}

function injectDebugHelpers(scene) {
    const grid = document.createElement("a-plane");
    grid.setAttribute("width", CONFIG.gridSize.width);
    grid.setAttribute("height", CONFIG.gridSize.height);
    grid.setAttribute("position", toVec3String(CONFIG.gridPosition));
    grid.setAttribute("rotation", toVec3String(CONFIG.gridRotation));
    grid.setAttribute("material", {
        color: CONFIG.gridColor,
        wireframe: true,
        opacity: 0.6
    });
    scene.appendChild(grid);

    const axes = document.createElement("a-entity");
    axes.setAttribute("position", toVec3String(CONFIG.axesOrigin));
    axes.appendChild(createAxisLine({ x: 0, y: 0, z: 0 }, { x: CONFIG.axesLength, y: 0, z: 0 }, "#ff0000"));
    axes.appendChild(createAxisLine({ x: 0, y: 0, z: 0 }, { x: 0, y: CONFIG.axesLength, z: 0 }, "#00ff00"));
    axes.appendChild(createAxisLine({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: CONFIG.axesLength }, "#0000ff"));
    scene.appendChild(axes);
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

function setupDebugPanel(model, camera, hud) {
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
        setStateB1(model, hud, camera);
    });

    actions.addButton({ title: "Start B2" }).on("click", () => {
        model.setAttribute("position", toVec3String(CONFIG.modelStart));
        model.setAttribute("rotation", "0 0 0");
        setStateB2(model, hud, camera);
    });

    actions.addButton({ title: "Force C" }).on("click", () => {
        snapToEnd(model);
        setStateInteractive(camera);
    });
}

function startEntranceAnimation(model) {
    model.removeAttribute("animation__position");
    model.removeAttribute("animation__rotation");
    model.setAttribute("position", toVec3String(CONFIG.modelStart));
    model.setAttribute("rotation", "0 0 0");

    model.setAttribute("animation__position", {
        property: "position",
        from: toVec3String(CONFIG.modelStart),
        to: toVec3String(CONFIG.modelEnd),
        dur: CONFIG.animDuration,
        easing: "easeInOutCubic"
    });

    model.setAttribute("animation__rotation", {
        property: "rotation",
        from: "0 0 0",
        to: "0 360 0",
        dur: CONFIG.animDuration,
        easing: "easeInOutCubic"
    });
}

function snapToEnd(model) {
    model.removeAttribute("animation__position");
    model.removeAttribute("animation__rotation");
    model.setAttribute("position", toVec3String(CONFIG.modelEnd));
    model.setAttribute("rotation", "0 360 0");
}

function toVec3String(vec) {
    return `${vec.x} ${vec.y} ${vec.z}`;
}

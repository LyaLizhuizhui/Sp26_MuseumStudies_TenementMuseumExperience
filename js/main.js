let world;
let sky;
let currentRoom = 'room1';

const roomObjects = {
    room1: [],
    room2: [],
    room3: [],
    room4: [],
    room5: []
};

function setup() {
    noCanvas();
    world = new AFrameP5.World('VRScene');

    sky = new AFrameP5.Sky({
        asset: currentRoom
    });
    world.add(sky);

    createRoomObjects();
    showRoomObjects(currentRoom);
    world.setFlying(false);
    createMinimap();
}

function createRoomObjects() {

    roomObjects.room1.push(
        new AFrameP5.Box({
            x: 0, y: 1, z: -5,
            width: 1, height: 1, depth: 1,
            red: 255, green: 0, blue: 0
        })
    );

    roomObjects.room2.push(
        new AFrameP5.Box({
            x: 0, y: 1, z: -5,
            width: 1, height: 1, depth: 1,
            red: 255, green: 0, blue: 0
        })
    );

    roomObjects.room3.push(
        new AFrameP5.Cylinder({
            x: -2, y: 1, z: -5,
            radius: 0.5, height: 2,
            red: 0, green: 0, blue: 255
        })
    );

    roomObjects.room4.push(
        new AFrameP5.Box({
            x: 0, y: 1, z: -5,
            width: 1, height: 1, depth: 1,
            red: 255, green: 0, blue: 0
        })
    );

    roomObjects.room5.push(
        new AFrameP5.Box({
            x: 0, y: 1, z: -5,
            width: 1, height: 1, depth: 1,
            red: 255, green: 0, blue: 0
        })
    );

    for (const room in roomObjects) {
        roomObjects[room].forEach(obj => {
            obj.hide();
            world.add(obj);
        });
    }
}

function showRoomObjects(room) {
    for (const obj of roomObjects[room]) {
        obj.show();
    }
}

function hideRoomObjects(room) {
    for (const obj of roomObjects[room]) {
        obj.hide();
    }
}

function createMinimap() {
    const minimapContainer = document.getElementById('minimap-container');

    const spotsData = [
        { top: '70%', left: '77%', room: 'room1' },
        { top: '50%', left: '60%', room: 'room2' },
        { top: '30%', left: '85%', room: 'room3' },
        { top: '15%', left: '30%', room: 'room4' },
        { top: '70%', left: '10%', room: 'room5' }
    ];

    spotsData.forEach(spotData => {
        const dot = document.createElement('a');
        dot.classList.add('dot');
        dot.style.top = spotData.top;
        dot.style.left = spotData.left;
        dot.addEventListener('click', () => {
            if (spotData.room === currentRoom) return;
            document.body.style.transition = 'opacity 0.5s';
            document.body.style.opacity = 0;

            setTimeout(() => {
                hideRoomObjects(currentRoom);
                if (sky) {
                    world.remove(sky);
                }

                currentRoom = spotData.room;
                sky = new AFrameP5.Sky({
                    asset: currentRoom
                });
                world.add(sky);
                showRoomObjects(currentRoom);
                document.body.style.opacity = 1;
            }, 500);
        });
        minimapContainer.appendChild(dot);
    });
}

function draw() {
}



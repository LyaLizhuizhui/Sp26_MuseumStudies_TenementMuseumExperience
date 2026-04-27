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

let hudsData;
let huds = {};

function setup() {
    noCanvas();
    world = new AFrameP5.World('VRScene');

    sky = new AFrameP5.Sky({
        asset: currentRoom
    });
    //world.add(sky);

    createRoomObjects();
    showRoomObjects(currentRoom);
    //world.setFlying(false);
    //createMinimap();

    const apartment = document.querySelector('#apartment');
    apartment.setAttribute('position', '20 9 13');
}

function preload() {
    hudsData = loadJSON('huds.json');
}

function createRoomObjects() {
    const objectIds = hudsData.objects.map(o => o.id);

    const objects = [
        { room: 'room1', options: { x: 0, y: 1, z: -5, red: 255, green: 0, blue: 0, id: objectIds[0] } },
        { room: 'room2', options: { x: 0, y: 2, z: -5, red: 255, green: 0, blue: 0, id: objectIds[1] } },
        { room: 'room2', options: { x: 1, y: 0, z: -4, red: 255, green: 255, blue: 0, id: objectIds[2] } },
        { room: 'room3', options: { x: 1, y: 1, z: 5, red: 255, green: 0, blue: 255, id: objectIds[3] } },
        { room: 'room4', options: { x: 3, y: -1, z: -5, red: 0, green: 0, blue: 0, id: objectIds[4] } },
        { room: 'room4', options: { x: -3, y: 4, z: 5, red: 0, green: 255, blue: 0, id: objectIds[5] } },
        { room: 'room5', options: { x: 0, y: 2, z: 5, red: 255, green: 255, blue: 0, id: objectIds[6] } }
    ];

    objects.forEach(objData => {
        const box = new AFrameP5.Box({
            ...objData.options,
            width: 1, height: 1, depth: 1,
            enterFunction: function (theBox) {
                theBox.setScale(1.2, 1.2, 1.2);
            },
            leaveFunction: function (theBox) {
                theBox.setScale(1, 1, 1);
            }
        });
        box.myId = objData.options.id;
        roomObjects[objData.room].push(box);

        const hudData = hudsData.objects.find(o => o.id === objData.options.id);
        let hudText = hudData.text;
        let hudHeight = 2;
        // Add "color: black;" so it stands out against the light grey plane
        let hudContent = `value: ${hudText}; color: black; align: center; wrapCount: 30;`;

        const hud = new AFrameP5.Plane({
            x: objData.options.x + 2,
            y: objData.options.y,
            z: objData.options.z,
            width: 2.5,
            height: hudHeight,
            red: 200, green: 200, blue: 200,
            text: hudContent
        });
        huds[objData.options.id] = hud;

    });

    for (const room in roomObjects) {
        roomObjects[room].forEach(obj => {
            obj.hide();
            world.add(obj);
            huds[obj.myId].hide();
            world.add(huds[obj.myId]);
        });
    }
}

function showRoomObjects(room) {
    for (const obj of roomObjects[room]) {
        obj.show();
        huds[obj.myId].show();
    }
}

function hideRoomObjects(room) {
    for (const obj of roomObjects[room]) {
        obj.hide();
        huds[obj.myId].hide();
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
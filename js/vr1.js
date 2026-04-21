let world;

function setup() {
    // no canvas needed for A-Frame VR
    noCanvas();

    // 1. Initialize the world using the ID from your HTML
    world = new AFrameP5.World('VRScene');

    // 2. Set the background using the ID of your <img> asset
    // Note: Use setBackground, not setSky
    let sky = new AFrameP5.Sky({
        asset: 'room1'
    });
    world.add(sky);

    // 3. Prevent the user from 'ghosting' through the floor/ceiling
    world.setFlying(false);
}
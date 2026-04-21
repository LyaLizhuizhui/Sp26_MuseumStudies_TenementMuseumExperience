// variable to hold a reference to our A-Frame world
let world;

function setup() {
    // no canvas needed
    noCanvas();

    // construct the A-Frame world
    // this function requires a reference to the ID of the 'a-scene' tag in our HTML document
    world = new AFrameP5.World('VRScene');

    // set the background of the scene
    let sky = new AFrameP5.Sky({
        asset: 'room4'
    });
    world.add(sky);

    // disallow flying
    world.setFlying(false);
}

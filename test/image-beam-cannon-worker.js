importScripts("image-beam-cannon.js");

class ImageBeamCannonWorker extends ImageBeamCannon.Class {

    drawBeam() {
        self.postMessage({
            "x":this.beamX,
            "y":this.beamY,
            "color":this.color
        });
    }

    static init(options) {
        return new ImageBeamCannonWorker(options ?? {});
    }

}

// Stores instance of imageBeamCannon to be used by worker:
const imageBeamCannonWorker = ImageBeamCannonWorker.init();

onmessage = function (msg) {
    
    if (msg.data.setup) {
        const {width, height, delay, offset, origin} = msg.data.setup;
        imageBeamCannonWorker.width = width;
        imageBeamCannonWorker.height = height;
        imageBeamCannonWorker.delay = delay;
        imageBeamCannonWorker.offset = offset;
        imageBeamCannonWorker.origin = origin;
        console.log("Image Beam Cannon Ready");

    }
    
    if (msg.data.start) {
        imageBeamCannonWorker.start();
    }
    
    if (msg.data.stop) {
        imageBeamCannonWorker.stop();
    }
    
    if (msg.data.message) {
        imageBeamCannonWorker.send(msg.data.message);
    }

    if (msg.data.reset) {
        console.log("reset?")
        imageBeamCannonWorker.resetBeam(); 
    }

}
// Dependencies:
import ImageBeamCannon from ".."; // Base class we are extending

// Implements a beam for erasing the canvas with:
export default class EraseBeam extends ImageBeamCannon {

    /**
     *
     *  Instance Methods
     *  
     */

    // @Override
    drawBeam() {
        const {x,y} = this.drawFn(this);
        this.ctx.clearRect(this.beamX, this.beamY, x,  y);
    }

    /**
     * 
     *  Static Methods
     * 
     */

    // Static Factory Method :: OBJECT -> eraseBeam
    static init(args) {
        return new EraseBeam(args ?? {});
    }

   

}
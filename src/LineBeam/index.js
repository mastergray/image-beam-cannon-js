// Dependencies:
import ImageBeamCannon from "..";   // Base class we are extending:

// Implements a beam for drawing lines:
export default class LineBeam extends ImageBeamCannon {

    /**
     * 
     *  Instace Methods 
     * 
     */

    // @Override 
    drawBeam() {

        // Determine where line should end using stored draw function:
        const {x,y} = this.drawFn(this)

        // Set the stroke color
        this.ctx.strokeStyle = this.color;

        // Draw the line
        this.ctx.beginPath();
        this.ctx.moveTo(this.beamX, this.beamY);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();

    }

    // Static Factory Method :: OBJECT -> lineBeam
    static init(args) {
        return new LineBeam(args ?? {});
    }


}
// Dependencies:
import ImageBeamCannon from "..";   // Base class we are extending:

// Implements a beam for drawing angled lines:
export default class AngularBeam extends ImageBeamCannon {

    /**
     * 
     *  Properties 
     * 
     */

    // @Override :: VOID -> (this -> INT)
    // NOTE: We overide the GETTER because we need direction and length:
    get drawFn() {
        return this._drawFn !== undefined ? this._drawFn : (self) => ({
            "length":self.offset,
            "direction":90 
        })
    }

    // NOTE: Needs include for GETTER override:
    set drawFn(drawFn) {
        super.drawFn = drawFn;
    }

    /**
     * 
     *  Instace Methods 
     * 
     */

    // @Override 
    drawBeam() {

        // Determine where line should end using stored draw function:
        const {length, direction} = this.drawFn(this)
        const angleRadians = (direction * Math.PI) / 180;
        const x = this.beamX + length * Math.cos(angleRadians);
        const y = this.beamY + length * Math.sin(angleRadians);

        // Set the stroke color
        this.ctx.strokeStyle = this.color;

        // Draw the line
        this.ctx.beginPath();
        this.ctx.moveTo(this.beamX, this.beamY);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();

    }

    // Static Factory Method :: OBJECT -> angularBeam
    static init(args) {
        return new AngularBeam(args ?? {});
    }


}
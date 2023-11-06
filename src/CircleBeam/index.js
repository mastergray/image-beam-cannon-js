// Dependencies:
import ImageBeamCannon from ".."; // Base class we are extending

// Implements a beam for drawing circles:
export default class CircleBeam extends ImageBeamCannon {

    /**
     * 
     *  Properties 
     * 
     */

    // @Override :: VOID -> (this -> INT)
    // NOTE: We overide the GETTER because we only need radius to draw the cirlce with:
    get drawFn() {
        return this._drawFn !== undefined ? this._drawFn : () => this.offset;
    }

    // NOTE: Needs include for GETTER override:
    set drawFn(drawFn) {
        super.drawFn = drawFn;
    }

    /**
     * 
     *  Instance Methods 
     * 
     */

    // @Override
    drawBeam() {

        // Using offset fo default radius:
        const radius = this.drawFn(this)

        // Set the stroke color
        this.ctx.fillStyle = this.color;

        // Draw the line
        this.ctx.beginPath();
        this.ctx.arc(this.beamX, this.beamY, radius, 0, Math.PI * 2);
        this.ctx.fill();

    }

    /**
     * 
     *  Static Methods
     * 
     */

    // Static Factory Method :: OBJECT -> circleBeam
    static init(args) {
        return new CircleBeam(args ?? {});
    }

}
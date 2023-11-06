// Dependencies:
import ImageBeamCannon from ".."; // Base class to extend

// Implements a beam for writing text to canvas
export default class WordBeam extends ImageBeamCannon {

    /**
     * 
     *  Properties 
     * 
     */

    // @Override :: VOID -> (this -> {font:STRING, size:STRING, styles:STRING, text:STRING})
    // NOTE: We overide the GETTER because we need to set text and font styles:
    // NOTE: Example "styles" would be like "bold, "italic" or "italic bold"
    get drawFn() {
        return this._drawFn !== undefined ? this._drawFn : () => ({
            font:"Time New Roman",
            styles:"",
            size:"10px",
            text:"TEXT"
        })
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

    // Writes word to screen using given options:
    drawBeam() {

        const {font, styles, size, text} = this.drawFn(this);

        // Set the text properties
        this.ctx.fillStyle = this.color
        this.ctx.font = `${styles} ${size} ${font}`

        // Draw the filled text
        this.ctx.fillText(text, this.beamX, this.beamY);

    }

    /**
     *
     * 
     *  Statc Methods
     *
     */

    // Static Factory Method :: OBJECT -> wordBeam
    static init(args) {
        return new WordBeam(args ?? {});
    }

   

}
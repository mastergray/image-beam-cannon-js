export default class ImageBeamCannon {

    _canvas;     // Canvas we are drawing to
    width;      // Width of canvas we are drawing to
    height;     // Height of canvas we are drawing to
    ctx;         // Context of canvas we are drawing to
    beamX = 0;    // x-postion of beam
    beamY = 0;    // y-position of beam
    _offset;      // Rate at which beam moves horizontaly across the canvas - defaults to one pixel at a time
    isRunning;   // Determines if beam is "running" 
    _isFiring;    // Determines if beam is drawing to canvas or not
    _color;       // Current Color of beam
    queue;       // Stores messages for how beam color changes and if beam is on or off
    _delay;      // Delay between beam movement (in ms)
    _drawFn;     // Stores a function that returns values used to draw the beam with
    _origin;   // Stores where beam should start from and reset back to

    // CONSTRUCTOR :: STRING, INT|VOID -> this
    constructor({selector, offset, delay, drawFn, origin}) {
        if (selector) {
           this.canvas = selector;
        }
        this.offset = offset;
        this.delay = delay;
        this.queue = [];
        this.drawFn = drawFn
        this.origin = origin
    }

    /**
     * 
     *  Properties 
     * 
     */

    // SETTER :: STRING -> VOID
    set canvas(selector) {
        this._canvas = document.querySelector(selector);
        if (this._canvas == null) {
            throw new Error("No Canvas Found For Given Selector");
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ctx = this.canvas.getContext("2d");
    }

    // GETTER :: VOID -> ELEMENT
    get canvas() {
        return this._canvas;
    }

    // GETTER :: INT -> VOID
    set offset(offset) {
        offset = parseInt(offset)
        if (!isNaN(offset)) {
            this._offset = offset;
        }
    }

    // GETTER :: VOID -> INT
    get offset() {
        return this._offset ?? 1;
    }

    // SETTER :: STRING|BOOLEAN -> VOID
    set isFiring(isFiring) {
        if (typeof(isFiring) === "boolean") {
            this._isFiring = isFiring
        }
        if (typeof(isFiring) === "string") {
            if (isFiring === "true") {
                this._isFiring = true;
            }
            if (isFiring === "false") {
                this._isFiring = false;
            }
        }
    }

    // GETTER :: VOID -> BOOLEAN
    get isFiring() {
        return this._isFiring ?? false;
    }

    // SETTER :: STRING -> VOID
    set color(color) {
        if (typeof(color) === "string") {
            this._color = color;
        }
    }

    // GETTER :: VOID -> STRING
    get color() {
        return this._color ?? "#000000";
    }

    // SETTER :: INT -> VOID
    set delay(delay) {
        delay = parseInt(delay);
        if (!isNaN(delay)) {
            this._delay = delay;
        }
    }

    // GETTER :: VOID -> INT
    get delay() {
        return this._delay ?? 1;
    }

    // SETTER :: FUNCTION -> VOID
    set drawFn(fn) {
        if (typeof(fn) === "function") {
            this._drawFn = fn;
        }
    }

    // :: GETTER :: VOID -> FUNCTION
    get drawFn() {
        return this._drawFn !== undefined ? this._drawFn : () => ({x:this.offset, y:this.offset});
    }

    // SETTER :: {x:INT, y:INT} -> VOID
    set origin(origin) {
        if (typeof(origin) === "object") {
            this._origin = {
                "x":origin.x ?? 0,
                "y":origin.y ?? 0
            }
            this.beamX = this.origin.x;
            this.beamY = this.origin.y
        } 
    }

    // GETTER :: VOID -> {x:INT, y:INT}
    get origin() {
        return this._origin ?? {x:0, y:0}
    }


    /**
     * 
     *  Instace Methos
     * 
     */

    // :: VOID -> VOID
    // Recursively updates the current position of the beam using a trampoline, and "fires" beam at new position:
    moveBeam() {

        // Define recursive logic in a trampoline to prevent recursive overflow:
        const trampoline = () => {
            
            // Only move beam if beam is running:
            if (this.isRunning === false) {
                
                // Terminate recursion
                return false;
            
            } else {
                
                // Check for next message and update beam:
                if (this.queue.length > 0) {
                    const {isFiring, color, offset, delay} = this.queue.shift();
                    this.isFiring = isFiring;
                    this.color = color;
                    this.offset = offset
                    this.delay = delay;
                }
                
                // Drawm beam if on:
                if (this.isFiring === true) {
                     this.drawBeam();
                }

                // Increment horizontal position by offset:
                this.beamX = (this.beamX + this.offset) % this.width;
 
                // Detect line end and move to the next line
                if (this.beamX < this.offset) {
                    this.beamY = (this.beamY + this.offset) % this.height;
                }
               
                // Reset the beam positions when it reaches the end of the canvas
                if (this.beamY === (this.height - this.offset) % this.height) {
                    this.beamX = this.origin.x;
                    this.beamY = this.origin.y;
                }

                setTimeout(() => {
                    trampoline();
                }, this.delay);

                //return trampoline;
            }
        
        };
    
        // Calls trampoline as a deferred function until recursion terminates:
        let deferred = trampoline();
        /*while (typeof(deferred) == "function") {
            deferred = deferred();
        }*/

    }

    // :: OBJECT -> VOID
    // Writes pixel to canvas using stored color
    // NOTE: "Size" of pixel is determined by offset of the beam
    // NOTE: This could be overwritten to change what gets drawn to canvas
    drawBeam() {
        const {x,y} = this.drawFn(this)
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.beamX, this.beamY, x, y);
    }

    // CHAINABLE :: {isFiring:BOOL, color:STRING, offset:NUMBER, delay:NUMBER} -> this
    // Queue message that determines if beam should be firing and what color is should be firing with:
    send({isFiring, color, offset, delay}) {
        this.queue.push({isFiring, color, offset, delay});
        return this;
    }

    // CHAINABLE :: VOID -> this
    // Starts moving the beam:
    // NOTE: Optional cooridates can be provided to determine where beam should start at
    start() {
        this.isRunning = true;
       // this.checkQueue();
        this.moveBeam();
    }

    // CHAINABLE :: VOID -> this
    // Stops moving the beam:
    stop() {
        this.isRunning = false;
        return this;
    }

    // CHAINABLE :: VOID -> this
    // Clears canvas:
    clear() {
        this.ctx.clearRect(0,0, this.width, this.height);
        return this;
    }

    // CHAINABLE :: STRING -> this
    // Set background color of canvas
    paint(color) {
        this.canvas.style.backgroundColor = color;
        return this;
    }

    // :: VOID -> VOID
    // Recursively checks queue using a trampoline:
   /*checkQueue() {

        // Define recursive logic in a trampoline to prevent recursive overflow:
        let trampoline = () => {
            if (this.isRunning == true) {
                if (this.queue.length > 0) {
                    const {isFiring, color} = this.queue.shift();
                    if (typeof(isFiring) === "boolean") {
                        this.isFiring = isFiring;
                    }
                    if (typeof(color) === "string") {
                        this.color = color
                    }
                }
                return trampoline;
            }
            return false;
        }

        // Calls trampoline as a deferred function until recursion terminates:
        let deferred = trampoline();
        while (typeof(deferred) === "function") {
            deferred = deferred();
        }
    }*/

    // Reset beam back to starting point:
    resetBeam() {
        this.beamX = this.origin.x;
        this.beamY = this.origin.y
    }

    /**
     * 
     *  Static Methods
     * 
     */

    // Static Factory Method :: OBJECT -> imageBeamCannon
    static init(options) {
        return new ImageBeamCannon(options ?? {});
    }

}
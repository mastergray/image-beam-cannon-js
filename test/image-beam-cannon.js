(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ImageBeamCannon"] = factory();
	else
		root["ImageBeamCannon"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AngularBeam/index.js":
/*!**********************************!*\
  !*** ./src/AngularBeam/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AngularBeam)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
// Dependencies:
   // Base class we are extending:

// Implements a beam for drawing angled lines:
class AngularBeam extends ___WEBPACK_IMPORTED_MODULE_0__["default"] {

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

/***/ }),

/***/ "./src/CircleBeam/index.js":
/*!*********************************!*\
  !*** ./src/CircleBeam/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CircleBeam)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
// Dependencies:
 // Base class we are extending

// Implements a beam for drawing circles:
class CircleBeam extends ___WEBPACK_IMPORTED_MODULE_0__["default"] {

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

/***/ }),

/***/ "./src/EraseBeam/index.js":
/*!********************************!*\
  !*** ./src/EraseBeam/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EraseBeam)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
// Dependencies:
 // Base class we are extending

// Implements a beam for erasing the canvas with:
class EraseBeam extends ___WEBPACK_IMPORTED_MODULE_0__["default"] {

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

/***/ }),

/***/ "./src/LineBeam/index.js":
/*!*******************************!*\
  !*** ./src/LineBeam/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LineBeam)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
// Dependencies:
   // Base class we are extending:

// Implements a beam for drawing lines:
class LineBeam extends ___WEBPACK_IMPORTED_MODULE_0__["default"] {

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

/***/ }),

/***/ "./src/WordBeam/index.js":
/*!*******************************!*\
  !*** ./src/WordBeam/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WordBeam)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
// Dependencies:
 // Base class to extend

// Implements a beam for writing text to canvas
class WordBeam extends ___WEBPACK_IMPORTED_MODULE_0__["default"] {

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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageBeamCannon)
/* harmony export */ });
class ImageBeamCannon {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngularBeam: () => (/* reexport safe */ _src_AngularBeam_index_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   CircleBeam: () => (/* reexport safe */ _src_CircleBeam_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Class: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   EraseBeam: () => (/* reexport safe */ _src_EraseBeam_index_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   LineBeam: () => (/* reexport safe */ _src_LineBeam_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   WordBeam: () => (/* reexport safe */ _src_WordBeam_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index.js */ "./src/index.js");
/* harmony import */ var _src_LineBeam_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/LineBeam/index.js */ "./src/LineBeam/index.js");
/* harmony import */ var _src_CircleBeam_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/CircleBeam/index.js */ "./src/CircleBeam/index.js");
/* harmony import */ var _src_EraseBeam_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/EraseBeam/index.js */ "./src/EraseBeam/index.js");
/* harmony import */ var _src_WordBeam_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/WordBeam/index.js */ "./src/WordBeam/index.js");
/* harmony import */ var _src_AngularBeam_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/AngularBeam/index.js */ "./src/AngularBeam/index.js");







function init(options) {
    return _src_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].init(options);
}




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QiwrQkFBK0I7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTs7Ozs7O1VDelNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ042QztBQUNDO0FBQ0k7QUFDRjtBQUNEO0FBQ0s7O0FBRXBEO0FBQ0EsV0FBVyxxREFBZTtBQUMxQjs7QUFVQyIsInNvdXJjZXMiOlsid2VicGFjazovL0ltYWdlQmVhbUNhbm5vbi93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSW1hZ2VCZWFtQ2Fubm9uLy4vc3JjL0FuZ3VsYXJCZWFtL2luZGV4LmpzIiwid2VicGFjazovL0ltYWdlQmVhbUNhbm5vbi8uL3NyYy9DaXJjbGVCZWFtL2luZGV4LmpzIiwid2VicGFjazovL0ltYWdlQmVhbUNhbm5vbi8uL3NyYy9FcmFzZUJlYW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vSW1hZ2VCZWFtQ2Fubm9uLy4vc3JjL0xpbmVCZWFtL2luZGV4LmpzIiwid2VicGFjazovL0ltYWdlQmVhbUNhbm5vbi8uL3NyYy9Xb3JkQmVhbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9JbWFnZUJlYW1DYW5ub24vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSW1hZ2VCZWFtQ2Fubm9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0ltYWdlQmVhbUNhbm5vbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vSW1hZ2VCZWFtQ2Fubm9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vSW1hZ2VCZWFtQ2Fubm9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSW1hZ2VCZWFtQ2Fubm9uLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSW1hZ2VCZWFtQ2Fubm9uXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkltYWdlQmVhbUNhbm5vblwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvLyBEZXBlbmRlbmNpZXM6XG5pbXBvcnQgSW1hZ2VCZWFtQ2Fubm9uIGZyb20gXCIuLlwiOyAgIC8vIEJhc2UgY2xhc3Mgd2UgYXJlIGV4dGVuZGluZzpcblxuLy8gSW1wbGVtZW50cyBhIGJlYW0gZm9yIGRyYXdpbmcgYW5nbGVkIGxpbmVzOlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5ndWxhckJlYW0gZXh0ZW5kcyBJbWFnZUJlYW1DYW5ub24ge1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogIFByb3BlcnRpZXMgXG4gICAgICogXG4gICAgICovXG5cbiAgICAvLyBAT3ZlcnJpZGUgOjogVk9JRCAtPiAodGhpcyAtPiBJTlQpXG4gICAgLy8gTk9URTogV2Ugb3ZlcmlkZSB0aGUgR0VUVEVSIGJlY2F1c2Ugd2UgbmVlZCBkaXJlY3Rpb24gYW5kIGxlbmd0aDpcbiAgICBnZXQgZHJhd0ZuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd0ZuICE9PSB1bmRlZmluZWQgPyB0aGlzLl9kcmF3Rm4gOiAoc2VsZikgPT4gKHtcbiAgICAgICAgICAgIFwibGVuZ3RoXCI6c2VsZi5vZmZzZXQsXG4gICAgICAgICAgICBcImRpcmVjdGlvblwiOjkwIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIE5PVEU6IE5lZWRzIGluY2x1ZGUgZm9yIEdFVFRFUiBvdmVycmlkZTpcbiAgICBzZXQgZHJhd0ZuKGRyYXdGbikge1xuICAgICAgICBzdXBlci5kcmF3Rm4gPSBkcmF3Rm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogIEluc3RhY2UgTWV0aG9kcyBcbiAgICAgKiBcbiAgICAgKi9cblxuICAgIC8vIEBPdmVycmlkZSBcbiAgICBkcmF3QmVhbSgpIHtcblxuICAgICAgICAvLyBEZXRlcm1pbmUgd2hlcmUgbGluZSBzaG91bGQgZW5kIHVzaW5nIHN0b3JlZCBkcmF3IGZ1bmN0aW9uOlxuICAgICAgICBjb25zdCB7bGVuZ3RoLCBkaXJlY3Rpb259ID0gdGhpcy5kcmF3Rm4odGhpcylcbiAgICAgICAgY29uc3QgYW5nbGVSYWRpYW5zID0gKGRpcmVjdGlvbiAqIE1hdGguUEkpIC8gMTgwO1xuICAgICAgICBjb25zdCB4ID0gdGhpcy5iZWFtWCArIGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlUmFkaWFucyk7XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLmJlYW1ZICsgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGVSYWRpYW5zKTtcblxuICAgICAgICAvLyBTZXQgdGhlIHN0cm9rZSBjb2xvclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgbGluZVxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuYmVhbVgsIHRoaXMuYmVhbVkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oeCwgeSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgfVxuXG4gICAgLy8gU3RhdGljIEZhY3RvcnkgTWV0aG9kIDo6IE9CSkVDVCAtPiBhbmd1bGFyQmVhbVxuICAgIHN0YXRpYyBpbml0KGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBbmd1bGFyQmVhbShhcmdzID8/IHt9KTtcbiAgICB9XG5cblxufSIsIi8vIERlcGVuZGVuY2llczpcbmltcG9ydCBJbWFnZUJlYW1DYW5ub24gZnJvbSBcIi4uXCI7IC8vIEJhc2UgY2xhc3Mgd2UgYXJlIGV4dGVuZGluZ1xuXG4vLyBJbXBsZW1lbnRzIGEgYmVhbSBmb3IgZHJhd2luZyBjaXJjbGVzOlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlQmVhbSBleHRlbmRzIEltYWdlQmVhbUNhbm5vbiB7XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiAgUHJvcGVydGllcyBcbiAgICAgKiBcbiAgICAgKi9cblxuICAgIC8vIEBPdmVycmlkZSA6OiBWT0lEIC0+ICh0aGlzIC0+IElOVClcbiAgICAvLyBOT1RFOiBXZSBvdmVyaWRlIHRoZSBHRVRURVIgYmVjYXVzZSB3ZSBvbmx5IG5lZWQgcmFkaXVzIHRvIGRyYXcgdGhlIGNpcmxjZSB3aXRoOlxuICAgIGdldCBkcmF3Rm4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3Rm4gIT09IHVuZGVmaW5lZCA/IHRoaXMuX2RyYXdGbiA6ICgpID0+IHRoaXMub2Zmc2V0O1xuICAgIH1cblxuICAgIC8vIE5PVEU6IE5lZWRzIGluY2x1ZGUgZm9yIEdFVFRFUiBvdmVycmlkZTpcbiAgICBzZXQgZHJhd0ZuKGRyYXdGbikge1xuICAgICAgICBzdXBlci5kcmF3Rm4gPSBkcmF3Rm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogIEluc3RhbmNlIE1ldGhvZHMgXG4gICAgICogXG4gICAgICovXG5cbiAgICAvLyBAT3ZlcnJpZGVcbiAgICBkcmF3QmVhbSgpIHtcblxuICAgICAgICAvLyBVc2luZyBvZmZzZXQgZm8gZGVmYXVsdCByYWRpdXM6XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IHRoaXMuZHJhd0ZuKHRoaXMpXG5cbiAgICAgICAgLy8gU2V0IHRoZSBzdHJva2UgY29sb3JcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcblxuICAgICAgICAvLyBEcmF3IHRoZSBsaW5lXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5iZWFtWCwgdGhpcy5iZWFtWSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqICBTdGF0aWMgTWV0aG9kc1xuICAgICAqIFxuICAgICAqL1xuXG4gICAgLy8gU3RhdGljIEZhY3RvcnkgTWV0aG9kIDo6IE9CSkVDVCAtPiBjaXJjbGVCZWFtXG4gICAgc3RhdGljIGluaXQoYXJncykge1xuICAgICAgICByZXR1cm4gbmV3IENpcmNsZUJlYW0oYXJncyA/PyB7fSk7XG4gICAgfVxuXG59IiwiLy8gRGVwZW5kZW5jaWVzOlxuaW1wb3J0IEltYWdlQmVhbUNhbm5vbiBmcm9tIFwiLi5cIjsgLy8gQmFzZSBjbGFzcyB3ZSBhcmUgZXh0ZW5kaW5nXG5cbi8vIEltcGxlbWVudHMgYSBiZWFtIGZvciBlcmFzaW5nIHRoZSBjYW52YXMgd2l0aDpcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVyYXNlQmVhbSBleHRlbmRzIEltYWdlQmVhbUNhbm5vbiB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqICBJbnN0YW5jZSBNZXRob2RzXG4gICAgICogIFxuICAgICAqL1xuXG4gICAgLy8gQE92ZXJyaWRlXG4gICAgZHJhd0JlYW0oKSB7XG4gICAgICAgIGNvbnN0IHt4LHl9ID0gdGhpcy5kcmF3Rm4odGhpcyk7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLmJlYW1YLCB0aGlzLmJlYW1ZLCB4LCAgeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogIFN0YXRpYyBNZXRob2RzXG4gICAgICogXG4gICAgICovXG5cbiAgICAvLyBTdGF0aWMgRmFjdG9yeSBNZXRob2QgOjogT0JKRUNUIC0+IGVyYXNlQmVhbVxuICAgIHN0YXRpYyBpbml0KGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcmFzZUJlYW0oYXJncyA/PyB7fSk7XG4gICAgfVxuXG4gICBcblxufSIsIi8vIERlcGVuZGVuY2llczpcbmltcG9ydCBJbWFnZUJlYW1DYW5ub24gZnJvbSBcIi4uXCI7ICAgLy8gQmFzZSBjbGFzcyB3ZSBhcmUgZXh0ZW5kaW5nOlxuXG4vLyBJbXBsZW1lbnRzIGEgYmVhbSBmb3IgZHJhd2luZyBsaW5lczpcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVCZWFtIGV4dGVuZHMgSW1hZ2VCZWFtQ2Fubm9uIHtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqICBJbnN0YWNlIE1ldGhvZHMgXG4gICAgICogXG4gICAgICovXG5cbiAgICAvLyBAT3ZlcnJpZGUgXG4gICAgZHJhd0JlYW0oKSB7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoZXJlIGxpbmUgc2hvdWxkIGVuZCB1c2luZyBzdG9yZWQgZHJhdyBmdW5jdGlvbjpcbiAgICAgICAgY29uc3Qge3gseX0gPSB0aGlzLmRyYXdGbih0aGlzKVxuXG4gICAgICAgIC8vIFNldCB0aGUgc3Ryb2tlIGNvbG9yXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcblxuICAgICAgICAvLyBEcmF3IHRoZSBsaW5lXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5iZWFtWCwgdGhpcy5iZWFtWSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh4LCB5KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICB9XG5cbiAgICAvLyBTdGF0aWMgRmFjdG9yeSBNZXRob2QgOjogT0JKRUNUIC0+IGxpbmVCZWFtXG4gICAgc3RhdGljIGluaXQoYXJncykge1xuICAgICAgICByZXR1cm4gbmV3IExpbmVCZWFtKGFyZ3MgPz8ge30pO1xuICAgIH1cblxuXG59IiwiLy8gRGVwZW5kZW5jaWVzOlxuaW1wb3J0IEltYWdlQmVhbUNhbm5vbiBmcm9tIFwiLi5cIjsgLy8gQmFzZSBjbGFzcyB0byBleHRlbmRcblxuLy8gSW1wbGVtZW50cyBhIGJlYW0gZm9yIHdyaXRpbmcgdGV4dCB0byBjYW52YXNcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmRCZWFtIGV4dGVuZHMgSW1hZ2VCZWFtQ2Fubm9uIHtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqICBQcm9wZXJ0aWVzIFxuICAgICAqIFxuICAgICAqL1xuXG4gICAgLy8gQE92ZXJyaWRlIDo6IFZPSUQgLT4gKHRoaXMgLT4ge2ZvbnQ6U1RSSU5HLCBzaXplOlNUUklORywgc3R5bGVzOlNUUklORywgdGV4dDpTVFJJTkd9KVxuICAgIC8vIE5PVEU6IFdlIG92ZXJpZGUgdGhlIEdFVFRFUiBiZWNhdXNlIHdlIG5lZWQgdG8gc2V0IHRleHQgYW5kIGZvbnQgc3R5bGVzOlxuICAgIC8vIE5PVEU6IEV4YW1wbGUgXCJzdHlsZXNcIiB3b3VsZCBiZSBsaWtlIFwiYm9sZCwgXCJpdGFsaWNcIiBvciBcIml0YWxpYyBib2xkXCJcbiAgICBnZXQgZHJhd0ZuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd0ZuICE9PSB1bmRlZmluZWQgPyB0aGlzLl9kcmF3Rm4gOiAoKSA9PiAoe1xuICAgICAgICAgICAgZm9udDpcIlRpbWUgTmV3IFJvbWFuXCIsXG4gICAgICAgICAgICBzdHlsZXM6XCJcIixcbiAgICAgICAgICAgIHNpemU6XCIxMHB4XCIsXG4gICAgICAgICAgICB0ZXh0OlwiVEVYVFwiXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gTk9URTogTmVlZHMgaW5jbHVkZSBmb3IgR0VUVEVSIG92ZXJyaWRlOlxuICAgIHNldCBkcmF3Rm4oZHJhd0ZuKSB7XG4gICAgICAgIHN1cGVyLmRyYXdGbiA9IGRyYXdGbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiAgSW5zdGFuY2UgTWV0aG9kcyBcbiAgICAgKiBcbiAgICAgKi9cblxuICAgIC8vIFdyaXRlcyB3b3JkIHRvIHNjcmVlbiB1c2luZyBnaXZlbiBvcHRpb25zOlxuICAgIGRyYXdCZWFtKCkge1xuXG4gICAgICAgIGNvbnN0IHtmb250LCBzdHlsZXMsIHNpemUsIHRleHR9ID0gdGhpcy5kcmF3Rm4odGhpcyk7XG5cbiAgICAgICAgLy8gU2V0IHRoZSB0ZXh0IHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvclxuICAgICAgICB0aGlzLmN0eC5mb250ID0gYCR7c3R5bGVzfSAke3NpemV9ICR7Zm9udH1gXG5cbiAgICAgICAgLy8gRHJhdyB0aGUgZmlsbGVkIHRleHRcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGV4dCwgdGhpcy5iZWFtWCwgdGhpcy5iZWFtWSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIFxuICAgICAqICBTdGF0YyBNZXRob2RzXG4gICAgICpcbiAgICAgKi9cblxuICAgIC8vIFN0YXRpYyBGYWN0b3J5IE1ldGhvZCA6OiBPQkpFQ1QgLT4gd29yZEJlYW1cbiAgICBzdGF0aWMgaW5pdChhcmdzKSB7XG4gICAgICAgIHJldHVybiBuZXcgV29yZEJlYW0oYXJncyA/PyB7fSk7XG4gICAgfVxuXG4gICBcblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlQmVhbUNhbm5vbiB7XG5cbiAgICBfY2FudmFzOyAgICAgLy8gQ2FudmFzIHdlIGFyZSBkcmF3aW5nIHRvXG4gICAgd2lkdGg7ICAgICAgLy8gV2lkdGggb2YgY2FudmFzIHdlIGFyZSBkcmF3aW5nIHRvXG4gICAgaGVpZ2h0OyAgICAgLy8gSGVpZ2h0IG9mIGNhbnZhcyB3ZSBhcmUgZHJhd2luZyB0b1xuICAgIGN0eDsgICAgICAgICAvLyBDb250ZXh0IG9mIGNhbnZhcyB3ZSBhcmUgZHJhd2luZyB0b1xuICAgIGJlYW1YID0gMDsgICAgLy8geC1wb3N0aW9uIG9mIGJlYW1cbiAgICBiZWFtWSA9IDA7ICAgIC8vIHktcG9zaXRpb24gb2YgYmVhbVxuICAgIF9vZmZzZXQ7ICAgICAgLy8gUmF0ZSBhdCB3aGljaCBiZWFtIG1vdmVzIGhvcml6b250YWx5IGFjcm9zcyB0aGUgY2FudmFzIC0gZGVmYXVsdHMgdG8gb25lIHBpeGVsIGF0IGEgdGltZVxuICAgIGlzUnVubmluZzsgICAvLyBEZXRlcm1pbmVzIGlmIGJlYW0gaXMgXCJydW5uaW5nXCIgXG4gICAgX2lzRmlyaW5nOyAgICAvLyBEZXRlcm1pbmVzIGlmIGJlYW0gaXMgZHJhd2luZyB0byBjYW52YXMgb3Igbm90XG4gICAgX2NvbG9yOyAgICAgICAvLyBDdXJyZW50IENvbG9yIG9mIGJlYW1cbiAgICBxdWV1ZTsgICAgICAgLy8gU3RvcmVzIG1lc3NhZ2VzIGZvciBob3cgYmVhbSBjb2xvciBjaGFuZ2VzIGFuZCBpZiBiZWFtIGlzIG9uIG9yIG9mZlxuICAgIF9kZWxheTsgICAgICAvLyBEZWxheSBiZXR3ZWVuIGJlYW0gbW92ZW1lbnQgKGluIG1zKVxuICAgIF9kcmF3Rm47ICAgICAvLyBTdG9yZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdmFsdWVzIHVzZWQgdG8gZHJhdyB0aGUgYmVhbSB3aXRoXG4gICAgX29yaWdpbjsgICAvLyBTdG9yZXMgd2hlcmUgYmVhbSBzaG91bGQgc3RhcnQgZnJvbSBhbmQgcmVzZXQgYmFjayB0b1xuXG4gICAgLy8gQ09OU1RSVUNUT1IgOjogU1RSSU5HLCBJTlR8Vk9JRCAtPiB0aGlzXG4gICAgY29uc3RydWN0b3Ioe3NlbGVjdG9yLCBvZmZzZXQsIGRlbGF5LCBkcmF3Rm4sIG9yaWdpbn0pIHtcbiAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgIHRoaXMuY2FudmFzID0gc2VsZWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmRyYXdGbiA9IGRyYXdGblxuICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqICBQcm9wZXJ0aWVzIFxuICAgICAqIFxuICAgICAqL1xuXG4gICAgLy8gU0VUVEVSIDo6IFNUUklORyAtPiBWT0lEXG4gICAgc2V0IGNhbnZhcyhzZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgaWYgKHRoaXMuX2NhbnZhcyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBDYW52YXMgRm91bmQgRm9yIEdpdmVuIFNlbGVjdG9yXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cblxuICAgIC8vIEdFVFRFUiA6OiBWT0lEIC0+IEVMRU1FTlRcbiAgICBnZXQgY2FudmFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzO1xuICAgIH1cblxuICAgIC8vIEdFVFRFUiA6OiBJTlQgLT4gVk9JRFxuICAgIHNldCBvZmZzZXQob2Zmc2V0KSB7XG4gICAgICAgIG9mZnNldCA9IHBhcnNlSW50KG9mZnNldClcbiAgICAgICAgaWYgKCFpc05hTihvZmZzZXQpKSB7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHRVRURVIgOjogVk9JRCAtPiBJTlRcbiAgICBnZXQgb2Zmc2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb2Zmc2V0ID8/IDE7XG4gICAgfVxuXG4gICAgLy8gU0VUVEVSIDo6IFNUUklOR3xCT09MRUFOIC0+IFZPSURcbiAgICBzZXQgaXNGaXJpbmcoaXNGaXJpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZihpc0ZpcmluZykgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0ZpcmluZyA9IGlzRmlyaW5nXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZihpc0ZpcmluZykgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmIChpc0ZpcmluZyA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0ZpcmluZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNGaXJpbmcgPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzRmlyaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHRVRURVIgOjogVk9JRCAtPiBCT09MRUFOXG4gICAgZ2V0IGlzRmlyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNGaXJpbmcgPz8gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gU0VUVEVSIDo6IFNUUklORyAtPiBWT0lEXG4gICAgc2V0IGNvbG9yKGNvbG9yKSB7XG4gICAgICAgIGlmICh0eXBlb2YoY29sb3IpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR0VUVEVSIDo6IFZPSUQgLT4gU1RSSU5HXG4gICAgZ2V0IGNvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3IgPz8gXCIjMDAwMDAwXCI7XG4gICAgfVxuXG4gICAgLy8gU0VUVEVSIDo6IElOVCAtPiBWT0lEXG4gICAgc2V0IGRlbGF5KGRlbGF5KSB7XG4gICAgICAgIGRlbGF5ID0gcGFyc2VJbnQoZGVsYXkpO1xuICAgICAgICBpZiAoIWlzTmFOKGRlbGF5KSkge1xuICAgICAgICAgICAgdGhpcy5fZGVsYXkgPSBkZWxheTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdFVFRFUiA6OiBWT0lEIC0+IElOVFxuICAgIGdldCBkZWxheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGF5ID8/IDE7XG4gICAgfVxuXG4gICAgLy8gU0VUVEVSIDo6IEZVTkNUSU9OIC0+IFZPSURcbiAgICBzZXQgZHJhd0ZuKGZuKSB7XG4gICAgICAgIGlmICh0eXBlb2YoZm4pID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RyYXdGbiA9IGZuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gOjogR0VUVEVSIDo6IFZPSUQgLT4gRlVOQ1RJT05cbiAgICBnZXQgZHJhd0ZuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd0ZuICE9PSB1bmRlZmluZWQgPyB0aGlzLl9kcmF3Rm4gOiAoKSA9PiAoe3g6dGhpcy5vZmZzZXQsIHk6dGhpcy5vZmZzZXR9KTtcbiAgICB9XG5cbiAgICAvLyBTRVRURVIgOjoge3g6SU5ULCB5OklOVH0gLT4gVk9JRFxuICAgIHNldCBvcmlnaW4ob3JpZ2luKSB7XG4gICAgICAgIGlmICh0eXBlb2Yob3JpZ2luKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGhpcy5fb3JpZ2luID0ge1xuICAgICAgICAgICAgICAgIFwieFwiOm9yaWdpbi54ID8/IDAsXG4gICAgICAgICAgICAgICAgXCJ5XCI6b3JpZ2luLnkgPz8gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5iZWFtWCA9IHRoaXMub3JpZ2luLng7XG4gICAgICAgICAgICB0aGlzLmJlYW1ZID0gdGhpcy5vcmlnaW4ueVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIC8vIEdFVFRFUiA6OiBWT0lEIC0+IHt4OklOVCwgeTpJTlR9XG4gICAgZ2V0IG9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yaWdpbiA/PyB7eDowLCB5OjB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiAgSW5zdGFjZSBNZXRob3NcbiAgICAgKiBcbiAgICAgKi9cblxuICAgIC8vIDo6IFZPSUQgLT4gVk9JRFxuICAgIC8vIFJlY3Vyc2l2ZWx5IHVwZGF0ZXMgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIGJlYW0gdXNpbmcgYSB0cmFtcG9saW5lLCBhbmQgXCJmaXJlc1wiIGJlYW0gYXQgbmV3IHBvc2l0aW9uOlxuICAgIG1vdmVCZWFtKCkge1xuXG4gICAgICAgIC8vIERlZmluZSByZWN1cnNpdmUgbG9naWMgaW4gYSB0cmFtcG9saW5lIHRvIHByZXZlbnQgcmVjdXJzaXZlIG92ZXJmbG93OlxuICAgICAgICBjb25zdCB0cmFtcG9saW5lID0gKCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBPbmx5IG1vdmUgYmVhbSBpZiBiZWFtIGlzIHJ1bm5pbmc6XG4gICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gVGVybWluYXRlIHJlY3Vyc2lvblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgbmV4dCBtZXNzYWdlIGFuZCB1cGRhdGUgYmVhbTpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtpc0ZpcmluZywgY29sb3IsIG9mZnNldCwgZGVsYXl9ID0gdGhpcy5xdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmlyaW5nID0gaXNGaXJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBEcmF3bSBiZWFtIGlmIG9uOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRmlyaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdCZWFtKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSW5jcmVtZW50IGhvcml6b250YWwgcG9zaXRpb24gYnkgb2Zmc2V0OlxuICAgICAgICAgICAgICAgIHRoaXMuYmVhbVggPSAodGhpcy5iZWFtWCArIHRoaXMub2Zmc2V0KSAlIHRoaXMud2lkdGg7XG4gXG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IGxpbmUgZW5kIGFuZCBtb3ZlIHRvIHRoZSBuZXh0IGxpbmVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iZWFtWCA8IHRoaXMub2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVhbVkgPSAodGhpcy5iZWFtWSArIHRoaXMub2Zmc2V0KSAlIHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBiZWFtIHBvc2l0aW9ucyB3aGVuIGl0IHJlYWNoZXMgdGhlIGVuZCBvZiB0aGUgY2FudmFzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmVhbVkgPT09ICh0aGlzLmhlaWdodCAtIHRoaXMub2Zmc2V0KSAlIHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVhbVggPSB0aGlzLm9yaWdpbi54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlYW1ZID0gdGhpcy5vcmlnaW4ueTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbXBvbGluZSgpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMuZGVsYXkpO1xuXG4gICAgICAgICAgICAgICAgLy9yZXR1cm4gdHJhbXBvbGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIC8vIENhbGxzIHRyYW1wb2xpbmUgYXMgYSBkZWZlcnJlZCBmdW5jdGlvbiB1bnRpbCByZWN1cnNpb24gdGVybWluYXRlczpcbiAgICAgICAgbGV0IGRlZmVycmVkID0gdHJhbXBvbGluZSgpO1xuICAgICAgICAvKndoaWxlICh0eXBlb2YoZGVmZXJyZWQpID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZGVmZXJyZWQgPSBkZWZlcnJlZCgpO1xuICAgICAgICB9Ki9cblxuICAgIH1cblxuICAgIC8vIDo6IE9CSkVDVCAtPiBWT0lEXG4gICAgLy8gV3JpdGVzIHBpeGVsIHRvIGNhbnZhcyB1c2luZyBzdG9yZWQgY29sb3JcbiAgICAvLyBOT1RFOiBcIlNpemVcIiBvZiBwaXhlbCBpcyBkZXRlcm1pbmVkIGJ5IG9mZnNldCBvZiB0aGUgYmVhbVxuICAgIC8vIE5PVEU6IFRoaXMgY291bGQgYmUgb3ZlcndyaXR0ZW4gdG8gY2hhbmdlIHdoYXQgZ2V0cyBkcmF3biB0byBjYW52YXNcbiAgICBkcmF3QmVhbSgpIHtcbiAgICAgICAgY29uc3Qge3gseX0gPSB0aGlzLmRyYXdGbih0aGlzKVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLmJlYW1YLCB0aGlzLmJlYW1ZLCB4LCB5KTtcbiAgICB9XG5cbiAgICAvLyBDSEFJTkFCTEUgOjoge2lzRmlyaW5nOkJPT0wsIGNvbG9yOlNUUklORywgb2Zmc2V0Ok5VTUJFUiwgZGVsYXk6TlVNQkVSfSAtPiB0aGlzXG4gICAgLy8gUXVldWUgbWVzc2FnZSB0aGF0IGRldGVybWluZXMgaWYgYmVhbSBzaG91bGQgYmUgZmlyaW5nIGFuZCB3aGF0IGNvbG9yIGlzIHNob3VsZCBiZSBmaXJpbmcgd2l0aDpcbiAgICBzZW5kKHtpc0ZpcmluZywgY29sb3IsIG9mZnNldCwgZGVsYXl9KSB7XG4gICAgICAgIHRoaXMucXVldWUucHVzaCh7aXNGaXJpbmcsIGNvbG9yLCBvZmZzZXQsIGRlbGF5fSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIENIQUlOQUJMRSA6OiBWT0lEIC0+IHRoaXNcbiAgICAvLyBTdGFydHMgbW92aW5nIHRoZSBiZWFtOlxuICAgIC8vIE5PVEU6IE9wdGlvbmFsIGNvb3JpZGF0ZXMgY2FuIGJlIHByb3ZpZGVkIHRvIGRldGVybWluZSB3aGVyZSBiZWFtIHNob3VsZCBzdGFydCBhdFxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XG4gICAgICAgLy8gdGhpcy5jaGVja1F1ZXVlKCk7XG4gICAgICAgIHRoaXMubW92ZUJlYW0oKTtcbiAgICB9XG5cbiAgICAvLyBDSEFJTkFCTEUgOjogVk9JRCAtPiB0aGlzXG4gICAgLy8gU3RvcHMgbW92aW5nIHRoZSBiZWFtOlxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIENIQUlOQUJMRSA6OiBWT0lEIC0+IHRoaXNcbiAgICAvLyBDbGVhcnMgY2FudmFzOlxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIENIQUlOQUJMRSA6OiBTVFJJTkcgLT4gdGhpc1xuICAgIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIG9mIGNhbnZhc1xuICAgIHBhaW50KGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyA6OiBWT0lEIC0+IFZPSURcbiAgICAvLyBSZWN1cnNpdmVseSBjaGVja3MgcXVldWUgdXNpbmcgYSB0cmFtcG9saW5lOlxuICAgLypjaGVja1F1ZXVlKCkge1xuXG4gICAgICAgIC8vIERlZmluZSByZWN1cnNpdmUgbG9naWMgaW4gYSB0cmFtcG9saW5lIHRvIHByZXZlbnQgcmVjdXJzaXZlIG92ZXJmbG93OlxuICAgICAgICBsZXQgdHJhbXBvbGluZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7aXNGaXJpbmcsIGNvbG9yfSA9IHRoaXMucXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihpc0ZpcmluZykgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmlyaW5nID0gaXNGaXJpbmc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihjb2xvcikgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFtcG9saW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbHMgdHJhbXBvbGluZSBhcyBhIGRlZmVycmVkIGZ1bmN0aW9uIHVudGlsIHJlY3Vyc2lvbiB0ZXJtaW5hdGVzOlxuICAgICAgICBsZXQgZGVmZXJyZWQgPSB0cmFtcG9saW5lKCk7XG4gICAgICAgIHdoaWxlICh0eXBlb2YoZGVmZXJyZWQpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGRlZmVycmVkID0gZGVmZXJyZWQoKTtcbiAgICAgICAgfVxuICAgIH0qL1xuXG4gICAgLy8gUmVzZXQgYmVhbSBiYWNrIHRvIHN0YXJ0aW5nIHBvaW50OlxuICAgIHJlc2V0QmVhbSgpIHtcbiAgICAgICAgdGhpcy5iZWFtWCA9IHRoaXMub3JpZ2luLng7XG4gICAgICAgIHRoaXMuYmVhbVkgPSB0aGlzLm9yaWdpbi55XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogIFN0YXRpYyBNZXRob2RzXG4gICAgICogXG4gICAgICovXG5cbiAgICAvLyBTdGF0aWMgRmFjdG9yeSBNZXRob2QgOjogT0JKRUNUIC0+IGltYWdlQmVhbUNhbm5vblxuICAgIHN0YXRpYyBpbml0KG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbWFnZUJlYW1DYW5ub24ob3B0aW9ucyA/PyB7fSk7XG4gICAgfVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgSW1hZ2VCZWFtQ2Fubm9uIGZyb20gXCIuL3NyYy9pbmRleC5qc1wiO1xuaW1wb3J0IExpbmVCZWFtIGZyb20gXCIuL3NyYy9MaW5lQmVhbS9pbmRleC5qc1wiXG5pbXBvcnQgQ2lyY2xlQmVhbSBmcm9tIFwiLi9zcmMvQ2lyY2xlQmVhbS9pbmRleC5qc1wiXG5pbXBvcnQgRXJhc2VCZWFtIGZyb20gXCIuL3NyYy9FcmFzZUJlYW0vaW5kZXguanNcIlxuaW1wb3J0IFdvcmRCZWFtIGZyb20gXCIuL3NyYy9Xb3JkQmVhbS9pbmRleC5qc1wiO1xuaW1wb3J0IEFuZ3VsYXJCZWFtIGZyb20gXCIuL3NyYy9Bbmd1bGFyQmVhbS9pbmRleC5qc1wiXG5cbmZ1bmN0aW9uIGluaXQob3B0aW9ucykge1xuICAgIHJldHVybiBJbWFnZUJlYW1DYW5ub24uaW5pdChvcHRpb25zKTtcbn1cblxuZXhwb3J0IHtcbiAgICBpbml0LCBcbiAgICBJbWFnZUJlYW1DYW5ub24gYXMgQ2xhc3MsXG4gICAgTGluZUJlYW0sXG4gICAgQ2lyY2xlQmVhbSxcbiAgICBFcmFzZUJlYW0sXG4gICAgV29yZEJlYW0sXG4gICAgQW5ndWxhckJlYW1cbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
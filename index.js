import ImageBeamCannon from "./src/index.js";
import LineBeam from "./src/LineBeam/index.js"
import CircleBeam from "./src/CircleBeam/index.js"
import EraseBeam from "./src/EraseBeam/index.js"
import WordBeam from "./src/WordBeam/index.js";
import AngularBeam from "./src/AngularBeam/index.js"

function init(options) {
    return ImageBeamCannon.init(options);
}

export {
    init, 
    ImageBeamCannon as Class,
    LineBeam,
    CircleBeam,
    EraseBeam,
    WordBeam,
    AngularBeam
}


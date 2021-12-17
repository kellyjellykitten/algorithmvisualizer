import mitt from "mitt";
export const emitter = mitt();


// var Emitter = require('tiny-emitter');
// var emitter = new Emitter();


// export default {
//   $on: (...args) => emitter.on(...args),
//   $once: (...args) => emitter.once(...args),
//   $off: (...args) => emitter.off(...args),
//   $emit: (...args) => emitter.emit(...args)
// }
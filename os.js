// JavaScript source code
// Operating System

const os = require('os');

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.cpus().length);
// console.log(os.constants);

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
console.log(os.freemem());
console.log(kb(os.freemem()));



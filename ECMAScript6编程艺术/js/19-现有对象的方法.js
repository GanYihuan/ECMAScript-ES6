var x;
({ x } = { x: 1 });
console.log(x); // 1
console.log(Math.sin(Math.PI / 6)); // 0.49999999999999994

let { sin, cos, tan, log } = Math;
console.log(sin(Math.PI / 6)); // 0.49999999999999994

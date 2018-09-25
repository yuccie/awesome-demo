var a = function() {

};
var b = Object.create(a.prototype);
console.log(b instanceof a);
console.log(a.prototype.isPrototypeOf(b));


// var c = {};
// var d = Object.create(c);
// console.log(d instanceof c);
// console.log(c.prototype.isPrototypeOf(d));
var obj = {x: 1};
var otherObj = Object.create(obj);
otherObj.x++;
console.log(obj.x);
console.log(otherObj.x);
function bind(fn, ...arg) {
  return function() {
    fn.call(arg[0]);
  };
}

function f() {
  console.log(this.name);
}

var b = bind(f, {name: 'wangyang'});

b();
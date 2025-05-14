const names = new WeakMap();
const obj = { tracker: 'one' };
names.set(obj, 0);
console.log(names.get(obj));

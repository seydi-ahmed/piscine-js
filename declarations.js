const escapeStr = '`\\/"\'';
const arr = [4, '2'];
const obj = {
  str: 'Hello, World!',
  num: 42,
  bool: true,
  undef: undefined
};
const nested = {
  arr: [4, undefined, '2'],
  obj: {
    str: 'Nested String',
    num: 99,
    bool: false
  }
};
Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.obj);
Object.freeze(nested.obj.str);
Object.freeze(nested.obj.num);
Object.freeze(nested.obj.bool);
Object.freeze(obj);
Object.freeze(arr);
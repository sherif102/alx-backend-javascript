export default class ALXClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](primitive) {
    let value;
    if (primitive === 'string') value = this._location;
    if (primitive === 'number') value = this._size;
    return value;
  }
}

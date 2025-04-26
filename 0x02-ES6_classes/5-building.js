export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (new.target !== Building) {
      if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (this.constructor === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}

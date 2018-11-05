export default class CarouselUtil {
  constructor(items, index = 0) {
    this.items = items;
    this.index = index;
  }

  /**
   * Distance is an intenger that represents the position desired in carousel
   * @param {integer} distance
  */
  move(distance) {
    let size = this.items.length;
    let newDistance = distance % size;
    let newIndex = (this.index + newDistance + size) % size;
    this.index = newIndex;
    return this.size[this.index];
  }
}

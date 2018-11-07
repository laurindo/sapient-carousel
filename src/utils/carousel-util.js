export default class CarouselUtil {
  constructor(items, index = 0) {
    this.items = items;
    this.index = index;
  }

  /**
   * Index is an intenger that represents the position desired in carousel
   * @param {integer} index
   * @param {array} images
   * @example output
   * 10, 15, etc
  */
  move(index, images) {
    return index * (100 / images.length);
  }

  /**
   * Receives a newPosition to move image
   * @param {integer} newPosition
   * @example output
   * translateX(-10%)
  */
  getTranslatePosition(newPosition) {
    return `translateX(-${newPosition}%)`;
  }
}

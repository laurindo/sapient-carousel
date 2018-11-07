export default class CarouselUtil {
  /**
   * Index is an intenger that represents the position desired in carousel
   * @param {integer} index
   * @param {array} images
   * @example output
   * 10, 15, etc
  */
  move(index, images = []) {
    if (images === 0 || images.length === 0) { return 0 };
    return Math.floor(index * (100 / images.length));
  }

  /**
   * Receives a newPosition to move image
   * @param {integer} newPosition
   * @example output
   * translateX(-10%)
  */
  getTranslatePosition(newPosition = 0) {
    return `translateX(-${newPosition}%)`;
  }

  /**
   * Receives a indexImage and list of images to check if the pagination has arrived to final
   * @param {integer} indexImage
   * @param {array} images
   * @example output
   * true or false
  */
  checkMoveLimit(indexImage, images) {
    return indexImage === images.length - 1;
  }

  /**
   * Receives a indexImage to check if the pagination has arrived at beginning or position zero
   * @param {integer} indexImage
   * @example output
   * true or false
  */
  checkMoveStart(indexImage) {
    return indexImage === 0;
  }

  /**
   * Return a index to show target over image in the middle
   * @param {array} images
   * @example output
   * 1,10,5, etc
  */
  moveTargetToMiddle(images) {
    return Math.floor(images.length/2);
  }
}

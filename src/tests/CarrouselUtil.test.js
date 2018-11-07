import CarrouselUtil from '../utils/carousel-util';

describe("Testing Carrousel Util", () => {
  const carrouselUtil = new CarrouselUtil();
  const images = [0,1,2,3,4,5,6,7,8,9,10];

  test("testing getTranslatePosition()", () => {
    expect(carrouselUtil.getTranslatePosition(10)).toBe(`translateX(-10%)`);
    expect(carrouselUtil.getTranslatePosition()).toBe(`translateX(-0%)`);
  });

  test("testing move()", () => {
    expect(carrouselUtil.move(1, images)).toBe(9);
    expect(carrouselUtil.move(1, 0)).toBe(0);
    expect(carrouselUtil.move(1)).toBe(0);
  });

  test("testing checkMoveLimit()", () => {
    expect(carrouselUtil.checkMoveLimit(1, images)).toBe(false);
    expect(carrouselUtil.checkMoveLimit(2, images)).toBe(false);
    expect(carrouselUtil.checkMoveLimit(10, images)).toBe(true);
  });

  test("testing checkMoveStart()", () => {
    expect(carrouselUtil.checkMoveStart(0)).toBe(true);
    expect(carrouselUtil.checkMoveStart(1)).toBe(false);
    expect(carrouselUtil.checkMoveStart(2)).toBe(false);
  });

  test("testing moveTargetToMiddle()", () => {
    expect(carrouselUtil.moveTargetToMiddle(images)).toBe(5);
    expect(carrouselUtil.moveTargetToMiddle([1,2])).toBe(1);
  });
});

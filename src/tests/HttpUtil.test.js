import HttpUtil from '../utils/http-util';

describe("Testing Carrousel Util", () => {
  const httpUtil = new HttpUtil();

  test("check if getImages() return a object promise", () => {
    expect(typeof httpUtil.getImages('whatever')).toBe('object');
  });
});

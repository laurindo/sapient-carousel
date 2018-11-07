import HttpUtil from '../utils/http-util';

describe("Testing Carrousel Util", () => {
  const httpUtil = new HttpUtil();

  test("check if getImages() return a object promise", () => {
    expect(typeof httpUtil.getImages('whatever')).toBe('object');
  });

  test("check if defineAPI() return a string", () => {
    expect(httpUtil.defineAPI('https://api.com')).toBe('https://api.com/?key=9656065-a4094594c34f9ac14c7fc4c39');
    expect(httpUtil.defineAPI('https://api.com', 'prod')).toBe('https://api.com/?key=prod-xxxxx-yyyyyyyyyyyyyyyyy');
    expect(httpUtil.defineAPI('https://api.com', 'qa')).toBe('https://api.com/?key=qa-xxxxx-yyyyyyyyyyyyyyyyy');
  });
});

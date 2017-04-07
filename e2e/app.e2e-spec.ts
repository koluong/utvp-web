import { UtvpWebPage } from './app.po';

describe('utvp-web App', () => {
  let page: UtvpWebPage;

  beforeEach(() => {
    page = new UtvpWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

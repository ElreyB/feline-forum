import { FelineForumPage } from './app.po';

describe('feline-forum App', () => {
  let page: FelineForumPage;

  beforeEach(() => {
    page = new FelineForumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

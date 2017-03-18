import { TopRankzPage } from './app.po';

describe('top-rankz App', function() {
  let page: TopRankzPage;

  beforeEach(() => {
    page = new TopRankzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

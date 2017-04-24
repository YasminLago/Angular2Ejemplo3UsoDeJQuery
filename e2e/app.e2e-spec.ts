import { Angular2ConJQueryPage } from './app.po';

describe('angular2-con-jquery App', function() {
  let page: Angular2ConJQueryPage;

  beforeEach(() => {
    page = new Angular2ConJQueryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

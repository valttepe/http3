import { Http3Page } from './app.po';

describe('http3 App', function() {
  let page: Http3Page;

  beforeEach(() => {
    page = new Http3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

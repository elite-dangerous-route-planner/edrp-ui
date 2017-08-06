import { EdrpUiPage } from './app.po';

describe('edrp-ui App', () => {
  let page: EdrpUiPage;

  beforeEach(() => {
    page = new EdrpUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

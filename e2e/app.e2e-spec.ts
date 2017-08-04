import { GoogleMapsAPPPage } from './app.po';

describe('google-maps-app App', () => {
  let page: GoogleMapsAPPPage;

  beforeEach(() => {
    page = new GoogleMapsAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

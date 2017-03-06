import { NgPropListingsPage } from './app.po';

describe('ng-prop-listings App', () => {
  let page: NgPropListingsPage;

  beforeEach(() => {
    page = new NgPropListingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

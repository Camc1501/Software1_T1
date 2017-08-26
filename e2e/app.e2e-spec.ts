import { SoftwareT1Page } from './app.po';

describe('software-t1 App', () => {
  let page: SoftwareT1Page;

  beforeEach(() => {
    page = new SoftwareT1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

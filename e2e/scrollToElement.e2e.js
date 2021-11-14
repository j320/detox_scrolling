describe('Scroll to element test', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  it('Attempt to scroll to element', async () => {
    await waitFor(element(by.id('listBackground-3')))
      .toBeVisible()
      .whileElement(by.id('background'))
      .scroll(50, 'right');
  });

  it('Attempt to scroll to the last image', async () => {
    await waitFor(element(by.id('image-3')))
      .toBeVisible()
      .whileElement(by.id('listBackground'))
      .scroll(50, 'right');
  });
});

describe('Flat List test', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  it('Attempt to reach the edge of the FlatList', async () => {
    await element(by.id('listBackground')).scrollTo('right');
  });
});

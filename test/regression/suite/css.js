module.exports = {
  default: (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=default')
      .waitForElementPresent('.z-info', 1000)
      .getCssProperty('.z-info', 'border-color', (result) => {
        const expected = 'rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(60, 145, 230)';
        browser.assert.equal(result.value, expected);
      })
      .assert.containsText('.z-info__title', 'Title')
      .end();
  },
  info: (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=info')
      .waitForElementPresent('.z-info', 1000)
      .assert.containsText('.z-info__message', 'More info')
      .end();
  },
  colors: (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=colors')
      .waitForElementPresent('.z-info', 1000)
      .getCssProperty('.z-info--success', 'border-color', (result) => {
        browser.assert.equal(result.value, 'rgb(118, 178, 69)');
      })
      .getCssProperty('.z-info--warning', 'border-color', (result) => {
        browser.assert.equal(result.value, 'rgb(254, 215, 102)');
      })
      .getCssProperty('.z-info--danger', 'border-color', (result) => {
        browser.assert.equal(result.value, 'rgb(240, 58, 71)');
      })
      .getCssProperty('.z-info--error', 'border-color', (result) => {
        browser.assert.equal(result.value, 'rgb(255, 0, 0)');
      })
      .end();
  },
};

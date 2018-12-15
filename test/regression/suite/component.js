import test from 'ava';
import Nightmare from 'nightmare';

test('SFC component - title text', (t) => {
  t.plan(1);
  const msg = 'should render the title text';
  const expected = 'Title';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=default')
    .wait('.z-info')
    .evaluate(() => document.querySelector('.z-info__title').textContent)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - border', (t) => {
  t.plan(1);
  const msg = 'should render the border properly';
  const expected = 'rgb(0, 0, 0) rgb(0, 0, 0) rgb(0, 0, 0) rgb(35, 134, 171)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=default')
    .wait('.z-info')
    .evaluate(() => {
      const infoStyle = getComputedStyle(document.querySelector('.z-info'));
      return infoStyle.borderColor;
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - info', (t) => {
  t.plan(1);
  const msg = 'should render the optional description message';
  const expected = 'More info';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=info')
    .wait('.z-info')
    .evaluate(() => document.querySelector('.z-info__message').textContent)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - secondary', (t) => {
  t.plan(1);
  const msg = 'should render the secondary modifier';
  const expected = 'rgb(38, 84, 124)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=colors')
    .wait('.z-info')
    .evaluate(() => {
      const infoStyle = getComputedStyle(document.querySelector('.z-info--secondary'));
      return infoStyle.borderColor;
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - success', (t) => {
  t.plan(1);
  const msg = 'should render the success modifier';
  const expected = 'rgb(118, 178, 69)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=colors')
    .wait('.z-info')
    .evaluate(() => {
      const infoStyle = getComputedStyle(document.querySelector('.z-info--success'));
      return infoStyle.borderColor;
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - warning', (t) => {
  t.plan(1);
  const msg = 'should render the warning modifier';
  const expected = 'rgb(224, 185, 56)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=colors')
    .wait('.z-info')
    .evaluate(() => {
      const infoStyle = getComputedStyle(document.querySelector('.z-info--warning'));
      return infoStyle.borderColor;
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - danger', (t) => {
  t.plan(1);
  const msg = 'should render the danger modifier';
  const expected = 'rgb(216, 52, 63)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=colors')
    .wait('.z-info')
    .evaluate(() => {
      const infoStyle = getComputedStyle(document.querySelector('.z-info--danger'));
      return infoStyle.borderColor;
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - error', (t) => {
  t.plan(1);
  const msg = 'should render the error modifier';
  const expected = 'rgb(255, 0, 0)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=colors')
    .wait('.z-info')
    .evaluate(() => {
      const infoStyle = getComputedStyle(document.querySelector('.z-info--error'));
      return infoStyle.borderColor;
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

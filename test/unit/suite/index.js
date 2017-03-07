import test from 'ava';
import React from 'react';
import { renderJSX, JSX } from 'jsx-test-helpers';
import info from '../../../src/component';

const ZInfo = info(React.createElement);

test('Info component', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<ZInfo title="Title" />);
  const expected = JSX(
    <div className="z-info">
      <h1 className="z-info__title">Title</h1>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Additional message', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<ZInfo title="Title" message="More info" />);
  const expected = JSX(
    <div className="z-info">
      <h1 className="z-info__title">Title</h1>
      <p className="z-info__message">More info</p>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Secondary modifier', (t) => {
  const msg = 'should be supported';
  const actual = renderJSX(<ZInfo title="Title" secondary />);
  const expected = JSX(
    <div className="z-info z-info--secondary">
      <h1 className="z-info__title">Title</h1>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Success modifier', (t) => {
  const msg = 'should be supported';
  const actual = renderJSX(<ZInfo title="Title" success />);
  const expected = JSX(
    <div className="z-info z-info--success">
      <h1 className="z-info__title">Title</h1>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Warning modifier', (t) => {
  const msg = 'should be supported';
  const actual = renderJSX(<ZInfo title="Title" warning />);
  const expected = JSX(
    <div className="z-info z-info--warning">
      <h1 className="z-info__title">Title</h1>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Danger modifier', (t) => {
  const msg = 'should be supported';
  const actual = renderJSX(<ZInfo title="Title" danger />);
  const expected = JSX(
    <div className="z-info z-info--danger">
      <h1 className="z-info__title">Title</h1>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Error modifier', (t) => {
  const msg = 'should be supported';
  const actual = renderJSX(<ZInfo title="Title" error />);
  const expected = JSX(
    <div className="z-info z-info--error">
      <h1 className="z-info__title">Title</h1>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Custom color', (t) => {
  const msg = 'should be supported';
  const actual = renderJSX(<ZInfo title="Title" color="#333" />);
  const expected = JSX(
    <div className="z-info" style={{ borderColor: '#333' }}>
      <h1 className="z-info__title">Title</h1>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

import test from 'ava';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import info from '../../../src/component';

configure({ adapter: new Adapter() });

const ZInfo = info(React.createElement);

test('Info component', (t) => {
  const msg = 'should render';
  const actual = shallow(<ZInfo title="Title" />).html();
  const expected = shallow((
    <div className="z-info">
      <h1 className="z-info__title">Title</h1>
    </div>
  )).html();
  return t.deepEqual(actual, expected, msg);
});

test('Additional message', (t) => {
  const msg = 'should render';
  const actual = shallow(<ZInfo title="Title" message="More info" />).html();
  const expected = shallow((
    <div className="z-info">
      <h1 className="z-info__title">Title</h1>
      <p className="z-info__message">More info</p>
    </div>
  )).html();
  return t.deepEqual(actual, expected, msg);
});

test('Secondary modifier', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZInfo title="Title" secondary />).html();
  const expected = shallow((
    <div className="z-info z-info--secondary">
      <h1 className="z-info__title">Title</h1>
    </div>
  )).html();
  return t.deepEqual(actual, expected, msg);
});

test('Success modifier', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZInfo title="Title" success />).html();
  const expected = shallow((
    <div className="z-info z-info--success">
      <h1 className="z-info__title">Title</h1>
    </div>
  )).html();
  return t.deepEqual(actual, expected, msg);
});

test('Warning modifier', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZInfo title="Title" warning />).html();
  const expected = shallow((
    <div className="z-info z-info--warning">
      <h1 className="z-info__title">Title</h1>
    </div>
  )).html();
  return t.deepEqual(actual, expected, msg);
});

test('Danger modifier', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZInfo title="Title" danger />).html();
  const expected = shallow((
    <div className="z-info z-info--danger">
      <h1 className="z-info__title">Title</h1>
    </div>
  )).html();
  return t.deepEqual(actual, expected, msg);
});

test('Error modifier', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZInfo title="Title" error />).html();
  const expected = shallow((
    <div className="z-info z-info--error">
      <h1 className="z-info__title">Title</h1>
    </div>
  )).html();
  return t.deepEqual(actual, expected, msg);
});

test('Custom color', (t) => {
  const msg = 'should be supported';
  const actual = shallow(<ZInfo title="Title" color="#333" />).html();
  const expected = shallow((
    <div className="z-info" style={{ borderColor: '#333' }}>
      <h1 className="z-info__title">Title</h1>
    </div>
  )).html();
  return t.deepEqual(actual, expected, msg);
});

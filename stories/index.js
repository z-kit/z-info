import React from 'react';
import { storiesOf } from '@kadira/storybook';
import info from '../src/component';

const ZInfo = info(React.createElement);

storiesOf('CSS component', module)
  .add('default', () => (
    <div className="z-info">
      <h1 className="z-info__title">Title</h1>
    </div>
  ))
  .add('info', () => (
    <div className="z-info z-info--warning">
      <h1 className="z-info__title">Attention</h1>
      <p className="z-info__message">More info</p>
    </div>
  ))
  .add('colors', () => (
    <div>
      <div className="z-info">
        <h1 className="z-info__title">Primary</h1>
      </div>
      <div className="z-info z-info--secondary">
        <h1 className="z-info__title">Secondary</h1>
      </div>
      <div className="z-info z-info--success">
        <h1 className="z-info__title">Success</h1>
      </div>
      <div className="z-info z-info--warning">
        <h1 className="z-info__title">Warning</h1>
      </div>
      <div className="z-info z-info--danger">
        <h1 className="z-info__title">Danger</h1>
      </div>
      <div className="z-info z-info--error">
        <h1 className="z-info__title">Error</h1>
      </div>
    </div>
  ));

storiesOf('Stateless functional component', module)
  .add('default', () => <ZInfo title="Title" />)
  .add('info', () => <ZInfo title="Attention" message="More info" warning />)
  .add('colors', () => (
    <div>
      <ZInfo title="Primary" />
      <ZInfo title="Secondary" secondary />
      <ZInfo title="Success" success />
      <ZInfo title="Warning" warning />
      <ZInfo title="Danger" danger />
      <ZInfo title="Error" error />
      <ZInfo title="Custom" color="#aaa" />
    </div>
  ));

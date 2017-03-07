/**
 * Copyright (c) 2017 z-kit contributors.
 * @license MIT LICENSE
 * https://github.com/z-kit/z-info
 */

import styles from './style.css';

// Global to local style mappings, works even if using CSS modules
const classnames = {
  wrapper: styles['z-info'] || 'z-info',
  hasSecondary: styles['z-info--secondary'] || 'z-info--secondary',
  hasSuccess: styles['z-info--success'] || 'z-info--success',
  hasWarning: styles['z-info--warning'] || 'z-info--warning',
  hasDanger: styles['z-info--danger'] || 'z-info--danger',
  hasError: styles['z-info--error'] || 'z-info--error',
  title: styles['z-info__title'] || 'z-info__title',
  message: styles['z-info__message'] || 'z-info__message',
};

export function ZInfo(e) {
  return ({ title, message, secondary, success, warning, danger, error, color }) => {
    const eTitle = title ? e('h1', { className: classnames.title }, title) : null;
    const eMessage = message ? e('p', { className: classnames.message }, message) : null;
    const classes = [classnames.wrapper];
    if (secondary) classes.push(classnames.hasSecondary);
    if (success) classes.push(classnames.hasSuccess);
    if (warning) classes.push(classnames.hasWarning);
    if (danger) classes.push(classnames.hasDanger);
    if (error) classes.push(classnames.hasError);
    const className = classes.join(' ');
    const infoProps = { className };
    if (color) {
      infoProps.style = {};
      infoProps.style.borderColor = color;
    }
    return e('div', infoProps, [eTitle, eMessage]);
  };
}

export default ZInfo;

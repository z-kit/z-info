# <a name="z-info"></a> z-info

[![Greenkeeper badge](https://badges.greenkeeper.io/z-kit/z-info.svg)](https://greenkeeper.io/)

[![Build]](https://travis-ci.org/z-kit/z-info) [![SemVer]](http://semver.org/) [![License]](LICENSE)

A quick message box component for your web application.

## <a name="toc"></a> Table of contents

- [z-info](#z-info)
- [Table of contents](#toc)
- [Install](#install)
  - [Import as HTML/CSS component](#import-css)
  - [Import as Stateless Functional Component (SFC)](#import-sfc)
- [How to use](#howto)
  - [CSS component](#css)
  - [Stateless Functional Component](#sfc)
- [License](#license)

## <a name="install"></a> Install

The package is available to download through [npm](https://npmjs.com):

```bash
npm install z-info --save
```

### <a name="import-css"></a> Import as HTML/CSS component

### The simple case

The package will be located inside the `node_modules` folder, you can import it into the HTML document as follows:

```html
<link rel="stylesheet" href="node_modules/z-info/dist/style.css">
```

### When bundling an web app

**For bundlers that support CSS, like [Webpack](https://webpack.github.io/), you can use it like this:**

```javascript
require('z-info/dist/style.css');
```

### <a name="import-sfc"></a> Import as a Stateless Functional Component (SFC)

The package does not include the renderer, you can use any renderer that supports SFCs. You could use React, Preact, Inferno, etc.

**Notice: This package contains CSS styling, you may need a bundler that's capable of requiring CSS files like Webpack with [css-loader](https://github.com/webpack/css-loader).**

Once you have chosen the renderer you can include the package in your project as follows:

```jsx
// Assuming the React renderer is being used
const React = require('react');
const render = require('react-dom').render;

// Passing the render function when importing
const ZInfo = require('z-info')(React.createElement);

// Render it on page, using JSX here :)
render(<ZInfo title="Title" />, document.body);
```

## <a name="howto"></a> How to use

### <a name="css"></a> CSS component

Just add the HTML structure and CSS classes to reproduce the UI component.

### Class hierarchy

| Recommended HTML tags              | Parent    | Class              | Description                              | Type     |
| ---------------------------------- | --------- | ------------------ | ---------------------------------------- | -------- |
| `div`, `section`                   | `root`    | `.z-info`          | Root container                           | Block    |
| Any containing `.z-info`           | `root`    | `.z-info--success` | Change the border color to green         | Modifier |
| Any containing `.z-info`           | `root`    | `.z-info--warning` | Change the border color to yellow        | Modifier |
| Any containing `.z-info`           | `root`    | `.z-info--error`   | Change the border color to red           | Modifier |
| Any containing `.z-info`           | `root`    | `.z-info--danger`  | Change the border color to a lighter red | Modifier |
| `h1`, `h2`, `h3`, `h4`, `h5`, `h6` | `.z-info` | `.z-info__title`   | The title of the info box                | Element  |
| `p`, `span`                        | `.z-info` | `.z-info__message` | Optional additional information          | Element  |

#### Full working example:

```html
<div class="z-info">
  <h1 class="z-info__title">Hello!</h1>
  <p class="z-info__message">More info</p>
</div>
```

### <a name="sfc"></a> Stateless Functional Component

Render the HTML by using the SFC and passing props.

### Supported Props

| Prop name | Expected Type | Description                                             |
| --------- | ------------- | ------------------------------------------------------- |
| `title`   | `string`      | The title of the message box                            |
| `message` | `string`      | Optional additional info for the message box            |
| `success` | `boolean`     | Set to true to change the border color to green         |
| `warning` | `boolean`     | Set to true to change the border color to yellow        |
| `error`   | `boolean`     | Set to true to change the border color to red           |
| `danger`  | `boolean`     | Set to true to change the border color to a lighter red |

#### Full example (JSX):

```jsx
<ZInfo title="Title" message="More info" />
```

## <a name="license"></a> LICENSE

[MIT](LICENSE)

[Build]: https://img.shields.io/travis/z-kit/z-info.svg
[SemVer]: https://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: https://img.shields.io/npm/l/z-info.svg
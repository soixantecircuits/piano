<h1 align="center">
  <img src="https://rawgit.com/soixantecircuits/piano/master/piano-icon.png" alt="piano">
  <br>
  ⌨ Piano.js
  <br><br>
</h1>


> Customizable virtual keyboard written in plain JavaScript. See the [demo](http://soixantecircuits.github.io/piano).


[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Join the chat at https://gitter.im/soixantecircuits/piano](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/soixantecircuits/piano?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

*Piano is still under active development (but has successfully been used in production work).*

## Table of contents

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Table of contents](#table-of-contents)
- [Installation](#installation)
	- [Installation with module bundler](#installation-with-module-bundler)
	- [Installation without module](#installation-without-webpack)
- [Usage](#usage)
	- [Positionning / styling](#positionning-styling)
	- [Submit](#submit)
	- [Animations](#animations)
	- [Touch events](#touch-events)
- [Options](#options)
- [Demo](#demo)
- [Layouts](#layouts)
- [Development](#development)
- [To Do](#to-do)

<!-- /TOC -->


## Installation

#### Get the packages

```bash
npm i -S piano.js
# or
yarn add piano.js
```

Or download [piano](piano.js) and at least the [default layout](layouts/default.js) .

#### Load the library

```js
// Add the CSS
require('piano.js/piano.css')

// Require piano wherever you want to use it
const Piano = require('piano.js')

// Choose the layouts you want
const azerty = require('piano.js/layouts/azerty')
const qwerty = require('piano.js/layouts/qwerty')
```

or

```html
<!-- Load the library -->
<script src="path/to/piano.js"></script>
<!-- And at least the default layout -->
<script src="path/to/layouts/default.js"></script>
```

#### Use it

```js
// Instantiate Piano
const keyboard = new Piano({
  layouts: {
    'azerty': azerty,
    'qwerty': qwerty
  },
  slideContent: true
})
// See the 'Options' section for more details about this
```

```html
<input type="text"
  data-piano data-piano-scale="1.5"
  data-piano-layout="azerty"
/>
```

Optionally, you can listen to piano events in your code

```html
<input type="text"
  data-piano-event-id="do-stuff"
/>
```

```js
document
  .querySelector('[data-piano-event-id="do-stuff"]')
  .addEventListener('do-stuff', doStuffCallback)
```

## Method 

### addTarget()

`addTarget` method allow to dynamically add an input trigger for your on screen screen keyboard.

```
addTarget(element, options)
```

You need to provide a domElement and basic options object : 

```
{
  layout: 'azerty',
  animationIn: 'bounceInUp',
  animationOut: 'fadeOutUp',
  scale: 1.0
}
```

So if you already have your keyboard instance and an element in the DOM namde `#dynamic-piano` you can:

```
let options = {
    layout: 'azerty',
    animationIn: 'bounceInUp',
    animationOut: 'fadeOutUp',
    scale: 1.0
  }
keyboard.addTarget(document.querySelector('#dynamic-piano'), options)
```


## Usage

### Positionning / styling

You can define positionning with the `data-piano-position` attribute. You can use the following:
- `'left', 'center', 'right' -> x axis`
- `'top', 'middle', 'bottom' -> y axis`

For example:
```html
<input type="text" data-piano data-piano-position="left, center" />
```

Or, with the `absolute` keyword, you can define absolute x and y positions:
```html
<input type="text" data-piano data-piano-position="absolute, 100, 150" />
```

Default positions are `'center, bottom'`.


### Submit

You can define a `data-piano-event-id` attribute on your element and then listen to it.
For example, if you have a `data-piano-event-id="input-event"`:

```js
element.addEventListener('input-event', function (event) {
  console.log('element with id "%s" submitted.', event.target.id)
})
```


### Animations

Piano provide has built-in but yet optionnal support for [Animate.css](https://daneden.github.io/animate.css/).

By default, it will add `fadeInUp` and `fadeOutDown` classes to your container. Just load the animate.css stylesheet and you'll have nice animations. You can also use the `data-piano-animation-in` and `data-piano-animation-out` attributes to define custom classes to toggle on hide/show.

You can also choose to create your own animations, and thus just use the classes toggled by piano to trigger them.


### Touch events

By default, Piano uses `click` events, even for touch devices. This is because any decent browser will emulate touch events into `click`, and touch events [make an approximation](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height) of the pointer's contact position. Of course, you can override this in the [options](#options).

## Options

You can pass options to your `new Piano()` call. Here they are:
- triggerEvents: **Array** of event triggers you want Piano to react (see [Touch events](#touch-events))
- slideContent: **bool** [true, false], _default to false_. Allow to define if the content should _slide_
- slideContainer: **string** ['.demo-container'], _no default_. Allow to define the part of the DOM you want to _slide_
- onHidden: **function**, _default to empty function_. Allow to call a function when the keyboard is hidden
- onBeforeHidden: **function**, _default to empty function_. Allow to call a function before the keyboard is hidden

## Layouts
*Soon.*

## Development
We use gulp to develop, to contribute to piano, just use `gulp develop`. It will watch src/piano and serve it over localhost on port 8080.

Create a `feature-[name-of-the-feature]` branch and make PR on the `dev` branch. Please use the [standard js coding style](https://github.com/feross/standard).

## To Do
- Support accentuation. (partial support for now).

# Piano ⌨

#### Customizable virtual keyboard written in pure JavaScript.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Join the chat at https://gitter.im/soixantecircuits/piano](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/soixantecircuits/piano?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

*Piano is still under active development.*

# Usage

Download [piano](piano.js) and at least the [default layout](layouts/default.js) into your project and load them.

```html
  <!-- Load the librarie -->
  <script src="path/to/piano.js"></script>
  <!-- And at least the default layout -->
  <script src="path/to/layouts/default.js"></script>
```

Then, add the `data-piano` attribute to trigger the keyboard on click/touch and call `piano.init();` in your js.

#### Demo

Make sure you have `node`, `npm` and `gulp` installed. After you have installed development dependencies with `npm i`, you can run `gulp serve` and go to `http://localhost:8080/demo` to check a demo.

Or you can check it out [here](http://soixantecircuits.github.io/piano).

## Positionning / styling

You can define positionning with the `data-piano-position` attribute. You can use the following:

`'left', 'center', 'right' -> x axis`

`'top', 'middle', 'bottom' -> y axis`

For example:

```html
<input type="text" data-piano data-piano-position="left, center" />
```

Or, with the `absolute` keyword, you can define absolute x and y positions:

```html
<input type="text" data-piano data-piano-position="absolute, 100, 150" />
```

Default positions are `'center, bottom'`.

## Submit

You can define a `data-piano-event-id` attribute on your element and then listen to it.
For example, if you have a `data-piano-event-id="input-event"`:

```
element.addEventListener('input-event', function (event){
  console.log('element with id "%s" submitted.', event.target.id);
});
```

## Animations

Piano provide has built-in but yet optionnal support for [Animate.css](https://daneden.github.io/animate.css/).

By default, it will add `fadeInUp` and `fadeOutDown` classes to your container. Just load the animate.css stylesheet and you'll have nice animations. You can also use the `data-piano-animation-in` and `data-piano-animation-out` attributes to define custom classes to toggle on hide/show.

You can also choose to create your own animations, and thus just use the classes toggled by piano to trigger them.

## Tactile events

Piano's support for tactile events is still in development (I know, for a virtual keyboard destined to touchscreens, it's kinda lame ...). However, it should work (though not ideally and efficiently) with the browser emulation of the `click` event on touchscreens. You can also define your own event to listen to in the initialization : `piano.init('touchstart');` for example (default is `'click'`).

This will be optimized very soon. If you have any ideas, suggestions, or even want to get your hands dirty hand submit a PR, you are more than welcome !

# Options
You can pass options to your `piano.init()` call. Here they are:
- trigger: **Array** of event triggers you want Piano to react

## Layouts

*Soon.*

# Development

Create a `feature-[name-of-the-feature]` branch and make PR on the `dev` branch. Please use the [standard js coding style](https://github.com/feross/standard).

# To Do

- Support accentuation. (partial support for now).
- Support hammer.js and/or other touch events librarie.
- Make sure it works well with ~~requireJS~~, AngularJS, MeteorJS, React.
- Publish it to bower and be famous.
- Test with IE11, Chrome, Firefox.
- Test embeded in ~~electron~~ and nwjs.

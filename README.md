# Touchkey ⌨

#### Modular keyboard written in pure JavaScript.

[![Gitter](https://badges.gitter.im/soixantecircuits/touchkey.svg)](https://github.com/soixantecircuits/touchkey)

*Touchkey is still under active development.*

# Usage

Download [touchkey](touchkey.js) and at least the [default layout](layouts/default.js) into your project and load them.

```html
  <!-- Load the librarie -->
  <script src="path/to/touchkey.js"></script>
  <!-- And at least the default layout -->
  <script src="path/to/layouts/default.js"></script>
```

Then, add the `data-touchkey` attribute to trigger the keyboard on click/touch.

#### Demo

You can open the `demo/index.html` file in a web browser to check a demo.

# Positionning / styling

You can define positionning with the `data-touchkey-position` attribute. You can use the following:

`'left', 'center', 'right' -> x axis`

`'top', 'middle', 'bottom' -> y axis`

For example:

```html
<input type="text" data-touchkey data-touchkey-position="left, center" />
```

Or, with the `absolute` keyword, you can define absolute x and y positions:

```html
<input type="text" data-touchkey data-touchkey-position="absolute, 100, 150" />
```

Default positions are `'center, bottom'`.

# Layouts

*Soon.*

# Development

Just clone the repository and you'll be good to go.

# To Do

- Support accentuation.
- Support modifier (maj, alt, ctrl/cmd).
- Add nice style and animation.
- Make sure keys are still visible when someone has its finger on it (cf. Android/iOS keyboards).
- Support hammer.js and/or other touch events librarie.
- Make sure it works well with requireJS.
- Make sure it works well with angular, emberjs, react
- Publish it to bower and be famous.
- Test with IE11, Chrome, Firefox,
- Test embeded in electron
- Support multiple instance for large touch screen

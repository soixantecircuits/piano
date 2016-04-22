/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = (function app () {
	  'use strict'

	  var piano = __webpack_require__(3)  
	  var azertyMail = [
	    [{name: 'email', value: '@gmail.com'}], [{name: 'email', value: '@yahoo.fr'}], [{name: 'email', value: '@hotmail.fr'}], ['break'],
	    ['&', '1'], ['é', '2'], ['"', '3'], ["'", '4'], ['(', '5'], [')', '6'], ['è', '7'], ['!', '8'], ['ç', '9'], ['à', '0'], ['-', '_'], [{ name: 'del', value: '&larr;' }], ['break'],
	    ['a'], ['z'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], ['^'], ['$', '*'], ['@', '#'], ['break'],
	    ['q'], ['s'], ['d'], ['f'], ['g'], ['h'], ['j'], ['k'], ['l'], ['m'], ['ù', '%'], ['break'],
	    [{ name: 'shift', value: '&123' }], ['w'], ['x'], ['c'], ['v'], ['b'], ['n'], [',', '?'], ['.', ';'], ['/', ':'], ['=', '+'], [{ name: 'shift', value: '↑' }], ['break'],
	    [{ name: 'larr', value: '&lsaquo;' }], [{ name: 'space', value: ' ' }], [{ name: 'rarr', value: '&rsaquo;' }], [{ name: 'hide', value: '&times;' }], [{ name: 'submit', value: '&ldsh;' }]
	  ]
	  var azerty = [
	    ['&', '1'], ['é', '2'], ['"', '3'], ["'", '4'], ['(', '5'], [')', '6'], ['è', '7'], ['!', '8'], ['ç', '9'], ['à', '0'], ['-', '_'], [{ name: 'del', value: '&larr;' }], ['break'],
	    ['a'], ['z'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], ['^'], ['$', '*'], ['@', '#'], ['break'],
	    ['q'], ['s'], ['d'], ['f'], ['g'], ['h'], ['j'], ['k'], ['l'], ['m'], ['ù', '%'], ['break'],
	    [{ name: 'shift', value: '&123' }], ['w'], ['x'], ['c'], ['v'], ['b'], ['n'], [',', '?'], ['.', ';'], ['/', ':'], ['=', '+'], [{ name: 'shift', value: '↑' }], ['break'],
	    [{ name: 'larr', value: '&lsaquo;' }], [{ name: 'space', value: ' ' }], [{ name: 'rarr', value: '&rsaquo;' }], [{ name: 'hide', value: '&times;' }], [{ name: 'submit', value: '&ldsh;' }]
	  ]

	  console.log(azerty)

	  var keyboard = new piano({
	    triggerEvent: ['click', 'touchstart'],
	    slideContent: true,
	    slideContainer: '.demo-container',
	    layouts: {
	      'azerty': azerty,
	      'azerty-mail': azertyMail
	    },
	    onHidden: function () {
	      console.log('hidden')
	    },
	    onBeforeHidden: function () {
	      console.log('hidding...')
	    }
	  })

	  document.querySelector('textarea').click()

	  document.querySelector('#input-2').addEventListener('input', function (event) {
	    console.log('input changed')
	  })

	  document.querySelector('#input-2').addEventListener('input-2', function (event) {
	    console.log('element with id "%s" submitted.', event.target.id)
	  })

	})()


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["piano"] = factory();
		else
			root["piano"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports) {

		'use strict';
		
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		var Piano = function () {
		  function Piano(options) {
		    _classCallCheck(this, Piano);
		
		    if (document.querySelectorAll('#piano').length) {
		      console.warn('piano is already initialized');
		      return false;
		    }
		    this.defaults = {
		      triggerEvents: ['click'],
		      slideContent: false,
		      slideContainer: 'body',
		      onBeforeHidden: function onBeforeHidden() {},
		      onHidden: function onHidden() {},
		      layouts: options.layouts || []
		    };
		
		    this.settings = _extends(this.defaults, options);
		    this.container = _extends(document.createElement('div'), { id: 'piano', className: 'piano-container animated' });
		    this.detectInputs();
		    document.body.appendChild(this.container);
		    // Make sure to hide keyboard when clicking outside
		    addMultipleListeners(['click', 'touchdown'], document, function (event) {
		      if (event.target.dataset.piano !== '' && !this.container.contains(event.target)) {
		        this.hideKeyboard();
		      }
		    }.bind(this));
		  }
		
		  _createClass(Piano, [{
		    key: 'detectInputs',
		    value: function detectInputs() {
		      var _this = this;
		
		      var createKeyboard = function createKeyboard(parent, target) {
		        var _k = _extends({}, parent);
		        delete _k.triggers;
		        delete _k.layouts;
		        var datas = target.dataset;
		        var options = {};
		
		        _k.shift = false;
		
		        if (datas.pianoPosition) {
		          if (datas.pianoPosition.indexOf('absolute') > -1) {
		            options.position = datas.pianoPosition.replace(/absolute,\s/gi, '').split(',');
		          } else {
		            options.position = datas.pianoPosition ? datas.pianoPosition.split(',') : [];
		          }
		        } else {
		          console.warn('It seems you have incorrect values in your data-piano-position attribute on element: ', target);
		          options.position = [];
		        }
		        // Object.assign(options, datas)
		
		        options.layout = datas.pianoLayout;
		        options.limit = datas.pianoLimit;
		        options.animationIn = datas.pianoAnimationIn;
		        options.animationOut = datas.pianoAnimationOut;
		        options.scale = datas.pianoScale;
		
		        var eventID = datas.pianoEventId;
		        var elementEvent = null;
		        if (eventID) {
		          elementEvent = document.createEvent('Event');
		          elementEvent.initEvent(eventID, true, true);
		        }
		
		        // could be improve with a default object
		        _k.settings = {
		          position: {
		            x: options.position[0] || 'center',
		            y: options.position[1] || 'bottom'
		          },
		          layout: options.layout || 'default',
		          limit: options.limit || -1,
		          submitEvent: elementEvent,
		          animationIn: options.animationIn || 'fadeInUp',
		          animationOut: options.animationOut || 'fadeOutDown',
		          scale: options.scale || 1
		        };
		
		        addMultipleListeners(['click', 'touchdown'], target, function (event) {
		          this.clearKeyboards();
		          this.currentTarget = event.target;
		          this.displayKeyboard(_k);
		        }.bind(_this));
		      };
		
		      this.triggers = document.querySelectorAll('[data-piano]');
		      var triggerSize = this.triggers.length;
		      for (var triggerIdx = 0; triggerIdx < triggerSize; triggerIdx++) {
		        createKeyboard(this, this.triggers[triggerIdx]);
		      }
		    }
		  }, {
		    key: 'displayKeyboard',
		    value: function displayKeyboard(instance) {
		      var _k = this;
		      _k.currentKeyboard = instance;
		
		      var rowsContainer = document.createElement('div');
		      rowsContainer.className = 'piano-rows';
		
		      var layout = this.settings.layouts[instance.settings.layout];
		
		      var rows = [];
		      rows.push(document.createElement('ul'));
		
		      for (var i in layout) {
		        var li = document.createElement('li');
		        if (layout[i] == 'break') {
		          rowsContainer.appendChild(rows[rows.length - 1]);
		          rows.push(document.createElement('ul'));
		        } else {
		          var key = document.createElement('button');
		          if (_typeof(layout[i][0]) === 'object') {
		            li.className = layout[i][0].name;
		            key.className = 'key ' + layout[i][0].name;
		            key.innerHTML = layout[i][0].value;
		            key.dataset.pianoKey = layout[i][0].name;
		          } else {
		            key.className = 'key ' + layout[i];
		            key.textContent = layout[i][0];
		            key.dataset.pianoKey = layout[i][0];
		          }
		          addMultipleListeners(_k.settings.triggerEvents, key, function (event) {
		            debounce(this.keyPressed(event), 300, false);
		          }.bind(this));
		          li.appendChild(key);
		        }
		        rowsContainer.appendChild(rows[rows.length - 1]);
		
		        rows[rows.length - 1].appendChild(li);
		      }
		
		      if (isNaN(instance.settings.position.x) || isNaN(instance.settings.position.y)) {
		        this.container.className += ' ' + instance.settings.position.x;
		        this.container.className += ' ' + instance.settings.position.y;
		      } else {
		        this.container.style.left = instance.settings.position.x + 'px';
		        this.container.style.top = instance.settings.position.y + 'px';
		      }
		
		      this.container.style.display = 'block';
		      this.container.classList.remove(this.currentKeyboard.settings.animationOut);
		      this.container.appendChild(rowsContainer);
		      this.container.classList.add(this.currentKeyboard.settings.animationIn);
		
		      var scale = _k.currentKeyboard.settings.scale;
		      if (scale > 1) {
		        var x = _k.currentKeyboard.settings.position.x;
		        var y = _k.currentKeyboard.settings.position.y;
		        scaleKeyboard(rowsContainer, scale, x, y);
		      }
		
		      document.body.classList.add('piano-open');
		      if (this.slideContent) {
		        document.querySelector(this.slideContainer).style.top = '-' + rowsContainer.getBoundingClientRect().height / 2 + 'px';
		      }
		    }
		  }, {
		    key: 'keyPressed',
		    value: function keyPressed(event) {
		      var target = event.target;
		      var value = target.textContent;
		      var input = this.currentTarget;
		      var cursor = input.selectionStart;
		      var end = input.selectionEnd;
		      var diff = end - cursor || 1;
		      var offset = event.target.innerText.length;
		      var limit = this.currentKeyboard.settings.limit;
		      var submitEvent = this.currentKeyboard.settings.submitEvent;
		
		      // There are still small bugs with selections.
		      if (/del/i.test(target.className)) {
		        var deleteOffset = cursor ? -1 : 0;
		        input.value = insertToString(input.value, cursor + deleteOffset, diff, '');
		        offset = -1;
		      } else if (/space/i.test(target.className)) {
		        if (input.value.length <= limit || limit === -1) {
		          input.value = insertToString(input.value, cursor, diff - 1, ' ');
		        }
		      } else if (/shift/i.test(target.className)) {
		        this.switchCase();
		      } else if (/larr/i.test(target.className)) {
		        offset = -1;
		      } else if (/rarr/i.test(target.className)) {
		        offset = 1;
		      } else if (/hide/i.test(target.className)) {
		        this.hideKeyboard();
		      } else if (/submit/i.test(target.className)) {
		        if (submitEvent) {
		          input.dispatchEvent(submitEvent);
		        } else {
		          console.warn('You did not provide a data-piano-event-id attribute.');
		        }
		      } else {
		        if (input.value.length <= limit || limit === -1) {
		          input.value = insertToString(input.value, cursor, diff - 1, value);
		        }
		      }
		
		      input.selectionStart = cursor + offset;
		      input.selectionEnd = cursor + offset;
		
		      if (document.createEvent) {
		        var evt = document.createEvent('HTMLEvents');
		        evt.initEvent('input', false, true);
		        input.dispatchEvent(evt);
		      } else {
		        input.fireEvent('input');
		      }
		
		      input.focus();
		    }
		  }, {
		    key: 'switchCase',
		    value: function switchCase() {
		      var shift = this.currentKeyboard.shift = !this.currentKeyboard.shift;
		      var keys = document.querySelectorAll('.piano-rows > ul > li');
		      var layout = this.settings.layouts[this.currentKeyboard.settings.layout];
		      var keySize = keys.length;
		
		      for (var i = 0; i < keySize; i++) {
		        var target = keys[i].children[0];
		        if (target) {
		          var value = target.textContent;
		          if (layout[i].length > 1 && layout[i][0].length > 0) {
		            target.textContent = shift ? layout[i][1] : layout[i][0];
		          } else {
		            target.textContent = shift ? value.toUpperCase() : value.toLowerCase();
		          }
		        }
		      }
		    }
		  }, {
		    key: 'hideKeyboard',
		    value: function hideKeyboard() {
		      var _this2 = this;
		
		      if (this.container.firstChild) {
		        typeof this.onBeforeHidden === 'function' && this.onBeforeHidden();
		        this.container.classList.remove(this.currentKeyboard.settings.animationIn);
		        this.container.classList.add(this.currentKeyboard.settings.animationOut);
		        setTimeout(function () {
		          _this2.container.style.display = 'none';
		        }, +this.container.style.animationDuration);
		        document.body.classList.remove('piano-open');
		        if (this.slideContent) {
		          document.querySelector(this.slideContainer).style.top = 0;
		        }
		        typeof this.onHidden === 'function' && this.onHidden();
		      }
		    }
		  }, {
		    key: 'clearKeyboards',
		    value: function clearKeyboards() {
		      if (this.container.firstChild) {
		        this.container.firstChild.remove();
		        this.container.style.top = this.container.style.left = '';
		        this.container.className = 'piano-container animated';
		        this.currentKeyboard = null;
		        document.body.classList.remove('piano-open');
		        if (this.slideContent) {
		          document.querySelector(this.slideContainer).style.top = 0;
		        }
		      }
		    }
		  }, {
		    key: 'isOpen',
		    value: function isOpen() {
		      return document.body.className.match(/\piano-open\b/) !== null;
		    }
		  }, {
		    key: 'destroy',
		    value: function destroy() {
		      this.clearKeyboards();
		      this.container.remove();
		    }
		  }]);
		
		  return Piano;
		}();
		
		function scaleKeyboard(container, scale, x, y) {
		  container.style['-webkit-transform'] = 'scale(' + scale + ')';
		  container.style['-moz-transform'] = 'scale(' + scale + ')';
		  container.style['-ms-transform'] = 'scale(' + scale + ')';
		  container.style['-o-transform'] = 'scale(' + scale + ')';
		  container.style['transform'] = 'scale(' + scale + ')';
		
		  container.style['-webkit-transform-origin'] = x + ' ' + y;
		  container.style['-moz-transform-origin'] = x + ' ' + y;
		  container.style['-ms-transform-origin'] = x + ' ' + y;
		  container.style['-o-transform-origin'] = x + ' ' + y;
		  container.style['transform-origin'] = x + ' ' + y;
		}
		
		function insertToString(str, index, count, add) {
		  return str.slice(0, index) + (add || '') + str.slice(index + count);
		}
		
		function addMultipleListeners(events, target, handler) {
		  events = events instanceof Array ? events : [events];
		  for (var i = 0; i < events.length; i++) {
		    target.addEventListener(events[i], function (event) {
		      handler(event);
		    });
		  }
		}
		
		// Helpers function for piano object
		function debounce(func, wait, immediate) {
		  var timeout;
		  return function () {
		    var context = this;
		    var args = arguments;
		    var later = function later() {
		      timeout = null;
		      if (!immediate) {
		        func.apply(context, args);
		      }
		    };
		    var callNow = immediate && !timeout;
		    clearTimeout(timeout);
		    timeout = setTimeout(later, wait || 200);
		    if (callNow) {
		      func.apply(context, args);
		    }
		  };
		}
		
		module.exports = Piano;

	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=piano.js.map

/***/ }
/******/ ]);
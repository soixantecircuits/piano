/**
 * Piano
 * Desktop browser keyboard for touch screens
 *
 * @author hugohil <hugo@soixantecircuits.fr>
 * @license MIT
 * @version 1.0b
 */

var piano = (function (k) {
  'use strict'

  k = {}

  k.init = function (options) {
    if (document.querySelectorAll('#piano').length) {
      return false
    }
    
    options = options || {}

    k.container = document.createElement('div')
    k.container.id = 'piano'
    k.container.className = 'piano-container animated'

    k.triggerName = options.triggers || 'click'
    k.slideContent = options.slideContent || false
    k.slideContainer = options.slideContainer || 'body'
    k.detectInputs()
    document.body.appendChild(k.container)

    // Make sure to hide keyboard when clicking outside
    addMultipleListeners(['click', 'touchdown'], document, function (event) {
      if (event.target.dataset.piano !== '' && !k.container.contains(event.target)) {
        k.hideKeyboard()
      }
    })

    k.onHidden = options.onHidden || function () {}
    k.onBeforeHidden = options.onBeforeHidden || function () {}

    return k
  }

  k.detectInputs = function () {
    k.triggers = document.querySelectorAll('[data-piano]')
    for (var i = 0; i < k.triggers.length; i++) {
      createKeyboard(k, k.triggers[i])
    }
    return k
  }

  function createKeyboard (parent, target) {
    var _k = clone(parent)
    delete _k.triggers
    delete _k.layouts
    var datas = target.dataset
    var options = {}

    _k.shift = false

    if (datas.pianoPosition) {
      if (datas.pianoPosition.indexOf('absolute') > -1) {
        options.position = datas.pianoPosition.replace(/absolute,\s/gi, '').split(',')
      } else {
        options.position = (datas.pianoPosition) ? datas.pianoPosition.split(',') : []
      }
    } else {
      console.warn('It seems you have incorrect values in your data-piano-position attribute on element: ', target)
      options.position = []
    }
    options.layout = datas.pianoLayout
    options.limit = datas.pianoLimit
    options.animationIn = datas.pianoAnimationIn
    options.animationOut = datas.pianoAnimationOut
    options.scale = datas.pianoScale

    var eventID = datas.pianoEventId
    var elementEvent = null
    if (eventID) {
      elementEvent = document.createEvent('Event')
      elementEvent.initEvent(eventID, true, true)
    }

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
    }

    addMultipleListeners(['click', 'touchdown'], target, function (event) {
      k.clearKeyboards()
      k.currentTarget = event.target
      displayKeyboard(_k)
    })
  }

  function displayKeyboard (instance) {
    var _k = k
    _k.currentKeyboard = instance

    var rowsContainer = document.createElement('div')
    rowsContainer.className = 'piano-rows'

    var layout = k.layouts[instance.settings.layout]

    var rows = []
    rows.push(document.createElement('ul'))

    for (var i in layout) {
      var li = document.createElement('li')
      if (layout[i] == 'break') {
        rowsContainer.appendChild(rows[rows.length - 1])
        rows.push(document.createElement('ul'))
      } else {
        var key = document.createElement('button')
        if (typeof (layout[i][0]) === 'object') {
          li.className = layout[i][0].name
          key.className = 'key ' + layout[i][0].name
          key.innerHTML = layout[i][0].value
          key.dataset.pianoKey = layout[i][0].name
        } else {
          key.className = 'key ' + layout[i]
          key.textContent = layout[i][0]
          key.dataset.pianoKey = layout[i][0]
        }
        addMultipleListeners(_k.triggerName, key, function (event) {
          debounce(keyPressed(event), 300, false)
        })
        li.appendChild(key)
      }
      rowsContainer.appendChild(rows[rows.length - 1])

      rows[rows.length - 1].appendChild(li)
    }

    if (isNaN(instance.settings.position.x) || isNaN(instance.settings.position.y)) {
      k.container.className += ' ' + instance.settings.position.x
      k.container.className += ' ' + instance.settings.position.y
    } else {
      k.container.style.left = instance.settings.position.x + 'px'
      k.container.style.top = instance.settings.position.y + 'px'
    }

    k.container.classList.remove(k.currentKeyboard.settings.animationOut)
    k.container.appendChild(rowsContainer)
    k.container.classList.add(k.currentKeyboard.settings.animationIn)

    var scale = _k.currentKeyboard.settings.scale
    if (scale > 1) {
      var x = _k.currentKeyboard.settings.position.x
      var y = _k.currentKeyboard.settings.position.y
      scaleKeyboard(rowsContainer, scale, x, y)
    }

    document.body.classList.add('piano-open')
    if (k.slideContent) {
      document.querySelector(k.slideContainer).style.top = '-' + (rowsContainer.getBoundingClientRect().height / 2) + 'px'
    }
  }

  function scaleKeyboard (container, scale, x, y) {
    container.style['-webkit-transform'] = 'scale(' + scale + ')'
    container.style['-moz-transform'] = 'scale(' + scale + ')'
    container.style['-ms-transform'] = 'scale(' + scale + ')'
    container.style['-o-transform'] = 'scale(' + scale + ')'
    container.style['transform'] = 'scale(' + scale + ')'

    container.style['-webkit-transform-origin'] = x + ' ' + y
    container.style['-moz-transform-origin'] = x + ' ' + y
    container.style['-ms-transform-origin'] = x + ' ' + y
    container.style['-o-transform-origin'] = x + ' ' + y
    container.style['transform-origin'] = x + ' ' + y
  }

  function keyPressed (event) {
    var target = event.target
    var value = target.textContent
    var input = k.currentTarget
    var cursor = input.selectionStart
    var end = input.selectionEnd
    var diff = (end - cursor) || 1
    var offset = 1
    var limit = k.currentKeyboard.settings.limit
    var submitEvent = k.currentKeyboard.settings.submitEvent

    // There are still small bugs with selections.
    if (/del/i.test(target.className)) {
      var deleteOffset = (cursor) ? -1 : 0
      input.value = insertToString(input.value, (cursor + deleteOffset), diff, '')
      offset = -1
    } else if (/space/i.test(target.className)) {
      if (input.value.length <= limit || limit === -1) {
        input.value = insertToString(input.value, cursor, (diff - 1), ' ')
      }
    } else if (/shift/i.test(target.className)) {
      k.switchCase()
    } else if (/larr/i.test(target.className)) {
      offset = -1
    } else if (/rarr/i.test(target.className)) {
      offset = 1
    } else if (/hide/i.test(target.className)) {
      k.hideKeyboard()
    } else if (/submit/i.test(target.className)) {
      if (submitEvent) {
        input.dispatchEvent(submitEvent)
      } else {
        console.warn('You did not provide a data-piano-event-id attribute.')
      }
    } else {
      if (input.value.length <= limit || limit === -1) {
        input.value = insertToString(input.value, cursor, (diff - 1), value)
      }
    }

    input.selectionStart = cursor + offset
    input.selectionEnd = cursor + offset

    if (document.createEvent) {
      var evt = document.createEvent('HTMLEvents')
      evt.initEvent('input', false, true)
      input.dispatchEvent(evt)
    } else {
      input.fireEvent('input')
    }

    input.focus()
  }

  k.switchCase = function () {
    var shift = k.currentKeyboard.shift = !k.currentKeyboard.shift
    var keys = document.querySelectorAll('.piano-rows > ul > li')
    var layout = k.layouts[k.currentKeyboard.settings.layout]

    for (var i = 0; i < keys.length; i++) {
      var target = keys[i].children[0]
      if (target) {
        var value = target.textContent
        if (layout[i].length > 1 && layout[i][0].length > 0) {
          target.textContent = (shift) ? layout[i][1] : layout[i][0]
        } else {
          target.textContent = (shift) ? value.toUpperCase() : value.toLowerCase()
        }
      }
    }
  }

  k.hideKeyboard = function () {
    if (k.container.firstChild) {
      typeof k.onBeforeHidden === 'function' && k.onBeforeHidden()
      k.container.classList.remove(k.currentKeyboard.settings.animationIn)
      k.container.classList.add(k.currentKeyboard.settings.animationOut)
      document.body.classList.remove('piano-open')
      document.querySelector(k.slideContainer).style.top = 0
      typeof k.onHidden === 'function' && k.onHidden()
    }
  }

  k.clearKeyboards = function () {
    if (k.container.firstChild) {
      k.container.firstChild.remove()
      k.container.style.top = k.container.style.left = ''
      k.container.className = 'piano-container animated'
      k.currentKeyboard = null
      document.querySelector(k.slideContainer).style.top = 0
    }
  }
  
  k.isOpen = function(){
    return document.body.className.match(/\piano-open\b/) !== null 
  }

  k.destroy = function () {
    k.clearKeyboards()
    k.container.remove()
  }

  // Found on http://stackoverflow.com/a/21350614/2033455
  function insertToString (str, index, count, add) {
    return str.slice(0, index) + (add || '') + str.slice(index + count)
  }

  function addMultipleListeners (events, target, handler) {
    events = (events instanceof Array) ? events : [events]
    for (var i = 0; i < events.length; i++) {
      target.addEventListener(events[i], function (event) {
        handler(event)
      })
    }
  }

  function clone (src) {
    var dest = {}
    for (var key in src) {
      dest[key] = src[key]
    }
    return dest
  }

  // Helpers function for piano object
  function debounce (func, wait, immediate) {
    var timeout
    return function () {
      var context = this
      var args = arguments
      var later = function () {
        timeout = null
        if (!immediate) {
          func.apply(context, args)
        }
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait || 200)
      if (callNow) {
        func.apply(context, args)
      }
    }
  }

  return k
})(piano || {})

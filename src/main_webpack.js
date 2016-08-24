
module.exports = (function app () {
  'use strict'

  var Piano = require('../piano.js')
  var azertyMail = [
    [{name: 'email', value: '@gmail.com'}], [{name: 'email', value: '@yahoo.fr'}], [{name: 'email', value: '@hotmail.fr'}], ['break'],
    ['&', '1'], ['é', '2'], ['"', '3'], ['\'', '4'], ['(', '5'], [')', '6'], ['è', '7'], ['!', '8'], ['ç', '9'], ['à', '0'], ['-', '_'], [{ name: 'del', value: '&larr;' }], ['break'],
    ['a'], ['z'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], ['^'], ['$', '*'], ['@', '#'], ['break'],
    ['q'], ['s'], ['d'], ['f'], ['g'], ['h'], ['j'], ['k'], ['l'], ['m'], ['ù', '%'], ['break'],
    [{ name: 'shift', value: '&123' }], ['w'], ['x'], ['c'], ['v'], ['b'], ['n'], [',', '?'], ['.', ';'], ['/', ':'], ['=', '+'], [{ name: 'shift', value: '↑' }], ['break'],
    [{ name: 'larr', value: '&lsaquo;' }], [{ name: 'space', value: ' ' }], [{ name: 'rarr', value: '&rsaquo;' }], [{ name: 'hide', value: '&times;' }], [{ name: 'submit', value: '&ldsh;' }]
  ]
  var azerty = [
    ['&', '1'], ['é', '2'], ['"', '3'], ['\'', '4'], ['(', '5'], [')', '6'], ['è', '7'], ['!', '8'], ['ç', '9'], ['à', '0'], ['-', '_'], [{ name: 'del', value: '&larr;' }], ['break'],
    ['a'], ['z'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], ['^'], ['$', '*'], ['@', '#'], ['break'],
    ['q'], ['s'], ['d'], ['f'], ['g'], ['h'], ['j'], ['k'], ['l'], ['m'], ['ù', '%'], ['break'],
    [{ name: 'shift', value: '&123' }], ['w'], ['x'], ['c'], ['v'], ['b'], ['n'], [',', '?'], ['.', ';'], ['/', ':'], ['=', '+'], [{ name: 'shift', value: '↑' }], ['break'],
    [{ name: 'larr', value: '&lsaquo;' }], [{ name: 'space', value: ' ' }], [{ name: 'rarr', value: '&rsaquo;' }], [{ name: 'hide', value: '&times;' }], [{ name: 'submit', value: '&ldsh;' }]
  ]

  console.log(azerty)

  var keyboard = new Piano({
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

  return keyboard
})()

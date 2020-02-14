document.addEventListener('DOMContentLoaded', function () {
  var azerty = [
    ['&', '1'], ['é', '2'], ['"', '3'], ["'", '4'], ['(', '5'], [')', '6'], ['è', '7'], ['!', '8'], ['ç', '9'], ['à', '0'], ['-', '_'], [{ name: 'del', value: '&larr;' }], ['break'],
    ['a'], ['z'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], ['^'], ['$', '*'], ['@', '#'], ['break'],
    ['q'], ['s'], ['d'], ['f'], ['g'], ['h'], ['j'], ['k'], ['l'], ['m'], ['ù', '%'], ['break'],
    [{ name: 'shift', value: '&123' }], ['w'], ['x'], ['c'], ['v'], ['b'], ['n'], [',', '?'], ['.', ';'], ['/', ':'], ['=', '+'], [{ name: 'shift', value: '↑' }], ['break'],
    [{ name: 'larr', value: '&lsaquo;' }], [{ name: 'space', value: ' ' }], [{ name: 'rarr', value: '&rsaquo;' }], [{ name: 'hide', value: '&times;' }], [{ name: 'submit', value: '&ldsh;' }]
  ]
  var azertyMail = [
    [{name: 'email', value: '@gmail.com'}], [{name: 'email', value: '@yahoo.fr'}], [{name: 'email', value: '@hotmail.fr'}], ['break'],
    ['&', '1'], ['é', '2'], ['"', '3'], ["'", '4'], ['(', '5'], [')', '6'], ['è', '7'], ['!', '8'], ['ç', '9'], ['à', '0'], ['-', '_'], [{ name: 'del', value: '&larr;' }], ['break'],
    ['a'], ['z'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], ['^'], ['$', '*'], ['@', '#'], ['break'],
    ['q'], ['s'], ['d'], ['f'], ['g'], ['h'], ['j'], ['k'], ['l'], ['m'], ['ù', '%'], ['break'],
    [{ name: 'shift', value: '&123' }], ['w'], ['x'], ['c'], ['v'], ['b'], ['n'], [',', '?'], ['.', ';'], ['/', ':'], ['=', '+'], [{ name: 'shift', value: '↑' }], ['break'],
    [{ name: 'larr', value: '&lsaquo;' }], [{ name: 'space', value: ' ' }], [{ name: 'rarr', value: '&rsaquo;' }], [{ name: 'hide', value: '&times;' }], [{ name: 'submit', value: '&ldsh;' }]
  ]

  window.pianoKeyboard = new piano({
    slideContent: true,
    slideContainer: 'body',
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
  let options = {
    layout: 'azerty',
    animationIn: 'bounceInUp',
    animationOut: 'fadeOutUp',
    scale: 1.0
  }
  window.pianoKeyboard.addTarget(document.querySelector('#dynamic-piano'), options)
  // console.log(window.pianoKeyboard)
})

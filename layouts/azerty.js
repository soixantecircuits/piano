/**
 * Piano
 * Desktop browser keyboard for touch screens
 *
 * AZERTY layout
 *
 * @author hugohil <hugo@soixantecircuits.fr>
 * @license MIT
 * @version 1.0b
 */

(function (k){
  k.layouts = k.layouts || [];
  k.layouts['azerty'] = [
    ['@', '#'], ['&', '1'], ['é', '2'], ['"', '3'], ['\'', '4'], ['(', '5'], ['§', '6'], ['è', '7'], ['!', '8'], ['ç', '9'], ['à', '0'], [')', '°'], ['-', '_'], [{name: 'del', value: '⌫'}], ['break'],
    ['a'], ['z'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], ['^', '¨'], ['$', '*'],['break'],
    ['q'],['s'],['d'],['f'],['g'],['h'],['j'],['k'],['l'],['m'],['ù', '%'],['`', '£'],['break'],
    [{name: 'shift', value: '↑'}], ['w'], ['x'], ['c'], ['v'], ['b'], ['n'], [',', '<'], ['.', '>'], ['/', '?'], [{name: 'shift', value: '↑'}], ['break'],
    [{name: 'space', value: ' '}], [{name: 'larr', value: '<'}], [{name: 'rarr', value: '>'}], [{name: 'hide', value: '⌨'}]
  ];
})(piano || {});

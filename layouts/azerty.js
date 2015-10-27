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
    ['@', '#'], ['&', '1'], ['é', '2'], ['"', '3'], ['\'', '4'], ['(', '5'], ['§', '6'], ['è', '7'], ['!', '8'], ['ç', '9'], ['à', '0'], [')', '°'], [{name: 'del', value: '&larr;'}], ['break'],
    ['a'], ['z'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], ['^', '¨'], ['$', '*'], ['-', '_'], ['break'],
    ['q'],['s'],['d'],['f'],['g'],['h'],['j'],['k'],['l'],['m'],['ù', '%'],['`', '£'],['break'],
    [{name: 'shift', value: '↑'}], ['w'], ['x'], ['c'], ['v'], ['b'], ['n'], [',', '?'], ['.', ';'], ['/', ':'], ['=', '+'], [{name: 'shift', value: '↑'}], ['break'],
    [{name: 'larr', value: '<'}], [{name: 'space', value: ' '}], [{name: 'rarr', value: '>'}], [{name: 'hide', value: '&DownTeeArrow;'}]
  ];
})(piano || {});

/**
 * Piano
 * Desktop browser keyboard for touch screens
 *
 * custom AZERTY layout
 *
 * @author hugohil <hugo@soixantecircuits.fr>
 * @license MIT
 * @version 1.0b
 */

(function (k){
  k.layouts = k.layouts || [];
  k.layouts['azerty'] = [
    ['&', '1'], ['é', '2'], ['"', '3'], ['\'', '4'], ['(', '5'], [')', '6'], ['è', '7'], ['!', '8'], ['ç', '9'], ['à', '0'], ['-', '_'],  [{name: 'del', value: '&larr;'}], ['break'],
    ['a'], ['z'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], ['^'], ['$', '*'], ['@', '#'], ['break'],
    ['q'],['s'],['d'],['f'],['g'],['h'],['j'],['k'],['l'],['m'],['ù', '%'],['break'],
    [{name: 'shift', value: '&123'}], ['w'], ['x'], ['c'], ['v'], ['b'], ['n'], [',', '?'], ['.', ';'], ['/', ':'], ['=', '+'], [{name: 'shift', value: '↑'}], ['break'],
    [{name: 'larr', value: '&lsaquo;'}], [{name: 'space', value: ' '}], [{name: 'rarr', value: '&rsaquo;'}], [{name: 'hide', value: '&times;'}], [{name: 'submit', value: '&ldsh;'}]
  ];
})(piano || {});

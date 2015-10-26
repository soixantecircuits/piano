/**
 * Piano
 * Desktop browser keyboard for touch screens
 *
 * Default layout (QWERTY)
 *
 * @author hugohil <hugo@soixantecircuits.fr>
 * @license MIT
 * @version 1.0b
 */

(function (k){
  k.layouts = k.layouts || [];
  k.layouts['default'] = [
    ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], [{name: 'del', value: '⌫'}], ['break'],
    ['q'], ['w'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], ['[', '{'], [']', '}'], ['\\', '|'], ['break'],
    ['a'], ['s'], ['d'], ['f'], ['g'], ['h'], ['j'], ['k'], ['l'], [';', ':'], ['\'', '"'], ['break'],
    [{name: 'shift', value: '↑'}], ['z'], ['x'], ['c'], ['v'], ['b'], ['n'], ['m'], [',', '<'], ['.', '>'], ['/', '?'], [{name: 'shift', value: '↑'}], ['break'],
    [{name: 'larr', value: '<'}], [{name: 'space', value: ' '}], [{name: 'rarr', value: '>'}], [{name: 'hide', value: '⌨'}]
  ];
})(piano || {});

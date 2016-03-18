/**
 * Piano
 * Desktop browser keyboard for touch screens
 *
 * QWERTY (4 rows) layout
 *
 * @author hugohil <hugo@soixantecircuits.fr>
 * @license MIT
 * @version 1.0b
 */

module.exports = [
  // TODO: find a nice way to implement a 'ctrl' key.
  // ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], [{name: 'del', value: '⌫'}], ['break'],
  ['q'], ['w'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], [{ name: 'del', value: '⌫' }], ['break'],
  ['a'], ['s'], ['d'], ['f'], ['g'], ['h'], ['j'], ['k'], ['l'], ["'", '"'], ['break'],
  [{ name: 'shift', value: '↑' }], ['z'], ['x'], ['c'], ['v'], ['b'], ['n'], ['m'], [',', '<'], ['.', '>'], ['/', '?'], [{ name: 'shift', value: '↑' }], ['break'],
  [{ name: 'ctrl', value: 'Ctrl' }], [{ name: 'special', value: '&123' }], [{ name: 'space', value: ' ' }], [{ name: 'larr', value: '<' }], [{ name: 'rarr', value: '>' }], [{ name: 'hide', value: '⌨' }]
]

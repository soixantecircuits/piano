/**
 * Touchkey
 * Desktop browser keyboard for touch screens
 *
 * @author hugohil <hugo@soixantecircuits.fr>
 * @license MIT
 * @version 1.0b
 *
 * @todo:
 *   - Support hammer.js and/or other touch events librarie
 *   - Add space, backspace, etc
 */

var touchkey = (function (k){
  'use strict';

  var k = {};

  k.init = function (){
    k.container = document.createElement('div');
    k.container.id = 'touchkey-container';

    k.triggers = document.querySelectorAll('input[data-touchkey]');
    for (var i = 0; i < k.triggers.length; i++) {
      createKeyboard(k, k.triggers[i]);
    }
    document.body.appendChild(k.container);

    // Make sure to hide keyboard when clicking outside
    document.addEventListener('click', function (event){
      if(event.target.dataset.touchkey != '' && event.target.className != 'touchkey'){
        for (var i = 0; i < k.triggers.length; i++) {
          if(event.target.id != k.triggers[i].id){
            k.hideKeyboard();
          }
        }
      }
    });
  }

  function createKeyboard (parent, target){
    var _k = clone(parent);
    delete _k.triggers;
    delete _k.layouts;
    var datas = target.dataset;
    var options = {};

    options.position = (datas.touchkeyPosition) ? datas.touchkeyPosition.split(',') : [];
    options.layout = datas.touchkeyLayout;

    _k.settings = {
      position: {
        x: options.position[0] || 'center',
        y: options.position[1] || 'bottom'
      },
      layout: options.layout || 'default'
    }

    target.addEventListener('click', function (event){
      k.currentTarget = event.target;
      k.hideKeyboard();
      displayKeyboard(_k);
    });
  }

  function displayKeyboard (instance){
    var list = document.createElement('ul');
    list.id = 'touchkey-list';

    var layout = k.layouts[instance.settings.layout];

    for(var i in layout){
      var li = document.createElement('li');
      var key = document.createElement('button');
      key.className = 'touchkey';
      key.textContent = layout[i];
      key.addEventListener('click', function (event){
        k.currentTarget.focus();
        k.currentTarget.value += event.target.textContent;
      })

      li.appendChild(key)
      list.appendChild(li);
    }

    k.container.appendChild(list);
  }

  k.hideKeyboard = function (){
    if(k.container.firstChild){
      k.container.firstChild.remove();
    }
  }

  function clone (src) {
    var dest = {};
    for (var key in src) {
        dest[key] = src[key];
    }
    return dest;
  }

  return k;
})(touchkey || {});
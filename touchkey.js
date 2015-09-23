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
    k.container.id = 'touchkey';
    k.container.className = "tk-container";

    k.triggers = document.querySelectorAll('input[data-touchkey]');
    for (var i = 0; i < k.triggers.length; i++) {
      createKeyboard(k, k.triggers[i]);
    }
    document.body.appendChild(k.container);

    // Make sure to hide keyboard when clicking outside
    document.addEventListener('click', function (event){
      if(event.target.dataset.touchkey != '' && !k.container.contains(event.target)){
        k.hideKeyboard();
      }
    });
  }

  function createKeyboard (parent, target){
    var _k = clone(parent);
    delete _k.triggers;
    delete _k.layouts;
    var datas = target.dataset;
    var options = {};

    if(datas.touchkeyPosition.indexOf('absolute') > -1){
      options.position = datas.touchkeyPosition.replace(/absolute,\s/gi, '').split(',');
    } else {
      options.position = (datas.touchkeyPosition) ? datas.touchkeyPosition.split(',') : [];
    }
    options.layout = datas.touchkeyLayout;

    _k.settings = {
      position: {
        x: options.position[0] || 'center',
        y: options.position[1] || 'bottom'
      },
      layout: options.layout || 'default'
    }

    var events = ['click', 'touchend'];
    for (var i = 0; i < events.length; i++) {
      target.addEventListener(events[i], function (event){
        triggerHandler(event);
      });
    };

    function triggerHandler (event){
      k.currentTarget = event.target;
      k.hideKeyboard();
      displayKeyboard(_k);
    }
  }

  function displayKeyboard (instance){
    var list = document.createElement('ul');
    list.id = 'touchkey-list';

    var layout = k.layouts[instance.settings.layout];

    for(var i in layout){
      var li = document.createElement('li');
      if(layout[i] == 'break'){
        li.className = 'break';
      } else {
        var key = document.createElement('button');
        key.className = 'touchkey ' + layout[i];
        key.textContent = layout[i];
        key.addEventListener('click', function (event){
          keyPressed(event);
        });
        li.appendChild(key)
      }

      list.appendChild(li);
    }

    if(isNaN(instance.settings.position.x) || isNaN(instance.settings.position.y)){
      k.container.className += ' ' + instance.settings.position.x;
      k.container.className += ' ' + instance.settings.position.y;
    } else {
      k.container.style.left = instance.settings.position.x + 'px';
      k.container.style.top = instance.settings.position.y + 'px';
    }

    k.container.appendChild(list);
  }

  function keyPressed (event){
    k.currentTarget.focus();
    var value = event.target.textContent;
    switch(value){
      case 'del':
        k.currentTarget.value = k.currentTarget.value.substr(0, k.currentTarget.value.length - 1);
        break;
      case 'space':
        k.currentTarget.value += ' ';
        break;
      default:
        k.currentTarget.value += value;
        break;
    }
  }

  k.hideKeyboard = function (){
    if(k.container.firstChild){
      k.container.firstChild.remove();
      k.container.style.top = k.container.style.left = '';
      k.container.className = "tk-container";
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
/**
 * Piano
 * Desktop browser keyboard for touch screens
 *
 * @author hugohil <hugo@soixantecircuits.fr>
 * @license MIT
 * @version 1.0b
 */

var piano = (function (k){
  'use strict';

  var k = {};

  k.init = function (){
    k.container = document.createElement('div');
    k.container.id = 'piano';
    k.container.className = "piano-container";

    k.triggers = document.querySelectorAll('input[data-piano]');
    for (var i = 0; i < k.triggers.length; i++) {
      createKeyboard(k, k.triggers[i]);
    }
    document.body.appendChild(k.container);

    // Make sure to hide keyboard when clicking outside
    addMultipleListeners(['click', 'touchdown'], document, function (event){
      if(event.target.dataset.piano != '' && !k.container.contains(event.target)){
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

    _k.shift = false;

    if(datas.pianoPosition.indexOf('absolute') > -1){
      options.position = datas.pianoPosition.replace(/absolute,\s/gi, '').split(',');
    } else {
      options.position = (datas.pianoPosition) ? datas.pianoPosition.split(',') : [];
    }
    options.layout = datas.pianoLayout;

    _k.settings = {
      position: {
        x: options.position[0] || 'center',
        y: options.position[1] || 'bottom'
      },
      layout: options.layout || 'default'
    }

    addMultipleListeners(['click', 'touchdown'], target, function (event){
      triggerHandler(event);
    });

    function triggerHandler (event){
      k.currentTarget = event.target;
      k.hideKeyboard();
      displayKeyboard(_k);
    }
  }

  function displayKeyboard (instance){
    var list = document.createElement('ul');
    list.id = 'piano-list';
    k.currentKeyboard = instance;

    var layout = k.layouts[instance.settings.layout];

    for(var i in layout){
      var li = document.createElement('li');
      if(layout[i] == 'break'){
        li.className = 'break';
      } else {
        var key = document.createElement('button');
        if(typeof(layout[i][0]) == 'object'){
          key.className = 'key ' + layout[i][0].name;
          key.textContent = layout[i][0].value;
        } else {
          key.className = 'key ' + layout[i];
          key.textContent = layout[i][0];
        }
        addMultipleListeners(['click', 'touchdown'], key, function (event){
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
    var target = event.target;
    var value = target.textContent;

    if(/del/i.test(target.className)){
      k.currentTarget.value = k.currentTarget.value.substr(0, k.currentTarget.value.length - 1);
    } else if(/space/i.test(target.className)){
      k.currentTarget.value += ' ';
    } else if(/shift/i.test(target.className)){
      k.switchCase();
    } else {
      k.currentTarget.value += value;
    }
  }

  k.switchCase = function (){
    var shift = k.currentKeyboard.shift = !k.currentKeyboard.shift;
    var keys = document.querySelectorAll('#piano-list li');
    var layout = k.layouts[k.currentKeyboard.settings.layout];

    for (var i = 0; i < keys.length; i++) {
      var target = keys[i].children[0];
      if(target){
        var value = target.textContent;
        if(layout[i].length > 1 && layout[i][0].length > 0){
          target.textContent = (shift) ? layout[i][1] : layout[i][0];
        } else {
          target.textContent = (shift) ? value.toUpperCase() : value.toLowerCase();
        }
      }
    }
  }

  k.hideKeyboard = function (){
    if(k.container.firstChild){
      k.container.firstChild.remove();
      k.container.style.top = k.container.style.left = '';
      k.container.className = "piano-container";
      k.currentKeyboard = null;
    }
  }

  function addMultipleListeners (events, target, handler){
    for (var i = 0; i < events.length; i++) {
      target.addEventListener(events[i], function (event){
        handler(event);
      });
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
})(piano || {});
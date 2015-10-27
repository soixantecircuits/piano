(function (){
  piano.init();
  document.querySelector('textarea').click();
  document.querySelector('#input-2').addEventListener('input', function (event){
    console.log('input changed');
  });
})();

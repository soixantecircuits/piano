(function (){
  piano.init();
  document.querySelector('#input-2').click();
  document.querySelector('#input-2').addEventListener('input', function (event){
    console.log('input changed');
  });
})();

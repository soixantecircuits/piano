/* globals piano */

;(function () {
  piano.init({
    triggers: ['click', 'touchstart'],
    slideContent: true,
    slideContainer: '.demo-container'
  })

  document.querySelector('textarea').click()

  document.querySelector('#input-2').addEventListener('input', function (event) {
    console.log('input changed')
  })

  document.querySelector('#input-2').addEventListener('input-2', function (event) {
    console.log('element with id "%s" submitted.', event.target.id)
  })
})()

AFRAME.registerComponent('cursor-listener', {
    
    init: function () {
    
    const clickText = document.getElementById("#Click-Text");


    clickText.addEventListener('mousedown', function (evt) {
        window.location = "http://www.google.com/";
    });
  }
});
AFRAME.registerComponent('cursor-listener', {
    var location = "http://floral.at";
    init: function () {
    
    const clickText = document.querySelector("#Click-Text");

        
    clickText.addEventListener('click', function (evt) {
        window.open( location , '_blank' );
    });
  }
});
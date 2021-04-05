
AFRAME.registerComponent('markerhandler', {

          init: function() {
              const animatedMarker = document.querySelector("#animated-marker");
              const aEntity = document.querySelector("#animated-model");
              const aModel = document.querySelector("#animated-text");
              const aPhone = document.querySelector("#PhoneJak");
      
              

              // every click, we make our model grow in size :)
              animatedMarker.addEventListener('click', function(ev, target){
                  const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
                  if (aEntity && intersectedElement === aEntity) {
                    window.location = "http://google.com";
                  }
                  if (aModel && intersectedElement === aModel) {
                    window.location = "http://floral.at";
                  }
                  if (aPhone && intersectedElement === aPhone) {
                    document.location.href = "tel:00436761234567";
                  }
                  
              });
        }
        


});







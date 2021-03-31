
AFRAME.registerComponent('markerhandler', {

          init: function() {
              const animatedMarker = document.querySelector("#animated-marker");
              const aEntity = document.querySelector("#animated-model");
              const newEntity = document.querySelector("#animated-text");

              // every click, we make our model grow in size :)
              animatedMarker.addEventListener('click', function(ev, target){
                  const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
                  if (aEntity && intersectedElement === aEntity) {
                    window.location = "https://stackoverflow.com/questions/6452502/adding-click-event-handler-to-iframe";
                  }
                  if (newEntity && intersectedElement === newEntity) {
                    window.location = "https://google.com";
                  }
              });
        }


        







});



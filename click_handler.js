
AFRAME.registerComponent('markerhandler', {

          init: function() {
              const animatedMarker = document.querySelector("#animated-marker");
              const aEntity = document.querySelector("#animated-model");

              // every click, we make our model grow in size :)
              animatedMarker.addEventListener('click', function(ev, target){
                  const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
                  if (aEntity && intersectedElement === aEntity) {
                    window.location = "https://stackoverflow.com/questions/6452502/adding-click-event-handler-to-iframe";


                  }
              });
        }

        function iframeclick() {
          document.getElementById("theiframe").contentWindow.document.body.onclick = function() {
            window.location = "http://www.floral.at/";
              }
          }







});



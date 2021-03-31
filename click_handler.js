
AFRAME.registerComponent('markerhandler', {

          init: function() {
              const animatedMarker = document.querySelector("#animated-marker");
              const aEntity = document.querySelector("#animated-model");
              

              // every click, we make our model grow in size :)
              animatedMarker.addEventListener('click', function(ev, target){
                  const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
                  if (aEntity && intersectedElement === aEntity) {
                    window.location = "http://google.com";
                  }
                  
              });
        }


        







});

AFRAME.registerComponent('crazystuff', {

  init: function() {
      const crazycomponent = document.querySelector("#doellerjak");
     
      

      // every click, we make our model grow in size :)
      crazycomponent.addEventListener('click', function(ev, target){
          
            window.location = "http://folral.at";
          }
          
      );
}










});




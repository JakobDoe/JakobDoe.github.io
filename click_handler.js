
// AFRAME.registerComponent('markerhandler', {

//           init: function() {
//               const animatedMarker = document.querySelector("#animated-marker");
//               const aEntity = document.querySelector("#animated-model");
//               const aModel = document.querySelector("#animated-text");
//               const aPhoneIcon = document.querySelector("#phoneicon");
//               const aPhoneNumber = document.querySelector("#phonenumber");
      
              

//               // every click, we make our model grow in size :)
//               animatedMarker.addEventListener('click', function(ev, target){
//                   const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
//                   if (aEntity && intersectedElement === aEntity) {
//                     window.location = "http://google.com";
//                   }
//                   if (aModel && intersectedElement === aModel) {
//                     window.location = "http://floral.at";
//                   }
//                   if (aPhoneIcon && intersectedElement === aPhoneIcon) {
//                     document.location.href = "tel:00436761234567";
//                   }
//                   if (aPhoneNumber && intersectedElement === aPhoneNumber) {
//                     document.location.href = "tel:00436761234567";
//                   }
//               });
//         }


       


// });

AFRAME.registerComponent('navigate-on-click', {
  schema: {
    url: {default: ''}
  },

  init: function () {
    var data = this.data;
    var el = this.el;


    this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
    tick: function(t, dt) { 
      if(document.querySelectorAll("PicturePerson") !== undefined )
      {var vv = document.querySelector('a-marker'); vv.setAttribute('raycaster',"objects: .clickable"); vv.setAttribute( 'cursor',"rayOrigin: mouse"); vv.setAttribute( 'cursor',"fuse: false"); }
    }

    el.addEventListener('click', function () {
      window.location.href = data.url;
    });
  }
});  


 

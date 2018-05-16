if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js', {scope: '/'})
            .then(function (registration) {
                // if reg success
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(function (err) {
                // if reg fail
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

function getInput(){
   var longtitude=document.getElementById("longti").value;
   var latitude=document.getElementById("lati").value;
   console.info('longtitude :'+longtitude);
   console.info('latitude :'+latitude);
  }

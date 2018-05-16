if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/webprg2018/sw.js', {scope: '/webprg2018/'})
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

function getLocation(){ 
  if (navigator.geolocation){ 
    navigator.geolocation.getCurrentPosition(showPosition,showError); 
  }else{ 
    alert("navigator do not support geo-targeting"); 
  } 
} 

function showError(error){ 
  switch(error.code) { 
    case error.PERMISSION_DENIED: 
      alert("Targeting failed, user refused to request geo-targeting"); 
      break; 
    case error.POSITION_UNAVAILABLE: 
      alert("Targeting failed, geo-targeting info can not be used"); 
      break; 
    case error.TIMEOUT: 
      alert("Targeting failed, time out"); 
      break; 
    case error.UNKNOWN_ERROR: 
      alert("Targeting failed, positioning system failed"); 
      break; 
  } 
}

function showPosition(position){ 
  var lat = position.coords.latitude; //纬度 
  var lag = position.coords.longitude; //经度 
  alert('latitude:'+lat+',longitude:'+lag); 
} 

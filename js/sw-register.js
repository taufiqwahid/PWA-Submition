
        
        if ("serviceWorker" in navigator) {
          window.addEventListener("load",function(){
            navigator.serviceWorker.register("/service-worker.js")
            .then(function(){
              console.log("Pendaftaran ServiceWorker Berhasil ")
            })
            .catch(function(){
              console.log("Pendaftaran ServiceWorker GAGAL");
            })
          })
        }else{
          console.log("ServiceWorker belum di dukung di Browser Ini")
        }
      
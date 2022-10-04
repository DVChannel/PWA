
// Ciclo de vida del SW

self.addEventListener('install', event => {

    console.log('SW: Instalando SW');


const instalacion = new Promise( (resolve, reject) => {

    setTimeout(() => {
        console.log('SW: Instalaciones terminadas');
        self.skipWaiting();
        resolve();
    }, 1000);

});


event.waitUntil( instalacion );


});
self.addEventListener('activate', event => {

    console.log('SW2: activo y listo');
});

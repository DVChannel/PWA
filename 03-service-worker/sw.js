
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


self.addEventListener('fetch', event => {
    console.log( 'SW:', event.request.url );
     if ( event.request.url.includes('https://reqres.in/') ) {
         const resp = new Response(`{ ok: false, mensaje: 'ajajjajj'}`);
         event.respondWith( resp );
     }
});

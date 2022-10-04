
// Ciclo de vida del SW

self.addEventListener('install', event => {

    console.log('SW: Instalando SW');
});

self.addEventListener('activate', event => {

    console.log('SW2: activo y listo');
});


const CACHE_NAME = 'cache-1';

self.addEventListener('install', e => {


    const cacheProm = caches.open( 'cache-1' )
        .then( cache => {

            return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/img/main.jpg',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                '/js/app.js',
                
            ]);

        
        });
        e.waitUntil(cacheProm);
    });
    
    
    const respuesta = caches.match( e.request )
         .then( res => {

             if ( res ) return res;

             // No existe el archivo
             // tengo que ir a la web
             console.log('No existe', e.request.url );


             return fetch( e.request ).then( newResp => {

                 caches.open( CACHE_DYNAMIC_NAME )
                     .then( cache => {
                         cache.put( e.request, newResp );
                     limpiarCache( CACHE_DYNAMIC_NAME, 50 );
                     });

                return newResp.clone();
             });


         });




     e.respondWith( respuesta );

        // e.responseWith(caches.match(e.request));
    


if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}

if (window.caches){
    caches.open('prueba-1');
    caches.open('prueba-2');

    caches.open('cache-v1.1').then(cache =>{
        cache.addAll([
            '/index.html',
            '/css/style.css',
            '/img/main.jpg'
        ]).then(() => {
          //  cache.delete('/css/style.css');

        });



caches.keys().then(keys => {
    console.log(keys);
});



    /*    cache.match('/index.html')
            .then( res =>{
                res.text().then(console.log);
            });*/
        });
    
};


self.addEventListener('fetch', event => {

if (event.request.url.includes('.jpg')){
 console.log(event.request.url);
    let fotoReq = fetch(event.request);

    event.respondWith(fotoReq);
}


});
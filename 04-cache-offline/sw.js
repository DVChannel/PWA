
self.addEventListener('fetch', event =>{
    const offlineResp = new Response(`
    
    Bienvenido a la pag WEB
    Necesitas internet jsjsjjs
    
    `);
    const resp = fetch(event.request)
                    .catch(()=>  offlineResp     
                    );

    event.respondWith(resp);
});


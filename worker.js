addEventListener(
  	"fetch",event => {
    		let url=new URL(event.request.url);
        		url.hostname="fr.zirostore.lol";
            		let request=new Request(url,event.request);
                		event. respondWith(
                    			fetch(request)
                          		)
                              	}
                                )

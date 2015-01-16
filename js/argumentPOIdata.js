function onPageShow(){	
	var data;
	switch ($.url(document.location).param('id')) {
	    case 0:
	        data = "bip.json";
	        break;
	    case 1:
	    	data = "nao.json";
	        break;
	    case 2:
	    	data = "grimage.json";
	        break;
	    case 3:
	    	data = "hall.json";
	        break;
	    case 4:
	    	data = "robotique.json";
	        break;
	    case 5:
	    	data = "bureau.json";
	        break;
	    case 6:
	    	data = "cluster.json";
	        break;
	}	
	console.log('onPageShow = '+ data);
	return data;

}					

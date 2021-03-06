var MimeMapper = (function(){
	var mimeTypes = {
		"html" : "text/html",
		"css"  : "text/css",
		"js"   : "application/javascript",
		"json" : "application/json",
		"txt"  : "text/plain",
		"woff" : "application/font-woff",
		"svg"  : "image/svg+xml",
		"gif"  : "image/gif",
		"jpeg" : "image/jpeg",
		"png"  : "image/png",
		"mustache" : "text/plain",
		"ico"  : "image/x-icon",
		"map"  : "application/json" //not real but lets you view source
	};
		
	function mapMimeType(extension){
		for(var key in mimeTypes){
			if(extension == key){
				return mimeTypes[extension];
			}
		}
		console.log("missing mimetype for: " + extension);
		return "text/plain";
	}
	
	return {
		mapMimeType : mapMimeType
	};
	
})();
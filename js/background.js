chrome.webRequest.onBeforeRequest.addListener(
	function(details){
		console.log("Font API found: " + details.url);
		var extension = Util.getExtension(details.url); 
		var mimeType = MimeMapper.mapMimeType(extension);
		
		return { 
			cancel : true
		};
	},
	{
		urls : ["*://fast.fonts.com/jsapi/*", "*://fast.fonts.com/t/*"],
		types : ["script"]
	},
	["blocking"]
);

//["*://fast.fonts.com/jsapi", "*://fast.fonts.com/t*"]
var Util = (function(){
	function getExtension(path){
		var split = path.split(".");
		return split[split.length - 1];
	}
	
	return {
		getExtension : getExtension
	};
	
})();
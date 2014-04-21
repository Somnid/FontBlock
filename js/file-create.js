//creates an addressable script from a string
var FileCreate = (function(){

	function createFile(text, mime){
		var dataUrl = "data:" + mime + ";utf-8,";
		dataUrl += text;
		return dataUrl;
	}
	
	function createEmptyFile(mime){
		return dataUrl = "data:" + mime + ";utf-8,";
	}

	return {
		createFile : createFile,
		createEmptyFile : createEmptyFile
	};

})();
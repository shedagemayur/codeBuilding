var code = (function($){
	function Toggle(str, char) {
	    return str + ( char.toLowerCase() === char ? char.toUpperCase():char.toLowerCase());
	}
	return{
		ToggleStingCharacters: function(str) {
			return str.split('').reduce(Toggle, '');
		}
	}	
})(code);
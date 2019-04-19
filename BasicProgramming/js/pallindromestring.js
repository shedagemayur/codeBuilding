var code = (function($){
	return{
		isPallindromicString: function(str = ''){
			if(typeof(str) == 'number'){
				str = str.toString();
			}
			if(str == str.split("").reverse().join("")){
				return "YES";
			}
			return "NO";
		}
	}	
})(code);
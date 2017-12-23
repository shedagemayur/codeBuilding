var code = (function($){
	function getProduct(pre, curr) {
	    return pre * curr;
	}
	return{	
		getProductOfArrayElement: function(arr = []){
			if(arr.length == 0){
				return 0;
			}
			return arr.reduce(getProduct);
		}
	}	
})(code);
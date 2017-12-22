var code = (function($){
	return{
		factorial: function() {
            return function(n) {
                if (n <= 1)
                    return 1;
                return n * arguments.callee(n - 1);
            };
        }
	}	 
})(code);
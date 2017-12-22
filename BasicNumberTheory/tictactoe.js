var code = (function($){
	return {
		TicTacToe: function(n = 0){
			var min = n*(n-1)**2/4;
			var max = (n*(n-1)*(2*n-1))/6;

			console.log(min, max);
		}
	}
})(code);
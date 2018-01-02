/**

To Find Factorial Of A Number

*/
var code = (function(){
	var factorial = function(n) {
		if (n <= 1){
			return 1;
		}
		return n * arguments.callee(n - 1);
   	};
	return{
		factorialOfNumber: function(num = 0) {
		    return factorial(num);
		}
	}
})();
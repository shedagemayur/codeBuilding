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

let code = (function(){
	let getFactorial = n =>{
		return new Promise((resolve,reject)=>{
			if(n<=1){
				resolve(1);
			}
			resolve(
				getFactorial(n-1).then(fact => {
					return fact * n;
				})
			)
		});
	}
	return {
		factorial: function(number){
			getFactorial(number).then(
				response => console.log(response)
			)
		}
	}
})();
code.factorial(5);
code.factorial(6);
code.factorial(7);
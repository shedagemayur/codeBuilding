var code = (function($){
	return {
		countDivisors: function(l=0 ,r=0 ,k=0){
			var count = 0;
			for(var i=l;i<=r;i++){
				if(i%k == 0){
					count=count + 1;
				}
			}
			console.log(count);
		}
	}
})(code);
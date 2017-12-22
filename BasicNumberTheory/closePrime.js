var code = (function($){
	function checkPrime(number){
		var flag = true;
		for(i=2;i<number;i++){
			if(number%i == 0){
				flag = false;
				return flag;
			}
		}
		return flag;
	}
	return{
		closePrimeToGiveNumber: function(number){
			if(number<2){
				return 2-number;
			}
			if(checkPrime(number)){
				return 0;
			}
			incnum = decnum = number;
			while(!checkPrime(incnum)){
				incnum++;
			}
			while(!checkPrime(decnum)){
				decnum--;
			}
			inc = incnum - number;
			dec = number-decnum;
			closeprime = (inc>dec) ? dec : inc ;
			return closeprime;
		}
	}
})(code);
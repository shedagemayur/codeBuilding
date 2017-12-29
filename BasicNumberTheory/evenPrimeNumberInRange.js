var isPrimeNumber = function(num = 0){
	if(num == 1){
       return false;
    }
    if(num == 2){
        return true;
    }
    for(var i=2;i<=Math.sqrt(num);i++){
        if(num % i == 0){
            return false;
        }
    }
	return true;
}
var isEvenNumber = function(num = 0){
	if(num % 2 == 0){
		return true;
	}else{
		return false;
	}
}
var getEvenAndPrimeNumbers = function(initial = 0, final = 0){
    var count = 0;
    for(var i=initial; i<=final; i++){
        if(isEvenNumber(i) && isPrimeNumber(i)){
            count++;
        }
    }
    return count;
}
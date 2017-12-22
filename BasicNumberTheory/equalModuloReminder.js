var code = (function($){
    var CompareForSort = function(first, second){
        if (first == second)
            return 0;
        if (first < second)
            return -1;
        else
            return 1;
    }

    var compareArrayValues = function(arr = []){
        var isTrues = '';
        var j = 0;
        for (i = 1; i < arr.length; i++) {
            if(arr[j] == arr[i]){
                isTrues = true;
            }else{
                isTrues = false;
                break;
            }
        }
        return isTrues;
    }

    return{
        calculateEqualReminder: function(arr = []){
            var moduloValues = [];
            arr = arr.sort(CompareForSort);

            for(var i=arr[0];i>1;i--){
                var temp = [];
                for(var j=0;j<arr.length;j++){
                    temp[j] = arr[j] % i;
                }
                if(compareArrayValues(temp)){
                    moduloValues.push(i);
                }
            }
            console.log(moduloValues);
        }
    }
})(code);
/**

Chandan is an extremely biased person, and he dislikes people who fail to solve all the problems in the interview he takes for hiring people. There are n people on a day who came to be interviewed by Chandan.

Chandan rates every candidate from 0 to 10. He has to output the total ratings of all the people who came in a day. But, here's the problem: Chandan gets extremely frustrated when someone ends up scoring a 0 in the interview. So in frustration he ends up removing the candidate who scored that 0, and also removes the candidate who came before him. If there is no candidate before the one who scores a 0, he does nothing.

You've to find the summation of all the ratings in a day for Chandan.

Input constraints:
The first line of input will contain an integer — n. The next n lines will contain an integer, where the ith integer represents the rating of the ith person.

Output constraints:
Print the required sum.

Constraints:
1 ≤ n ≤5 * 103
0 ≤ Value of ratings ≤10

SAMPLE INPUT

5
2
3
0
7
0
SAMPLE OUTPUT

2

*/
var code = (function(){
	var doSplice = function(arr, spliceindex){
	    if (spliceindex > -1) {
	        arr.splice(spliceindex, 1);
	    }
		return arr;
	}
	var getPreviousElement = function(arr, i){
		if(arr.length > 1){
			return i-1;
		}
		return false;
	}
	var add = function(a, b){
	    return a + b;
	}
	var totalCount = function(arr){
		if(arr.length == 1){
			return arr[0];
		}
		return arr.reduce(add);
	}
	return{
		/**
		 * getSumCountOfElements: return total count
		 * @params: array
		 * @return: (integer)
		 * @methods:
		 	1. reduce : The reduce() method reduces the array to a single value.
		 	2. splice: The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
		*/
		getSumCountOfElements: function(arr = []){
			if(arr.length == 0){
				return 0;
		    }
			if(arr.length == 1 && arr[0] != 0){
				return arr[0];
		    }
			for(var i=1;i<arr.length;i++){
				if(arr[i] == 0){
					temp = getPreviousElement(arr, i);
					if(temp != -1){
						doSplice(arr, temp);
		            }
				}
		    }
			arr = arr.filter(Number);

			return totalCount(arr);
		}
	}
})();
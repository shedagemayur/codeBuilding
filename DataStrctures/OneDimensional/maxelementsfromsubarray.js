/**

Given an array A of size 'N' and an integer k, find the maximum for each and every contiguous subarray of size k.

Input :

First line contains 2 space separated integers 'N' and 'k' .
Second line contains 'N' space separated integers denoting array elements.
Output:

Space separated Maximum of all contiguous sub arrays of size k.
Constraints :

1<= N <=10^5
1<= Ai <=10^9
1<= k <=N
SAMPLE INPUT

9 3
1 2 3 1 4 5 2 3 6
SAMPLE OUTPUT

3 3 4 5 5 5 6
Explanation

First Sub array of size 3 : 1 2 3, here maximum element is 3

second Sub array of size 3 : 2 3 1, here maximum element is 3

third Sub array of size 3 : 3 1 4, here maximum element is 4

fourth Sub array of size 3 : 1 4 5, here maximum element is 5

Fifth Sub array of size 3 : 4 5 2, here maximum element is 5

Sixth Sub array of size 3 : 5 2 3, here maximum element is 5

Seventh Sub array of size 3 : 2 3 6, here maximum element is 6

*/

var code = (function($){
	function getMaxFromArray(a, b){
         return Math.max(a, b);
	}
	return{
		/**
		 * getMaxFromSubArray: return array with max elements from each sub array
		 * @params: arr, length of sub array
		 * @return: (array) array
		 * @methods:
		 	1. getMaxFromArray : The getMaxFromArray() return the Max element from array.
		 	2. reduce: The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
		 	3. Math.max: The Math.max() function returns the largest of zero or more numbers.
		*/
		getMaxFromSubArray: function(arr = [], length = 0){
			var subarr = [];
			var max = {};
			var c = 0;
			var x = 0;
			if(arr.length == 0){
				return 0;
			}
			for(var i=0;i<arr.length;i++){
                subarr[c] = arr.slice(c-1, c + (length-1));
				c++;
            }

			subarr.forEach(function(subarray){
				if(subarray.length == length){
                    max[x] = subarray.reduce(getMaxFromArray);
					x++;
				}
			});

			return Object.values(max);
		}
	}
})(code);

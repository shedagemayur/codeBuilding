/**
Monk just purchased an array AA having NN integers. Monk is very superstitious. He calls the array AA Lucky if the frequency of the minimum element is odd, otherwise he considers it Unlucky. Help Monk in finding out if the array is Lucky or not.

Input:
First line consists of a single integer TT denoting the number of test cases.
First line of each test case consists of a single integer NN denoting the size of array AA.
Second line of each test case consists of NN space separated integers denoting the array AA.

Output:
For each test case, print "Lucky" (without quotes) if frequency of minimum element is odd, otherwise print "Unlucky"(without quotes). Print a new line after each test case.

Constraints: 
1≤T≤101≤T≤10
1≤N≤1051≤N≤105
1≤A[i]≤1091≤A[i]≤109

SAMPLE INPUT

2
5
8 8 9 5 9
5
3 3 3 5 3
SAMPLE OUTPUT

Lucky
Unlucky
Explanation

In first case, value of minimum element is 55 and it's frequency is 11 which is odd, so the array is Lucky.
In second case, value of minimum element is 33 and it's frequency is 44 which is even, so the array is Unlucky.
*/

var code = (function(){
	function countFrequent(arr){
		var count = {};
		arr.forEach(function(i){
				count[i] = (count[i] || 0) + 1;
			}
		);
		return count;
	}
	return{
		countFrequentElements: function(arr = []){
			var count = 0;
			var minOfarr = 0;

			if(arr.length == 0){
				return 0;
			}else{
				minOfarr = arr.sort()[0];
			}
			count = countFrequent(arr.sort());

			if(count[minOfarr] % 2 == 0){
				return 'Unlucky';
			}else{
				return 'Lucky';
			}
		}
	}
})();
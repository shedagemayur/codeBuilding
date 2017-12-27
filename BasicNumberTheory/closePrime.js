/**

Given a number N, you have to find nearest prime number. If there are more then one, print the smaller one.

Input:
First line of input contains T denoting number of test cases. Only line of each test case contains one integers N, as described above.

Output:
For each test case output a single line containing one integer, the answer to the above problem.

Constraints:
1<= T <= 100000
2<= N <= 106

Example:
Input:
2
6
14
Output:
5
13

Explanation:
Test case 1- for 6, both 5 and 7 are at same distance, but we need to print the smaller one, so output is 5
Test case 2-for 14, nearest prime number is 13

*/
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
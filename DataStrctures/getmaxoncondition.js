/**

A simple question again..!

These are the people from nirmaLand who have shown utmost dedication towards Competitve Programming..!

You will be provided with name of the coder and no. of hours he/she spent on coding.

You need to output top 3 names of the coders who spent most time in coding.

Note: Time (no. of hours) given for all coders will be unique. More technically, no two coders will have same amount of time.

See the sample case for better understanding.


Input format:

First line consist of total number of coders, let's say 'n'.

Each of the next n lines consist of a string, let's say 'N' (name of coder) and a number let's say, 'T' (time).



Output format:

Output names of top 3 coders that spent maximum time in coding.


Constraints:

3 <= n <= 100

1 <= |N| <= 10

1 <= T <= 1000

SAMPLE INPUT

7
Darshan 78
Harshad 90
Jaimin 87
Nirav 88
Hardik 1
Fenil 70
Lovlin 5
SAMPLE OUTPUT

Harshad
Nirav
Jaimin
Explanation

Harshad spent 90 hours in coding, which is maximum, so his name is at first.

After Harshad, Nirav spent 88 hours in coding, which is maximum, so his name is second.

After Nirav, Jaimin spent 87 hours in coding, which is maximum, so his name comes third.

*/
var code = (function($){
	var getKeyByValue = function(object, value){
		return Object.keys(object).find(key => object[key] === value);
	}
	return{
		/**
		 * getTopNumbers: return top rankers
		 * @params: obj with name(string) and points(intrger)
		 * @return: (array)
		 * @methods:
		 	1. sort : The sort() method sorts the elements of an array in place and returns the array.
		 	2. reverse: The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
		 	3. Object.keys: The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
		 	4. Object.values: The values() method returns a new Array Iterator object that contains the values for each index in the array.
		*/
		getTopRankers: function(obj = {}, topcounts){
			var top = [];
			if(Object.keys(obj).length == 0){
				return 0;
			}
			ObjectValues = Object.values(obj);

			ObjectValues.sort(function(a, b) {
			  	return a - b;
			});
            ObjectValues.reverse();
		          
            for (i = 0; i < topcounts; i++) {
				top[i] = getKeyByValue(obj, ObjectValues[i]);
            }
            return top;
		}
	}
})(code);

// input: code.getTopNumbers({'darshan':78, 'harsha':8, 'nirav':50,'fenil':60},3);
// output: ["darshan", "fenil", "nirav"]
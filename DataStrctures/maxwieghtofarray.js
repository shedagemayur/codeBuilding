/**

Rupam and Ankit are both fond of collecting stones. They both follow this hobby diligently and go out finding stones together. So, one fine day they decided to play a small game.They decided to weigh each of the stones and note them down in a notepad, and then at the end of the day both of them will compare their notes.

They will check how many stones of a particular weight are there. Then they will compare the weight of the stone occurring maximum number of times (you can consider stones of similar weight to be similar). In case that all different stones occur exactly same number of times, the stone with maximum weight will be considered for comparison. The person with higher weighing stone wins, else there will be a tie. You need to determine the result.

INPUT:
The first line of input consists of a single integer T denoting number of test cases. Each test case consists of three lines. First line consists of a single integer N denoting the number of stones. The second line consists of N space separated integers denoting the weights of stones collected by Rupam. The third line consists of N space separated integers denoting the weights of stones collected by Ankit.

OUTPUT:
For each test case, print the result in a new line.
If Rupam wins, print "Rupam" (without the quotes).
If Ankit wins, print "Ankit" (without the quotes).
In case of a Tie, print "Tie" (without the quotes).

CONSTRAINTS:

1<=T<=1000
1<=N<=100
0<=Weight of stones<=100
SAMPLE INPUT

2
6
5 3 1 4 3 2
4 3 1 1 1 5
5
1 2 3 4 5
5 4 3 2 1
SAMPLE OUTPUT

Rupam
Tie

*/

var code = (function($){
	function addArrayElements(a, b){
		return a + b;
	}
	return{
		getMaxArrayWeight: function(firstarr = [], secondarr = []){
			var maxweight = 0;
			var firstString = "First array having maximum weight";
			var secondString = "Second array having maximum weight";

			if(firstarr.length == 0 && secondarr.length == 0){
				return "Tie";
			}
			if(firstarr.length == 0){
				firstarr.push(0);
			}
			if(secondarr.length == 0){
				secondarr.push(0);
			}

			var weightoffirst = firstarr.reduce(addArrayElements);
			var weightofsecond = secondarr.reduce(addArrayElements);

			if(weightoffirst == weightofsecond){
				return "Tie";
			}

			maxweight = (weightoffirst > weightofsecond) ? firstString : secondString;
			return maxweight;
		}
	}
})(code);
/*
King Tle4Ever of Time Limit Exceeded is really fascinated about Tic Tac Toe. He organizes a national level contest for Tic Tac Toe every year in Time Limit Exceeded. (Though I agree you need to be really stupid to loose a game of Tic Tac Toe but for the sake of question assume playing Tic Tac Toe for them is same as playing Chess for us :P ).

Every year the contest has lots of participants. This year there are n participants from all over the country. Seeing this huge participation he asks Moron a simple question.
Suppose participant pi wins wi matches. The king wants to know the sum of wi2 from 1 to n. Now as you already know Moron is not good with maths, he asks you to help him.

Given the value of n find the minimum and maximum value of sum of wi2 from 1 to n. As values can be too large output the values mod 109+7.

[Input]
First line contains a single integer t denoting number of test cases.
Next t lines contains a single integer n denoting the number of participants.

[Output]
For each test case output the minimum and maximum value mod 109+7. Say minimum is minx and maximum is maxx than you should print "minx maxx".

[Constraints]
1<=t<=105
3<=n<=109
*/

var code = (function($){
	return {
		TicTacToe: function(n = 0){
			var min = n*(n-1)**2/4;
			var max = (n*(n-1)*(2*n-1))/6;

			console.log(min, max);
		}
	}
})(code);
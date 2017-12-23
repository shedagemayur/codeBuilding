/*
Having a good previous year, Monk is back to teach algorithms and data structures. This year he welcomes the learners with a problem which he calls "Welcome Problem". The problem gives you two arrays AA and BB (each array of size NN) and asks to print new array CC such that:
C[i]=A[i]+B[i]C[i]=A[i]+B[i] ; 1≤i≤N1≤i≤N
Now, Monk will proceed further when you solve this one. So, go on and solve it :)

Input:
First line consists of an integer NN, denoting the size of AA and BB.
Next line consists of NN space separated integers denoting the array AA.
Next line consists of NN space separated integers denoting the array BB.

Output:
Print NN space separated integers denoting the array CC.

Input Constraints:
1≤N≤1000001≤N≤100000
1≤A[i]≤1000001≤A[i]≤100000; 1≤i≤N1≤i≤N
1≤B[i]≤1000001≤B[i]≤100000; 1≤i≤N1≤i≤N
*/

var code = (function(){
	var sum = 0;
	return {
		sumOfArrayTwoArrays: function(firstarray = [], secondarray = []){
			if(firstarray.length != secondarray.length){
				if(firstarray.length > secondarray.length){
					for(var i=secondarray.length;i<firstarray.length;i++){
                        secondarray[i] = 0;
                    }
                }else{
                    for(var j=firstarray.length;j<secondarray.length;j++){
                        firstarray[j] = 0;
                    }
				}				
			}			
			function add(num, idx) {
             	return num + secondarray[idx];
            }
			sum = firstarray.map(add);
			return sum;
		}
	}
})(code);
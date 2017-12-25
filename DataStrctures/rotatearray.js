/**

Monk loves to preform different operations on arrays, and so being the principal of Hackerearth School, he assigned a task to his new student Mishki. Mishki will be provided with an integer array AA of size NN and an integer KK , where she needs to rotate the array in the right direction by K steps and then print the resultant array. As she is new to the school, please help her to complete the task.

Input:
The first line will consists of one integer TT denoting the number of test cases. 
For each test case:
1) The first line consists of two integers NN and KK, NN being the number of elements in the array and KK denotes the number of steps of rotation.
2) The next line consists of NN space separated integers , denoting the elements of the array AA.

Output:
Print the required array.

Constraints:
1≤T≤201≤T≤20
1≤N≤1051≤N≤105
0≤K≤1060≤K≤106
0≤A[i]≤1060≤A[i]≤106

SAMPLE INPUT

1
5 2
1 2 3 4 5
SAMPLE OUTPUT

4 5 1 2 3
Explanation

Here TT is 1, which means one test case. 
N=5N=5 denoting the number of elements in the array and K=2K=2, denoting the number of steps of rotations. 
The initial array is: 1,2,3,4,51,2,3,4,5 
In first rotation, 55 will come in the first position and all other elements will move to one position ahead from their current position. Now, the resultant array will be 5,1,2,3,45,1,2,3,4 
In second rotation, 44 will come in the first position and all other elements will move to one position ahead from their current position. Now, the resultant array will be 4,5,1,2,34,5,1,2,3 

*/
var code = (function(){
	return{
		/**
		 * arrayRotate: return rotated array
		 * @params: arr, rotation=number of rotation, reverse=direction of rotation
		 * @return: (array) rotated array
		 * @methods: 
		 	1. pop : The pop() method removes the last element from an array and returns that element.
		 	2. push: The push() method adds one or more elements to the end of an array and returns the new length of the array.
		 	3. unshift: The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
		 	4. shift: The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
		*/
		arrayRotate: function(arr=[], rotation=0, reverse=0){
			if(arr.length == 0){
				return 0;
			}
			while(rotation){
				if(reverse){
					arr.push(arr.shift());
				}else{
					arr.unshift(arr.pop());
				}
				rotation--;
			}		    
		    return arr
		}
	}
})();
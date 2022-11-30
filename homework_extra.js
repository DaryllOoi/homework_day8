// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/


let code1 = [1,3,5];
let code2 = [];

for(i=0, j=(code1.length -1); i<code1.length; i++, j--){
    code2[i]=code1[j]
}
console.log(code2);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

let array1 = [1,2,3,4,5,6]
for (let i=0; i<array1.length; i++){
    console.log(array1[i]);
}

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

console.log("----exercise 4-----");
let array4 = [1,2,3,4,5,6]

for( let i=0; i < array4.length; i++){
    if(array4[i] % 2 === 0 )
    console.log(array4[i]);
}

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

console.log("----exercise 5-----");
let array5 = [1,2,3,4,5,6]

for( let i=0; i < array5.length; i++){
    if(array5[i] % 2 !== 0 ){
        console.log("wrong");
    }
    console.log(array5[i]);
}

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

let array7 = [1,2,3,4,5,6]

for(let i = 0; i< array7.length; i++){
    array7[i]+=1;
}
console.log(array7);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

console.log("------exercise8-----")
console.log("length of arrays",array1.length);
console.log("length of arrays",array5.length);
console.log("length of arrays",array7.length);

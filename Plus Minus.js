/* https://www.hackerrank.com/challenges/plus-minus/problem */


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
var pos = 0;
var neg = 0;
var zero = 0;
var length = arr.length;
for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        pos ++;
        
    } else if(arr[i] < 0){
        neg ++;
        
    } else if(arr[i] == 0){
        zero ++;
        
    }
    
}
console.log(pos/length);
console.log(neg/length);
console.log(zero/length);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

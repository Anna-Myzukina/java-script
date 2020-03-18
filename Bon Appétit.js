'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
// we should replace bill[k] to 0
// we need to sum rest element
// we should devide this sun 2
// we print "Bon Appetit" when b == sum/2
// else we print difference between sum/2 - b

bill[k] = 0
// console.log(bill);
var sum = bill.reduce((a,b) => a+b);
// console.log(sum);
var dev = sum/2;
// console.log(dev);
var difference = b - dev;
if(b == dev){
    console.log("Bon Appetit");
}else{
    console.log(difference);
}
}

function main() {
    const nk = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

    bonAppetit(bill, k, b);
}

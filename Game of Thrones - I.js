'use strict';

const fs = require('fs');

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

// Complete the gameOfThrones function below.
function gameOfThrones(s) {
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--){
        if(s.lastIndexOf(s.charAt(i)) === i){
            let j =  s.indexOf(s.charAt(i));
            let k = 1;
            while(j !== i){
                j = s.indexOf(s.charAt(i), j + 1)
                k++;
            }
            if (k % 2 !== 0){
                count ++;
                if (count === 2){
                    return 'NO';
                }
            }
        }
    }
    return 'YES';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = gameOfThrones(s);

    ws.write(result + "\n");

    ws.end();
}

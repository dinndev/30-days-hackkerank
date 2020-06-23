
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

// ignore the code above

function main() {
    let n = parseInt(readLine(), 10);
   for(let i = 0; i < 10; i++){
     const index = i + 1;
     const number = n
     const total = (number * index)
     console.log(`${number} x ${index} = ${total}`);  
   }
}
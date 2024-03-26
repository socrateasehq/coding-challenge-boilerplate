// User Boilerplate
function getValueAtIndex(index, arr) {
    // Write the logic here
    return;
}

// Compiler Boilerplate
let inputBuffer = '';
let inputLines = '';
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (chunk) => {
	inputBuffer += chunk;
});
process.stdin.on('end', () => {
	inputLines = inputBuffer.split('\n');
	inputBuffer = '';

	main();
});

function readLine() {
	return inputLines.shift();
}

function main() {
	const numOfElements = parseInt(readLine().trim())
	const inputArr = readLine().split(' ').map((i) => parseInt(i))
	const index = parseInt(readLine().trim())
	const s = getValueAtIndex(index, inputArr);
	console.log(s)

}
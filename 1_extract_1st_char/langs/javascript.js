// User Boilerplate
function extractFirstChar(word){
	// Write the logic here
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
	const word = readLine().trim()
	output = extractFirstChar(word);
	console.log(output)

}

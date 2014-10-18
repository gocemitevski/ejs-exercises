// Write a program that creates a string that represents an 8x8 grid, using newline character to separate lines.
// At each position of the grid, there is eirther a space or a "#" character.
// The characters should form a chess board

var size = 8;
var mark = "";
		
for (var i = 0; i < size; i++ ){

	// Format string until line break
	for (var j = 0; j < size - 1; j++){
		
		if (j % 2 == 0){
			mark += "#";
		}
		else {
			mark += " ";
		}
		
	}
	
	mark += "\n";
	
	if (i % 2 == 0){
		mark += " ";
	}

}
		
console.log(mark);

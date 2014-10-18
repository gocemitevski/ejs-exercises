var size = 8;
var mark = "";
		
for (var i = 0; i < size; i++ ){

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

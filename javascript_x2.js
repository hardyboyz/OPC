function allSquaredPairs(num) {
 	collection = [];
    if(num <= 2147483647){
    	for(i=0;i<=num;i++){
        	for(j=0; j <= num; j++){
            	if((i * i) + (j * j) == num){
                	if(i < j)
                	collection.push([i,j])
            	}
        	}
    	}
    }
	console.log(collection)
	return collection;
}

allSquaredPairs(25)

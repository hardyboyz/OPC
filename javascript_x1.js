function validISBN10(isbn) {
    var val = 0;
    var response = false;

    if(isbn.length == 10){
        for (i = 0; i <= (isbn.length -1); i++) {
            c = i+1;
            val += parseInt(isbn[i]) * (c);  
        }

        if(val % 11 == 0){
            response =  true;
        }else{
            response =  false;
        }

    }else{
        response = false;
    }
    //response ? document.write('true') : document.write('false');
    return response;
    
}

validISBN10("1234512345")
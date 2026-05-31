function myDisplayer(someText){
    console.log(someText);
}
function getData(callback) {
    let ok = true;
    let Data = {};
    if(ok) {
        callback(null,Data)
    } 
    else
        {
            callback("something failed",null);

    }
}

getData(function(error,Data){
    if(error) {
        myDisplayer(error);
    
        return;
    }
    else{
        myDisplayer(Data);
    }

});

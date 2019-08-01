var firstObject = {
    id: "1",
    name: "abc",
    color: "white",
    // text : "font"
}

var secondObject = {
    id: "1",
    name: "abc",
    color: "white",
    // text : "fonts"

}

function compareObjects(firstObject, secondObject){
    
    var noOfKeys = 0;

    for(var key1 in firstObject){

        for(var key2 in secondObject){
            if (key1 == key2){

                noOfKeys = noOfKeys + 1;

                if(firstObject[key1] != secondObject[key2]){
                    noOfKeys = noOfKeys - 1;  // This is written just to ensure that key-value pairs are same for both objects. 
                }
            }
        }

    }

    if(noOfKeys == Object.keys(firstObject).length && noOfKeys == Object.keys(secondObject).length){

        return true;
    }
    else{
        return false;
    }
}

var areSameObject = compareObjects(this.firstObject, this.secondObject);

printMessage(areSameObject);

function printMessage(areSameObject){

    console.log("First object is : "+firstObject);
    console.log("Second object is : "+secondObject);

    if(areSameObject){
        console.log("Both objects are same");

    }
    else{
        console.log("Both objects are different");

    }
}

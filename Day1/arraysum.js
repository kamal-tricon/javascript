function getSum(array){
    var i;
    var sum = 0;

    for(i = 0 ; i < array.length ; i ++){
        sum += array[i];
    }

    return sum;
}

function activate(){
    var array = [13, 5, 52, 31, 98];
    var sum = getSum(array);

    console.log("Sum of all array elements is: "+sum);
}

activate();
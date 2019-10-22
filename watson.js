//Cameron Sanders - challenge submission 

/*
You are given a positive integer N, and two single-digit integers p and q, where p != q and both are greater than 1. You must output all of the integers from 1 to N inclusive, separated by a single space.
However, any integer divisible by p whose decimal representation does not contain the digit p should be replaced by the text WAT and any integer divisible by q whose decimal representation does not contain the digit q should be replaced by the text SON. Integers for which both of the preceding statements are true should instead be replaced by the text WATSON. Please implement using Node.js and with the mindset that this will be production level code that will be supported by you and your team.

input N p q
*/

var readline = require('readline');

const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    console: false
});

readInterface.on('line', function (line) {
    var arrLine = line;
    
    //More user friendly if using guiding statements with incorrect input. 
    //Commented out for now to meet requirements.
    /*if(!arrLine){
        console.log("Enter case. For example: 12 3 4");
    }*/
    
    var splitLine = arrLine.split(" ");
    var text = "";
    
    //initialize N p and q
    N = splitLine[0];
    p = splitLine[1];
    q = splitLine[2];
    
    //go through each number less than/= N
    for(var i=1; i<=N; i++){
        var divided = i/p;
        var divided2 = i/q;
        var outpt = "";
        var stringCheck = i.toString();
        var flag = 0;
        for(var digit = 0; digit < stringCheck.length; digit++){
            if((stringCheck[digit] == p) || (stringCheck[digit] == q)){
                flag = 1;
            }
        }
        if(((i % p == 0) && (i % q == 0)) && flag == 0){
            outpt = "WATSON";
        }
        else if((i % q == 0) && flag == 0){
            outpt = "SON";
        }
        else if((i % p == 0) && flag == 0){
            outpt = "WAT";
        }
        else{
            outpt = i;
        }
        text += outpt+" ";
    }
    
    console.log(text);
});


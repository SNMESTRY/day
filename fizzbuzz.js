function fizzBuzz(i){


    if (i % 15 == 0) {
        return "FizzBuzz";
    }
    //console.log("FizzBuzz");
    else if (i % 3 == 0) {
        return "Fizz";
    } 
    //console.log("Fizz");
    else if (i % 5 == 0) {
        return "Buzz";
    } //console.log("Buzz");
    else {
        return i;
    } //console.log(i);
}

 module.exports = fizzBuzz
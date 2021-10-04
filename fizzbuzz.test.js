const fizzBuzz = require('./fizzbuzz')

test ('Gives you value 1 for input 1' , () =>{
    expect(fizzBuzz(1)).toEqual(1);
});
test ('Gives you value Fizz for input 3' , () =>{
    expect(fizzBuzz(3)).toEqual('Fizz');
});
test ('Gives you value Buzz for input 5' , () =>{
    expect(fizzBuzz(5)).toEqual('Buzz');
});
test ('Gives you value FizzBuzz for input 15' , () =>{
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
});
test ('Gives you value FizzBuzz for input 30' , () =>{
    expect(fizzBuzz(30)).toEqual('FizzBuzz');
});
test ('Gives you value 7 for input 7' , () =>{
    expect(fizzBuzz(7)).toEqual(7);
});
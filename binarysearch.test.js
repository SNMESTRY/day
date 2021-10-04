const binarySearch = require('./binarysearch')

test ('Should return index of element' , () =>{
    expect(binarySearch([1,2,3,4,5,6,7,8,9], 3)).toBe(2);
});

test ('If key is middle element returns middle index' , () =>{
    expect(binarySearch([5,6,8,9,12,34,80], 9)).toBe(3);
});

test ('Element 10 is not found it returns -1' , () =>{
    expect(binarySearch([1,2,3,4,5,6,7,8,9,12,22], 10)).toBe(-1);
});
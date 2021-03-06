function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;
    //console.log("I ALSO WANT TO CHANGE FILE");

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}

//var sortedArray = [1,2,3,4,5,6,7,8,9];
//console.log(binarySearch(sortedArray, 3));
//console.log(binarySearch(sortedArray, 10));


module.exports = binarySearch
const numbers = [1, 2, 3, 6, 9, 7, 3, 6, 9, 5, 0, 6, 34, 0, 0, 2, 0, 4, 0];


push 
// in javascript
// remove all zeros
// sort the list in descending order
// at the very end, add your name to the end of the array as a string
// return that array

function problem(arr) {

    if (!Array.isArray(arr) || !arr.length) {
        console.log("Please enter valid")
    }

    const newArr =arr.filter((numners) => numbers !== 0).sort(function(a, b){return b-a});

    newArr.push("COrey");
    console.log(newArr);
    return newArr;

    }
    problem(numbers) 

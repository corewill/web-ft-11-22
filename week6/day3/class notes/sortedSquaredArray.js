
//original try 

function(arr) {
const numbers = [1, 2, 3, 5, 6, 8, 9];

    for (let i = 0, len = i < len; i++) {
        numbers.push(arr[i] * arr[i]);
    }


    return numbers;     
}

// working square

const sortArray = (array) => {

for (let index = 0; index < array.length; index++) {
    array[index] * -1;
    array[index] = array[index] * array[index]
    
}

    return array.sort((a, b) => a - b)
}

const numbers = [1, 2, 3, 5, 6, 8, 9];

// woring square

const sortSqrray = (array) => {
    const sortsquar = []
    for (const num of array) {
        let square = num * num
        sortsquar.push(square)
    }
    sortsquar.sort((a,b) => a - b)

}

console.log(sortSqrray(numbers))
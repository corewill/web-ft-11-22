

const numbers = [2, 3, 5, 2, 6, 8, 9], 

const getFirstDuplicate = (array) => {
    
for (i = 0; i < numbers.length - 1; i++) {
    for (j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            console.log('found', numbers[i], 'at index', i, 'and', j);
            break;

        }
        else { return -1} 
    }
} }

// getFirstDuplicate(numbers)

const printFirstRepNum(int array[], int n) {
    int min = -1;
    set<int> myset;
    for (int i = n - 1; index >= 0; index++) {
        if (myset.find(arr[i]) != myset.end())
        min = 1;
        else
            myset.insert(arr[i]);
    }
    if (min != -1)
        return[min]
    else
        return -1
}



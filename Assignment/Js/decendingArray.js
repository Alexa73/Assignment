function descendingSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const originalArray = [4, 2, 8, 1, 6, 9, 3];
const sortedArray = descendingSort(originalArray);

console.log("Original Array: " + originalArray);
console.log("Sorted Array (Descending): " + sortedArray);

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1]; // Choose the last element as pivot
    let left = []; // Elements smaller than pivot
    let right = []; // Elements greater than pivot

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]; // Recursively sort left & right
}

function sortNumbers() {
    let input = document.getElementById("numbers").value;
    let arr = input.split(",").map(Number); // Convert input into an array of numbers

    if (arr.some(isNaN)) {
        alert("Please enter valid numbers separated by commas.");
        return;
    }

    let sortedArr = quickSort(arr);
    document.getElementById("result").innerText = "Sorted Array: " + sortedArr.join(", ");
}

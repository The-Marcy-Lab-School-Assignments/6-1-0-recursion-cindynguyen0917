// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr) => {
    if (arr.length === 0) {
        return 0
    } else {
        return arr[0] + sum(arr.slice(1))
    }
}

// Reverse string using recursive approach
const reverse = (str) => {
    if (str.length === 0) {
        return ''
    } else {
        return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
    }
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    let a = 0; //fibInt(0)
    let b = 1; //fibInt(1)
    for (let i = 2; i <= n; i++) {
        let current = a + b;
        a = b;
        b = current;
    }
    return b;
};

// Recursive fibonacci
const fibRec = (n) => {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return fibRec(n - 1) + fibRec(n - 2)
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    if (start === end) {
        return -1
    } if (arr[start] === target) {
        return start
    }
    if (arr[end] === target) {
        return end
    }
    return binarySearch(arr.slice(start, end), target, start = 0, end = arr.length - 1)
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };

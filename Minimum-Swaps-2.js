let swap = (a, f, s) => {
    [a[f], a[s]] = [a[s], a[f]];
    return a;
};
let minumumSwaps = arr => {
    let i = 0,
        j = 0;
    const max = arr.length - 1;
    let counter = 0;
    for (i = 0; i < max; i++) {
        let val = i + 1;
        if (val == arr[i]) continue;
        // we need to get the index of value i + 1;
        let finder;
        for (finder = i; finder < max; finder++) {
            if (arr[finder] == val) break;
        }
        // swap finder with i
        arr = swap(arr, i, finder);
        counter++;
        console.log(arr, counter);
    }
    return counter;
};

let array = [7, 6, 4, 5, 2, 3, 1];
console.log(array, 0);
minumumSwaps(array);

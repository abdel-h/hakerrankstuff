// input
/**
1
8
1 2 5 3 7 8 6 4
*/
// Output
/*
initial
1 2 3 4 5 6 7 8
4
*/

/**
1 2 5 3 4 7 8 6
1 2 3 5 4 7 8 6
1 2 3 4 5 7 8 6
1 2 3 4 5 7 6 8
1 2 3 4 5 6 7 8
*/

let minimumBribes = q => {
    console.log(sort(q));
};

let sort = arr => {
    let swap = true,
        counter = {},
        results = 0;
    while (swap) {
        swap = false;
        for (let i = 0; i < arr.length; i++) {
            if (results == 'Too chaotic') {
                break;
            }
            if (arr[i] > arr[i + 1]) {
                // increase or set counter for the value
                counter[arr[i]] =
                    counter[arr[i]] === undefined ? 1 : counter[arr[i]] + 1;
                // Check if it's chaotic
                if (counter[arr[i]] > 2) {
                    results = 'Too chaotic';
                    break;
                }
                // swap the values
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                // increase swaps
                results++;
                swap = true;
                break;
            }
        }
    }
    return results;
};

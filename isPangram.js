function isPangram(strings) {
    // Write your code here
    let alphabets = 'azertyuiopqsdfghjklmwxcvbn'.split('');
    let res = '';
    for (let string of strings) {
        let i = 0;
        for (let al of alphabets) {
            if (!string.includes(al)) {
                break;
            }
            i++;
        }
        res = i === alphabets.length ? res + '1' : res + '0';
    }
    return res;
}

isPangram(['we promptly judged antique ivory buckles for the next prize']);

function strFib(n) {

    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else if (!n) {
        return 'enter the number';
    }

    return strFib(n - 1) + strFib(n - 2) + strFib(n - 3) + 1;
    
}

console.log(strFib());
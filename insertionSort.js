function insertion(arr) {
    let newarr = [];
    let n = 0;
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        newarr[i] = arr[i];
        console.log(`pos ${newarr}`);

        j = newarr.length-1;
        while (j > 0) {
            if (newarr[j] < newarr[j - 1]) {
                n = newarr[j - 1];
                newarr[j - 1] = newarr[j];
                newarr[j] = n;
            };
            j--;
        };
    };
    return newarr;
}

console.log(insertion([2,1,15,1,3,789]));
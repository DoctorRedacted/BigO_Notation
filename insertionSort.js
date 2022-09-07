function insertion(arr) {
    let newarr = [];
    let n = 0;
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        newarr[i] = arr[i];
        console.log(`pos ${newarr}`);

        j = 0;
        while (j < newarr.length) {
            if (newarr[j] > newarr[i]) {
                n = newarr[i];
                newarr[i] = newarr[j];
                newarr[j] = n;
            };
            j++;
        };
    };
    return newarr;
}

console.log(insertion([13,2,3,8,1,5,2]));
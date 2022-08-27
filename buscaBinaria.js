function binario(number, n) {
    let max = number.length-1;
    let min = 0;
    let mid = Math.floor((max + min) /2);
    let cont = 1;
    
    for (let i = 0; i <= Math.floor(number.length/2); i++) {
        console.log(cont++)
        if (number[mid] == n) {
            console.log(`O item ${n} está na posição ${mid}`);
            break;
        }
        else if (number[mid] < n) {
            min = mid+1;
            mid = Math.floor((min + max) /2);
        }
        else if (number[mid] > n) {
            max = mid-1;
            mid = Math.floor((min + max) /2);
        };
    };
};

binario(['a','b','c','d','e','f','g', 'h'], 'h');

function binario(number, n) {
    let max = number.length;
    let min = 0;
    let mid = 0;
    
    for (let i = 1; i < Math.floor(number.length / 2); i++) {
        mid = Math.floor((max+min)/2)
        if (number[mid] == n) {
            console.log(`O programa rodou ${i} vezes e o item ${n} está na posição ${mid}`);
            break;
        } else if (n < number[mid]) {
            max = mid;
            mid = Math.floor((min + max) / 2);
            
        } else if (n > number[mid]) {
            min = mid;
            mid = Math.floor((min + max) / 2);
        };
    };
};

binario([1,2,3,4,5,6,7,8,9,10], 5);

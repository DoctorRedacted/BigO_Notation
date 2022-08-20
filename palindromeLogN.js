let promptSync = require('prompt-sync')();

function palindrome(word) {
    for (let i = word.length - 1; i >= Math.floor(word.length / 2); i--) {
        if (word[i] == word[word.length - i - 1]) continue;
        else return false;
    }
    return true;
}

function Main() {
    try {
        console.log('See if the word is a palindrome function');
        process.stdout.write('Insert a word: ');
        let r = promptSync();
        let sender = palindrome(r);
        console.log(sender);
    } catch (err) {
        console.log('An error ocurred during the process...')
        console.log(err.message);
    }
}
Main();
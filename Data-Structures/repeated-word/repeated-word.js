const HashTable = require('../hashtable/hashtable')

function findMostReaptedWord(str) {
    if (str) {
        let ht = new HashTable(50);
        console.log(str.split(' '));
        let arr = str.split(' ')
        var maxWord;
        for (let i = 0; i <= arr.length; i++) {
            if (ht.contains(arr[i].toUpperCase())) {
                maxWord = arr[i]
                break;
            } else {
                ht.add(arr[i].toUpperCase(), 1)
            }
        }
        return maxWord;

} else {
    return 'PLEASE ADD A ANY WORDS TO FIND THE MOST REAPETED WORD ';
}
}
// findMostReaptedWord("It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...")
module.exports = findMostReaptedWord;

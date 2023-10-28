function reverseWordsInSentence(sentence) {
    let words = [];
    let word = "";
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (char !== ' ' && i !== sentence.length - 1) {
            word = char + word; // Build the word in reverse order
        } else {
            if (i === sentence.length - 1) {
                word = char + word; // Include the last character
            }
            words.push(word);
            word = "";
        }
    }

    return words.join(' ');
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence: ", (input) => {
    const reversedSentence = reverseWordsInSentence(input);
    console.log("Reversed sentence: " + reversedSentence);
    rl.close();
});

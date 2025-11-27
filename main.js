import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

const characters = ["a", "b", "c", "#", "d", "#", "#", "c","w", "g", "#", "v"];
let result = [];

for (const char of characters) {
    if (char === "#") {
        result.pop();
    } else {
        result.push(char);
    }
}


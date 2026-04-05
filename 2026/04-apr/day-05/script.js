const sequence = [1, 2, 3, 4];

let startOfSequence = sequence[0];

for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] >= startOfSequence) console.log("True");
    else console.log("False");
}
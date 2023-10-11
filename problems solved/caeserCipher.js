function caesarCipher(str, shift) {
    let encrypted = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            encrypted += ' ';
        }
        else if (str.charCodeAt(i) + shift > 122) {
            encrypted += String.fromCharCode(str.charCodeAt(i) + shift - 26);
        }
        else {
            encrypted += String.fromCharCode(str.charCodeAt(i) + shift);
        }
    }
    return encrypted;
}
console.log(caesarCipher("xyz", 5));
// Expected output: "cde"

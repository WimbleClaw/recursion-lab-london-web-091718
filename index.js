// Code your solution here!

function printString(myString) {
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true;
    }
}

let reversed = ""
function reverseString(myString) {
    if (myString.length >= 1) {
        let mySubString = myString.substring(0, myString.length - 1);
        reversed += myString[myString.length - 1]
        reverseString(mySubString)
    } else {
        return myString
    }
    return reversed
}
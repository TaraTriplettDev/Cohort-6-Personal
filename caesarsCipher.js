// write a function which takes a ROT13 encoded string as input and returns a decoded string

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// We will get string and have to convert or rotate each letter 13 places
// need a control string of the alphabet
// need a cipher string ( the alphabet already shifted )
// need a variable to hold the solution
// need a loop
//  I need to find, the index of the each char in the string (on my control string) .indexOf()
//  I need to know what is at "that" index on the cipher string .charAt()

function rot13(str) {

    let alpha =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let cipher = "NOPQRSTUVWXYZABCDEFGHIJKLM";

    let result = "";

    for (let i = 0; i < str.length; i++) {
            // console.log("alpha", alpha.indexOf(str[i]))
            console.log("cipher", cipher.charAt(alpha.indexOf(str[i])), " = ", cipher.charAt(alpha.indexOf(str[i])))
            if (alpha.indexOf(str[i]) == -1) {
                result += str[i]
            } else {
                result += cipher.charAt(alpha.indexOf(str[i]))
                // console.log("rews", result)
            }
            

    }

    // console.log("rews", result)
    return result
}

console.log(rot13("SERR PBQR PNZC"));

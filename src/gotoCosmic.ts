import Cosmic from "./Components/Cosmic";
const numberToWords = require('number-to-words'); // I tried making an algorithm for this. LOL!!!
function gotoCosmic(num : number){
    let x;
    const word : string= numberToWords.toWords(num);
    if (num == 4){
        console.log(word);
        console.log("Cosmic")
    }
    else{
        console.log(word);
        gotoCosmic(word.length)
    }
}

export {gotoCosmic};
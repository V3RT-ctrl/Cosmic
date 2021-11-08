export {logName};
const numberNames = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
}

const units = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "nintety", "hundred", "thousand", "million", "billion", "trillion"]

function logName(number:number){ //Takes in a number, and converts it to a string.
  const numberString = number.toString();
  const numberLength = numberString.length;
  if (number in numberNames) {
    console.log(number);
  }
  else{
    for (let currentNum = numberLength; currentNum > 0; currentNum -= 1){
      console.log(currentNum)
      switch(currentNum){
        case 16:
          console.log("Quadrillion")
          break;
          case 13:
            console.log("Trillion")
            break;
            case 10:
          console.log("Billion")
          break;
          case 7:
            console.log("Million");
            break;
          case 4:
            console.log("Thousdand");
            break;
          case 3:
            console.log("Hundred");
            break;
        default:
          break;
      }
    }
  }
  
}
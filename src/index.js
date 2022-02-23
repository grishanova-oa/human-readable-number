module.exports = function toReadable (number) {

    const numOne = {
        0: "",
        1: " one",
        2: " two",
        3: " three",
        4: " four",
        5: " five",
        6: " six",
        7: " seven",
        8: " eight",
        9: " nine",
    }

    const numTen = {
        2: " twenty",
        3: " thirty",
        4: " forty",
        5: " fifty",
        6: " sixty",
        7: " seventy",
        8: " eighty",
        9: " ninety",
    }

    const numThousands = {
        10: " ten",
        11: " eleven",
        12: " twelve",
        13: " thirteen",
        14: " fourteen",
        15: " fifteen",
        16: " sixteen",
        17: " seventeen",
        18: " eighteen",
        19: " nineteen",
    }

    
    if (number === 0) return "zero";

    let numReadable = "";
    if (number / 100 >= 1)  numReadable = numReadable + numOne[Math.floor(number / 100)] + " hundred";
    let rest = number % 100;
    if (number % 100 >= 20) numReadable = numReadable + numTen[Math.floor(rest / 10)];
    if ((number % 100 < 20) && (number % 100 >= 10)) {
        numReadable = numReadable + numThousands[number % 100]; 
    } else if (number % 10 > 0) {
        numReadable = numReadable + numOne[number % 10];
    }
    return numReadable.trim();

  
}
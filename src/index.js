module.exports = function toReadable (number) {

    const numberOne = {
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

    const numberTen = {
        2: " twenty",
        3: " thirty",
        4: " forty",
        5: " fifty",
        6: " sixty",
        7: " seventy",
        8: " eighty",
        9: " ninety",
    }

    const number10 = {
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

    let readableNumber = "";
    if (number / 100 >= 1)  readableNumber = readableNumber + numberOne[Math.floor(number / 100)] + " hundred";
    let rest = number % 100;
    if (number % 100 >= 20) readableNumber = readableNumber + numberTen[Math.floor(rest / 10)];
    if ((number % 100 < 20) && (number % 100 >= 10)) {
        readableNumber = readableNumber + number10[number % 100]; 
    } else if (number % 10 > 0) {
        readableNumber = readableNumber + numberOne[number % 10];
    }
    return readableNumber.trim();

  
}
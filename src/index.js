const HUNDRED = " hundred ";

const NUMBER_MAP = {
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


module.exports = function toReadable(number) {
    var splitedArray = String(number).split("");

    if (splitedArray.length == 1) {
        return NUMBER_MAP[splitedArray[0]]
    }
    
    if (splitedArray.length == 2) {
        if (splitedArray[1] != 1 && splitedArray[1] == 0) {
            return NUMBER_MAP[splitedArray.join("")];
        }
        switch (splitedArray[0]) {
            case '1': return NUMBER_MAP[number];
            case '2': return NUMBER_MAP[20] + " " + NUMBER_MAP[splitedArray[1]];
            case '3': return NUMBER_MAP[30] + " " + NUMBER_MAP[splitedArray[1]];
            case '4': return NUMBER_MAP[40] + " " + NUMBER_MAP[splitedArray[1]];
            case '5': return NUMBER_MAP[50] + " " + NUMBER_MAP[splitedArray[1]];
            case '6': return NUMBER_MAP[60] + " " + NUMBER_MAP[splitedArray[1]];
            case '7': return NUMBER_MAP[70] + " " + NUMBER_MAP[splitedArray[1]];
            case '8': return NUMBER_MAP[80] + " " + NUMBER_MAP[splitedArray[1]];
            case '9': return NUMBER_MAP[90] + " " + NUMBER_MAP[splitedArray[1]];
        }
    }

    if (splitedArray.length == 3) {
        if (splitedArray[1] == 0 && splitedArray[2] == 0) {
            return NUMBER_MAP[splitedArray[0]] + " hundred";
        }

        if (splitedArray[1] == 0) {
            return NUMBER_MAP[splitedArray[0]] + HUNDRED + NUMBER_MAP[splitedArray[2]];
        }

        if (splitedArray[1] == 1 || splitedArray[2] == 0) {
            return NUMBER_MAP[splitedArray[0]] + HUNDRED + NUMBER_MAP[[splitedArray[1], splitedArray[2]].join("")];
        }

        return NUMBER_MAP[splitedArray[0]] + HUNDRED + NUMBER_MAP[splitedArray[1] + "0"] + " " + NUMBER_MAP[splitedArray[2]];
    }
}

let no = 0;
if (no > 0) {
    console.log('no is positive')
} else if (no < 0) {
    console.log('no is negative')
} else {
    console.log('no is zero')
}
let age = 17;
if (age >= 18) {
    console.log('you are eligible for voting')
} else {
    console.log('you are not eligible for voting')
}

let num1 = 10, num2 = 3, num3 = 35;
if (num1 >= num2) {
    if (num1 >= num3) {
        console.log('a is larger')
    } else {
        console.log('c is larger')
    }
} else {
    if (num2 >= num3) {
        console.log('b is larger')
    } else {
        console.log('c is larger')
    }
}

let day = 4;

switch (day) {
    case 1: console.log('monday'); break;
    case 2: console.log('tuesday'); break;
    case 3: console.log('wednesday'); break;
    case 4: console.log('thusday'); break;
    case 5: console.log('friday'); break;
    case 6: console.log('saturday'); break;
    case 7: console.log('sunday'); break;
    default: console.log('enter valid number')

}

let score = 99;
switch (true) {
    case (score >= 90): console.log('A'); break;
    case (score >= 80): console.log('B'); break;
    case (score >= 70): console.log('C'); break;
    case (score >= 60): console.log('D'); break;
    case (score >= 50): console.log('E'); break;
    case (score < 50): console.log('F'); break;
    default: console.log('enter valid score')
}

let n = 22;
(n % 2 == 0) ? console.log('even') : console.log('odd')

let year = 2000;
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log('leap yaer');
} else {
    console.log('not a leap ')
}
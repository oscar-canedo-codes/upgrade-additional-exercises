// 1.Crea una función que tome como parámetro un número. Si es entero, mostramos true / false

function isInterger(num) {
    return Number.isInteger(num);
}
console.log(isInterger(10.5));

//2. Crea una función que tome como parámetros dos strings. Si a contiene b, b + a. Si no, añade b al final. Por ejemplo:

//(“cheese”, “cake”) => output: “cheesecake”
/* (“Java”, “script”) => output: “JavaScript”
(“think, therefore I am”, “I”) => output: “I think, therefore I am” */

function wordsTogether(a,b) {
    if (a.includes(b)) {
        return b + " " + a;
    } else {
        return a + b;
    }
}
console.log(wordsTogether("cheese", "cake"));
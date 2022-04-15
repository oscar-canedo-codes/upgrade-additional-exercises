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


//3. Crea una función que tome como parámetro un número y lo divida en dígitos individuales dentro de un array. Tip: puedes usar el método split(); 

function toArray(num) {

        const newArray = String(num).split(''); 
        console.log(newArray);
        const arr = [];
        
        newArray.forEach((item) => {
        arr.push(Number(item));
        });
        console.log(arr); 
    };
    toArray(1234);
        
//3. Solución usando metódo .from

const str = '1234';

const res = Array.from(str, Number);
console.log(res);

//4. Crea una función que tome como parámetro un array. Si todos los elementos son iguales mostramos True, si no False

function areEqual(array) {

    for(let i = 1; i < array.length; i++) 
        if(array[0] === array[i]) {
        return true;
    }   else {
        return false;
    }
}

console.log(areEqual([true, true, true]));

//5. Dado un array de números, muestra por consola un array con orden descendente

function orderedNumbers(array) {
    return array.sort((a,b) => {b - a});
}
console.log(orderedNumbers([56, 0, 12, 4, 32]));

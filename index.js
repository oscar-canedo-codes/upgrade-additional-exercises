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

//6. Dado un array de strings, muestra por consola un array con orden alfabetico

const letters = ['b', 'c', 'd', 'a'];
console.log(letters.sort());

//7. Crea una función que tome como parámetro un array de strings y muestra el string más largo 

function longestStr(arr) {
   
    let longestWord = '';

    arr.forEach((word) => {

        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord; 
}
    
console.log(longestStr(['help', 'me', 'Oriana']));

//7. Solución usando metódo .for

 function longestString(arr){

/*      
    let lgth = 0;
    let longestWord;

        for (let i = 0; i < arr.length; i++) {

            if (arr[i].length > lgth) {
                lgth = arr[i].length;
                longestWord = arr[i];
            }
        };
        return longestWord; */

    //7. Solución usando metódo .sort  
    
    arr.sort ((a,b) => { b.length - a.length}); 

    }

console.log(longestStr(['help', 'me', 'oriana']));

//8.  Crea una función que tome 2 arrays como param, une ambos arrays, remueve valores duplicados y ordena los numeros de formas ascendente

function joinArr(arr1, arr2) {
    
    // Metódo .concat
    
    const newArr = arr1.concat(arr2);
    console.log(newArr); 

    // Metódo Spread Operator 
    
    const newArray =[...arr1, ...arr2];
    console.log(newArray);

    /* .filter() -> Crear un nuevo array con todos los elementos de un array base que cumplan con una condición */

    return newArray.sort().filter(function(item, index, array) {
        
        return !index || item != array[index - 1];
    });

 }
 console.log(joinArr([1, 2, 3], [1, 2, 3, 4, 5, 6]));                

 //9. Crea una función que tome un objecto como parámetro remueve la propiedad coutnry y su valor

const myObj1 = { 
    
    city: 'Sacramento', 
    state: 'California',
    country: 'USA',
    continent: 'North America' 

};

const myObj2 = { 
    
    city: 'Madrid', 
    state: 'Madrid',
    country: 'Spain',
    continent: 'Europe' 

};

function deleteKey(object){

    delete object.country;
    console.log(object);
}
deleteKey(myObj2);
deleteKey(myObj1);

//10. Mostrar el valor de key = city;

console.log(myObj1.city);

//11. Reemplaza strings vacios por null

const lettersObj = { a: "", b:  "b", c: " ", d: "d" };

function replaceKey(obj) {

    for (const key in obj) { 

        if (obj[key] === "" ||  obj[key] === " "){
            obj[key] = null;
        }
    }
    console.log(obj);
}
replaceKey(lettersObj);

//12. Crea una función que tome como parameteros un array de objectos y un string. Agrega a cada uno de los objetos la propiedad “continent” que tome como valor el parámetro de string. Muestra por consola el nuevo array.


function addKey(arr, newValue) {

    const newKey = 'continent';

    for (let i = 0; i <arr.length; i++) {
        arr[i][newKey] = newValue;
    };
    console.log(arr);
}

addKey(
    [
        {city: 'Stockholm', country: 'Sweden' },
        {city: 'Paris', country: 'France' },
    ],
 "Europe",
);

// Objectos Advanzados

const character = {

    name: {
        realName: 'Darth Vader',
        aka: 'Anakin Skywalker',
    },
    planet: 'Tatooine',
    power: 90,
    children: ['Luke', 'Leia'],
    phrase: function () {
        console.log(this.name.realName);
    },
};

console.log(character.name);
character.phrase();

// Destructuring

let { name, children } = character;

console.log(name.realName, name.aka);
console.log(children[0], children[1]);

let { realName, aka } = character.name;

console.log(realName);
console.log(aka);
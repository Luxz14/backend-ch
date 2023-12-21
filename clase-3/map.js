//Hacemos funcion de Map.

let numbersArray = [1, 2, 3, 4, 5];

function myMap(array, callback) {
    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        let newValue = callback(array[i]);

        newArray.push(newValue)
    }
    return newArray;
}


let newArray = myMap(numbersArray, number => number * 2 );

console.log(newArray);
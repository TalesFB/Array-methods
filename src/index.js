function sortArray(array, direction = "cres"){
    return array.sort((a,b)=> direction === "cres" ? a - b : b - a );
}

function arrayCount(array, item){
    return array.reduce((acum, value)=> value === item ? acum + 1 : acum ,0);
}

function getMiddleLetters(string){
    const comprimento = string.length;
    if(comprimento%2 === 0) return (comprimento + "par");
    else return (comprimento + "impar");
}

const a = [1, 2, 2, 2, 3, 4, 5];

// console.log(sortArray(a, "dec"));
// console.log(sortArray(a));
// console.log(arrayCount(a,2));
console.log(getMiddleLetters("Tales Ferreira"));
const meuArray =  [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){   // arr no JV significa array
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));

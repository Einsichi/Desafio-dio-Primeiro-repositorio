function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;      // divisão por 2 é igual a 0?
}

const meuArray = [1, 23 ,44 , 55, 656, 675654, 4];  //esses dados que serão divididos

console.log(filtraPares(meuArray));     // se sim vai mostrar aqui
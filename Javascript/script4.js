const maca = {  //declarando um objeto
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr , thisArg){      //essa função chamada mapComThis, recebeu o array chamado arr
    return arr.map(function(item){      //função map
       return item * this.value;   // aqui é para mostrar o resuldo da operação
    }, thisArg); //argumento para o thisArg que esta na linha 1 funcionar
}

const nums = [1, 2];        //array

console.log('this -> maçã ', mapComThis(nums, maca));       //ver o resultado da operação utilizando o array "nums"
            //quando this é maçã
console.log('this -> laranja ', mapComThis(nums, laranja));
            //quando this é laranja



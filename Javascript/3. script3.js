function validaArray(arr, num){
    try{

    if(!arr && !num) throw new ReferenceError("Envie os parametros");
    // Se não existe um array e não existe um numero, então lançamos um erro

    if(!typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
    // Se o array não for igual a objeto então lançamos um erro

    if(!typeof num !== 'number') throw new TypeError("Array precisa ser do tipo number");
    // Se a entrada for diferente de number então lançamos um erro

    if(arr.lenght !== num) throw new RangeError("Tamnanho é invalido!");
    // Se o tamanho do arry for diferente do numero de number então lançamos um erro

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){ // Se o erro é uma instancia de ReferenceError  "e" significa erro
            console.log("Este erro é um ReferenceError!")
            console.log(e.message)
            
        }else if(e instanceof TypeError){
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        }else if(e instanceof RangeError){
            console.log("Este erro é um RangeError!")
            console.log(e.message)
        }else{
            console.log("Tipo de erro não esperado" + e);
        }
        

    }
    
}

console.log(validaArray());
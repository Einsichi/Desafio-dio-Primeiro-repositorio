function mapSemThis(arr){       //criação da função
   return arr.map(function(item){      //função map
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));

console.log(nums);
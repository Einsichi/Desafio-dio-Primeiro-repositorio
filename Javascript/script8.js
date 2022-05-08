const lista = [                         //lista
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponinel = 100;            // declaração de objeto

function calculaSaldo(saldoDisponivel ,lista){   //função Reduce
    return lista.reduce(function(prev, current, index){  // função Reduce
        console.log('rodada', index + 1);   // especie de laço de repetição
        console.log({prev});        // vai mostrar o valor do acumulador
        console.log({current});     //vai mostrar o valor atual
        return prev - current.preco;    // operação matematica
    }, saldoDisponivel);

}


console.log(calculaSaldo(saldoDisponinel, lista));
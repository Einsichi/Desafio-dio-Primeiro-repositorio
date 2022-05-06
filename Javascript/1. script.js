function getAdmins(map){    // a função getAdmins vai receber um map
    let admins = [];      // um array auxiliar admins  
    for([key, value] of map){  // Para cada entrada de key e value do map
        if(value === 'Admin'){ // e o valor for igual a admin
            admins.push(key)   //key é o nome da pessoa, push e jogar. Ou seja, os admins serão mostrados no key
        }

    }
    return admins;      // retornando o array admins
}

const usuarios = new Map(); // criação do map

usuarios.set('Luiz', 'Admin');
usuarios.set('Lucas', 'Admin');
usuarios.set('Lua', 'User');
usuarios.set('Luna', 'Admin');

console.log(getAdmins(usuarios));  // vai mostrar o resultado esperado.
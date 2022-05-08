const BASE_URL = 'https://thatcopy.pw/catapi/rest/';  // fazendo uma requisição e para não usar a mesma string o tempo todo, utilizamos uma variavel
const catBtn = document.getElementById('change-cat');


const getCats = async () =>{             //declarando uma FUNÇÃO e classificandoá como async
    try{
    const data = await fetch(BASE_URL);  
    const json = await data.json();     //convertendo para .jason
    return json.webpurl; 

    }catch (e){
        console.log(e.message); // mostrar a messagem de erro caso tenha
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();

} 

catBtn.addEventListener('click',loadImg); // para o botão funcionar

loadImg();     // inicia sempre com uma imagem
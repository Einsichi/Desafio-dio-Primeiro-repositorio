function changeMode(){
         changeClasses();
         changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);

}

function changeText(){                          // para mudar o texto especifico, no caso, o do botão
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModeClass)){   //se, lista de classe, botões, contém, dark-mode
    button.innerHTML = lightMode;  
    h1.innerHTML = darkMode + ' ON ';
    return;
    }

    button.innerHTML =  darkMode;  
    h1.innerHTML = lightMode + ' ON ';
    return;

}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];  //TagName tem arry, por isso o [0]


button.addEventListener('click',changeMode);
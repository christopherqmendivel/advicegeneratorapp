// Variables
const container = document.querySelector('.container');

// Event
window.addEventListener('DOMContentLoaded', consultarAPI);




async function consultarAPI() {

    const url = 'https://api.adviceslip.com/advice';

    // fetch(url)
    //     .then(res => res.json())
    //     .then(result => {
    //         showGenerator(result);
    //     });

    try {
        const res = await fetch(url);
        const result = await res.json();
        cleanHTML();
        showGenerator(result);

    } catch (error) {
        console.log(error);
    }
}

function showGenerator(result) {

    const {
        slip: {
            id,
            advice
        }
    } = result;

    
    // Variables
    let card = document.createElement('div');
    let card_body = document.createElement('div');
    let h4 = document.createElement('h4');
    let parr = document.createElement('p');
    let img = document.createElement('img');
    let card_footer = document.createElement('div');
    let img_cube = document.createElement('img');

    card.classList.add('card');
    card_body.classList.add('card-body');
    h4.classList.add('card-title-id');
    parr.classList.add('card-text');
    card_footer.classList.add('card-footer');
    img_cube.classList.add('cube-img');

    img.src = './images/pattern-divider-mobile.svg';
    img_cube.src = './images/icon-dice.svg';

    h4.innerHTML = `advice #${id}`;
    parr.innerHTML = `${advice}`;
    card_footer.innerHTML = `<div class=cube></div>`;

    card.appendChild(card_body);
    card_body.appendChild(h4);
    card_body.appendChild(parr);
    card_body.appendChild(img);
    card.appendChild(card_footer);
    card_footer.children[0].appendChild(img_cube);
    container.appendChild(card);

    const cube = document.querySelector('.cube-img');

    cube.addEventListener('click', consultarAPI);

}


function cleanHTML() {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
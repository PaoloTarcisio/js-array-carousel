const CarouselContainer = document.getElementById('my-carousel-container');
const PreviousButton = document.querySelector('#previous-button');
const NextButton = document.querySelector('#next-button');
let contatore = 0;


// Creo un Array con le immagini all'interno

ImgArray = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
];



//Creo un ciclo for dove per ogni immagine nell'array la aggiungo in pagina 

// for (let contatore = 0; contatore < ImgArray.length; contatore++) {
//     console.log ("numero", ImgArray[contatore]);

//     if (contatore == 0) {
//         CarouselContainer.innerHTML += `
//         <div class="item active">
//             <img src="${ImgArray[contatore]}" alt="">
//         </div>`
//     }

//     else {
//         CarouselContainer.innerHTML += `
//         <div class="item">
//             <img src="${ImgArray[contatore]}" alt="">
//         </div>`
//     }
// }


for (let contatore = 0; contatore < ImgArray.length; contatore++) {
    console.log ("numero", ImgArray[contatore], 'contatore', contatore);
    let image = ImgArray[contatore];

    let NewImg = document.createElement('img');
    NewImg.className = 'hidden';
    NewImg.src = `${ImgArray[contatore]}`;
    NewImg.id = contatore                       //do ad ogni immagine l'id corrispondente alla posizione nell'array
    CarouselContainer.append(NewImg);

}

let active = document.getElementById(contatore)         //richiamo l'immagine tramite l'id
active.className = 'active';
/* next Button */

NextButton.addEventListener('click', function() {
    const attiva = document.getElementById(contatore);
    const prossima = document.getElementById(contatore + 1);
    attiva.classList.remove('active');
    attiva.classList.add('hidden');

    console.log('contatore: ', contatore);
    console.log('attiva Next: ', attiva.classList);
    
    contatore++;

    prossima.classList.remove('hidden')
    prossima.classList.add('active');
    console.log('successiva: ', contatore, prossima.classList);
    
});


PreviousButton.addEventListener('click', function() {
    const attiva = document.getElementById(contatore);
    const precedente = document.getElementById(contatore - 1);
    attiva.classList.remove('active');
    attiva.classList.add('hidden');

    //console.log('contatore: ', contatore);
    console.log('attiva Post: ', attiva.classList);
    
    contatore--;
    precedente.classList.remove('hidden')
    precedente.classList.add('active');
    console.log('precedente: ', contatore, precedente.classList);

});
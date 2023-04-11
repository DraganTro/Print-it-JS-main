const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Récupération des éléments pour le slider
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const bannerTagLine = document.querySelector('.banner-img + p');
const dotsContainer = document.querySelector('.dots');

// Initialisation du slider avec la première slide
let currentIndex = 0;
// Appel de la fonction changeSlide avec l'index de la première image
changeSlide(currentIndex);

// Fonction pour changer l'image, la tagline et le point (mise à jour des éléments à afficher)
function changeSlide(index) {
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerTagLine.innerHTML = slides[index].tagLine;
    updateDots(index);
}

// Création des points pour chaque image dans le slider
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
    // Ajout de la classe "dot_selected" pour le premier point
    if (i === 0) {
        dot.classList.add('dot_selected');
    }
    // Ajout d'un gestionnaire d'événements pour les points
    dot.addEventListener('click', () => {
        currentIndex = i;
        changeSlide(currentIndex);
    });
}

// Ajout des gestionnaires d'événements pour les flèches
arrowLeft.addEventListener('click', () => {
	console.log('Clic gauche')
// Utilisation de l'opérateur modulo pour assurer que la variable currentIndex reste toujours comprise entre 0 et le nombre total de slides moins un
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    changeSlide(currentIndex);
});

arrowRight.addEventListener('click', () => {
	console.log('Clic droit');
    currentIndex = (currentIndex + 1) % slides.length;
    changeSlide(currentIndex);
});

// Fonction pour mettre à jour la classe des points
function updateDots(index) {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

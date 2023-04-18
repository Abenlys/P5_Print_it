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
]


// Création des 2 constantes arrow pour dire quel éléments chercher dans le HTML
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");


// Pour compter le nb d'objet dans le tableau slides
let nbDot = slides.length;
console.log(nbDot);


function genererDot () {
	for (let i = 0; i < slides.length; i++) {
		console.log(slides.length);
		// Récupération du conteneur pour les dot qu'on mettra dedans
		const dotsContainer = document.querySelector(".dots");
		if (dotsContainer === null) {
			console.log("ca marche pas");
		}else {
			console.log("l'élément a été trouvé");
		};
		// Création d'une balise dédiée à un dot
		const dotElement = document.createElement("div");
		dotElement.classList.add("dot");
		// On rattache la balise dot à la div dots
		dotsContainer.appendChild(dotElement);
		console.log(i);
	}
	
}
// Il faut appeler la fonction sinon cela ne fonctionne pas
genererDot();


// Maintenant, il faut gérer le dot_selected 
// Slide 0 = Dot 0

//Ajoute des variables currentSlide et maxSlides
let currentSlide = 0
const maxSlides = slides.length

//Récupération des éléments DOM nécessaires
const bannerImg = document.querySelector('.banner-img')
const tagline = document.querySelector('#banner p')
const dots = document.querySelectorAll('.dot')


//Fonction pour mettre à jour la bannière avec données de la slide actuelle
function updateBanner() {
	console.log('updateBanner() called')
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	console.log(`.assets/images/slideshow/${slides[currentSlide].image}`)
	tagline.innerHTML = slides[currentSlide].tagLine
	//Enlever la classe "dot_selected" de toutes les balises div.dot
	dots.forEach(dot => {
		dot.classList.remove('dot_selected')
	});
	//Ajouter la classe 'dot_selected' à la balise div correspondante
	dots[currentSlide].classList.add('dot_selected')
}
//Ajout des écouteurs d'évènements pour les flèches gauche et droite
arrowRight.addEventListener('click', nextSlide)
arrowLeft.addEventListener('click', prevSlide)
updateBanner();

//Fonction pour changer de slide vers la droite
function nextSlide() {
	console.log("prevSlide() called")
	currentSlide++
	if (currentSlide >= maxSlides) {
		currentSlide = 0
	}
	console.log('Flèche droite cliquée')
	updateBanner();
}


//Fonction pour changer de slide vers la gauche
function prevSlide() {
	currentSlide--
	if (currentSlide < 0) {
		currentSlide = maxSlides - 1
	}
	console.log('Flèche gauche cliquée')
	updateBanner();
}





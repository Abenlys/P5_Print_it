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

//On ajoute un eventlistener pour écouter les clics pour chacune des arrows
arrowLeft.addEventListener("click", function() {
	console.log('Flèche gauche cliquée');
});

arrowRight.addEventListener("click", function() {
	console.log('Flèche droite cliquée');
});

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
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
const bannerDiv = document.getElementById("banner");
const firstImage = document.querySelector(".banner-img");
const bulletPointsContainer = document.querySelector(".dots");
const tagLineImg = document.querySelector("#banner p")

//recup tous les enfants de la div
const children = bannerDiv.children;

//Pour suivre la diapo actuelle	
let currentSlide = 0;

//Etape 1 : les flèches ! 

//introduction des flèches (const parce que ca ne bouge pas!)
const adress_img_1 = "./assets/images/arrow_left.png"
const adress_img_2 = "./assets/images/arrow_right.png"

//creation de la première flèche
const leftArrow = document.createElement("img");
leftArrow.setAttribute("alt","image précedente");
leftArrow.classList.add("arrow", "arrow_left");
leftArrow.src = adress_img_1;
leftArrow.style.zIndex=200

//creation de la deuxième flèche
const rightArrow = document.createElement("img");
rightArrow.setAttribute("alt","image suivante");
rightArrow.classList.add ("arrow", "arrow_right");
rightArrow.src = adress_img_2;
rightArrow.style.zIndex=200

//placement de la première flèche là où elle doit être dans le DOM
//const bannerDiv = document.getElementById("banner"); //recuperation du parent (ligne25)
bannerDiv.appendChild(leftArrow);//definition de l'enfant 1

//placement de la deuxième flèche là où elle doit être
bannerDiv.appendChild(rightArrow); //définition de l'enfant 2

//Etape 2 : Bullet points

//récupération du conteneur parent
//Compter le nombre d'objets et le stocker dans une variable
let nbSlides=slides.length;

//boucle de création de bullet points pour avoir le nombre necessaire
for (let s = 0; s < nbSlides; s++){
	let bulletPoint = document.createElement("i");//creation d'un element i
	bulletPoint.classList.add ("dot"); //dont la class est .dot
	bulletPointsContainer.appendChild(bulletPoint);
}
//Objectif de la fonction : s'assurer que le bon nombre de diapo est pris en compte

	function setSelectedSlide (slideNumber){ //mise en place d'une fonction 

		if (slideNumber<0 || slideNumber>=nbSlides){ //si inférieur à 0 ou sup à 3 alors return
			return
		}
		bulletPoints[currentSlide].classList.remove('dot_selected');//enlever le .dot_selected
		bulletPoints[slideNumber].classList.add('dot_selected');//ajouter le .dot_selected
		currentSlide=slideNumber

		//const slideImage = bannerDiv.querySelector(".banner-img");
	firstImage.src="./assets/images/slideshow/" + slides[slideNumber].image;

	tagLineImg.innerHTML=slides[slideNumber].tagLine;
	
	}
//recuperer la liste de tous les bulletpoints
	const bulletPoints = document.querySelectorAll(".dot") 

	setSelectedSlide(0)
//Etape 3 : Ajoutez des Event Listeners sur les flèches 

	const baliseLeftArrow = document.querySelector(".arrow_left");
	const baliseRightArrow = document.querySelector(".arrow_right");

baliseLeftArrow.addEventListener("click", function(){
	
	setSelectedSlide ((currentSlide - 1 + nbSlides) % nbSlides); //s'assurer qu'on peut changer de slide

});

baliseRightArrow.addEventListener("click", function(){
	
	setSelectedSlide((currentSlide + 1) % nbSlides);
	
	
});






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
//Etape 1 : insérer les flèches ! 

//introduction des flèches
let adress_img_1 = "./assets/images/arrow_left.png"
let adress_img_2 = "./assets/images/arrow_right.png"

//creation de la première flèche
let leftArrow = document.createElement("img");
leftArrow.setAttribute("alt","image précedente");
leftArrow.classList="arrow arrow_left";
leftArrow.src=adress_img_1;

//creation de la deuxième flèche
let rightArrow = document.createElement("img");
rightArrow.setAttribute("alt","image suivante");
rightArrow.classList="arrow arrow_right";
rightArrow.src=adress_img_2;

//placement de la première flèche là où elle doit être
let bannerDiv = document.getElementById("banner");
bannerDiv.appendChild(leftArrow);
//placement de la deuxième flèche là où elle doit être
bannerDiv.appendChild(rightArrow);


//Etape 2 : Ajoutez des Event Listeners sur les flèches 
let baliseArrow = document.querySelector(".arrow");
console.log(baliseArrow);


let container = document.querySelector('#container');
let grosBouton = document.querySelector("#afficherContainer");
let recherche = document.querySelector('#recherchegoogle');//bouton rechercher google
let motRechercher = document.querySelector("#inputrech"); //champ input
let modalContent = document.querySelector('#modalContent');
//let pupup = alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
window.onload = function(){
	container.style.display="none";
	setTimeout(function(){
		modalContent.style.display = "none";
	},10000);
};

grosBouton.addEventListener("click",function(){
	grosBouton.style.display="none";
	container.style.display="inline-block";

});


recherche.addEventListener("click",function(){
	let valeurMotRechercher = motRechercher.value;
	let motAvecPlus = valeurMotRechercher.replace(" ", "+");
	//REDIRECTION
	document.location.href=`https://www.google.fr/#q=${motAvecPlus}`;

});
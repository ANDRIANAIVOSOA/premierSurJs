
window.onload = function(){
	//alert("Tu va donner la taille de la grille");

};

let grandeGrille=document.querySelector("#grandeGrille");

let taille=document.querySelector("#taille");
let generer=document.querySelector("#generer");
const tailleParDefaut = 500;
let width=0;
let height=0;

generer.addEventListener("click",function(){
	grandeGrille.innerHTML ="";
	let tailleValeur=taille.value;
	if(tailleValeur<=10){
			width= tailleParDefaut/tailleValeur;
		height=width;
		//grandeGrille.innerHTML += '<div class="petiteGrille"></div>'
		//alert(width+"x"+height);
		for (let i = 1; i <= tailleValeur; i++) {
			for (let j = 1; j <= tailleValeur; j++) {
				grandeGrille.innerHTML += '<div id='+`petiteGrille${i}${j}`+'></div>';
				document.querySelector(`#petiteGrille${i}${j}`).style.width= `${width}px`;
				document.querySelector(`#petiteGrille${i}${j}`).style.height=`${height}px`;
				document.querySelector(`#petiteGrille${i}${j}`).style.display= "inline-block";
				document.querySelector(`#petiteGrille${i}${j}`).style.marginLeft= "-4px";
				document.querySelector(`#petiteGrille${i}${j}`).style.background= "blue";
				document.querySelector(`#petiteGrille${i}${j}`).style.borderLeft= "1px solid black";
			}
		}
	}else{
		alert("Nombre entre 1 et 10 svp!");
	}

	
});
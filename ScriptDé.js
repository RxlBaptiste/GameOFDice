//Le Dé
var Dé = [1, 2, 3, 4, 5, 6];

//Lancement du Dé
var btn = document.querySelector('input');
var txt = document.querySelector('p');


//Aléatoire du Dé
function updateBtn() {

  btn.addEventListener('click', this);

  let LancerDé = (Math.floor(Math.random()*Dé.length)+1);
  if (btn.value === 'Lancer le dé') {
    btn.value = 'Relancer le dé';
    txt.textContent = LancerDé;
    } else {
    btn.value = 'Relancer le dé';
    txt.textContent = LancerDé;
  }

  //Affichage De l'image du dé
  var FaceDé = document.querySelector('#FaceDé');

  if (LancerDé === 1) {
    FaceDé.setAttribute("src", "ImagesDé/Face1.jpg");
  }else if (LancerDé === 2) {
    FaceDé.setAttribute("src", "ImagesDé/Face2.jpg");
  }else if (LancerDé === 3) {
    FaceDé.setAttribute("src", "ImagesDé/Face3.jpg");
  }else if (LancerDé === 4) {
    FaceDé.setAttribute("src", "ImagesDé/Face4.jpg");
  }else if (LancerDé === 5) {
    FaceDé.setAttribute("src", "ImagesDé/Face5.jpg");
  }else if (LancerDé === 6) {
    FaceDé.setAttribute("src", "ImagesDé/Face6.jpg");
  }else{
    FaceDé.removeAttribute("src");
  };
};

//AJOUT JOUEUR 1

//Ajoute du tableau du joueur 1
var TableauJ1 = [];
var RoundJ1 = document.querySelector ("#J1");

function tableauJ1() {
  
  //Ajoute le lancer du dé dans le tableau du joueur
  PushtableauJ1 = TableauJ1.push(txt.textContent);  
  
  //Creer un nouveau tableau en Int au lieu d'un string
  var ValueNumberJ1 = [];
  length = TableauJ1.length;
  for (var i = 0; i < length; i++)
  ValueNumberJ1.push(parseInt(TableauJ1[i]));

  //Somme des valeurs
  var ValueInitial = 0;
  var SommeValueJ1 = ValueNumberJ1.reduce(
    (previousValue, currentValue) => 
    previousValue + currentValue,
    ValueInitial
  );
  
  //Affichage du résultat
  RoundJ1.textContent = SommeValueJ1;
}

//AJOUT JOUEUR 2

//Ajoute du tableau du joueur 2
var TableauJ2 = [];
var RoundJ2 = document.querySelector ('#J2');

function tableauJ2() {

  //Ajoute le lancer du dé dans le tableau du joueur
  PushtableauJ2 = TableauJ2.push(txt.textContent);

  //Creer un nouveau tableau en Int au lieu d'un string
  var ValueNumberJ2 = [];
  length = TableauJ2.length;
  for (var i = 0; i < length; i++)
  ValueNumberJ2.push(parseInt(TableauJ2[i]));
  
  //Somme des valeurs
  var ValueInitial = 0;
  var SommeValueJ2 = ValueNumberJ2.reduce(
    (previousValue, currentValue) => 
    previousValue + currentValue,
    ValueInitial
  );
  
  //Affichage du résultat
  RoundJ2.textContent = SommeValueJ2;
}

//Passer du joueur 1 au J2 a chaque 1 tirer par le joueur

//Variable Du 1 qui est tirer
var isOneToExit = true;

//Passer du Joueur 2 au Joueur 1
function SwitchJ2ToJ1() {

  //Si Il y 1 ET que c'est faux
  if (txt.textContent === '1' && isOneToExit === false) {
    isOneToExit = true;

    if (isOneToExit === true) {
      TableauJ1.splice(0, length);
      TableauJ2.splice(0, length);
      txt.textContent = 0;
      tableauJ1();
    }
  }else{
    tableauJ2();
  };
}

// Passer du Joueur 1 au Joueur 2
function SwitchJ1ToJ2() {

  //Si Il y 1 ET que c'est vrai
  if (txt.textContent === '1' && isOneToExit === true) {
    isOneToExit = false;

    if (isOneToExit === false) {
      TableauJ1.splice(0, length);
      TableauJ2.splice(0, length);
      txt.textContent = 0;
      tableauJ2();
    }
  }else{
    tableauJ1();
  };
}

//Fonction utiliser sur le boutton du lancer du dé
function J1AndJ2() {

  updateBtn();
  if (isOneToExit === false) {
    SwitchJ2ToJ1();
    RoundJ1.textContent = 0;
  }else if (isOneToExit === true) {
    SwitchJ1ToJ2();
    RoundJ2.textContent = 0;
  };
  PlayerPlay();
}

//Savoir qui joue en fonction de la couleur du Background

function PlayerPlay() {

  var BackgroundColorJ1 = document.querySelector("body");

  if(isOneToExit === false || turnPlayer1 === false) {
    BackgroundColorJ1.removeAttribute("id");
  }else if(isOneToExit === true || turnPlayer1 === true) {
    BackgroundColorJ1.setAttribute("id","ColorJ1");
  }
}

//Creation du boutton Hold Avec la "sauvegarde" des points

var turnPlayer1 = true;

//Pour le Joueur 1

var ScoreJ1 = document.querySelector ('#GlobalJ1');
var TableauSommeGlobalJ2 = [];

function HoldJ1() {

  //Premier tableau qui prend la valeur du Tableau J1 en les passant en un nombre INT
  var TableauValueGlobalJ1 = [];
  length = TableauJ1.length;
  for (var i = 0; i < length; i++)
  TableauValueGlobalJ1.push(parseInt(TableauJ1[i]));

  //Somme des valeurs du TableauValue
  var GlobalJ1Initial = 0;
  var FirstSommeGlobalJ1 = TableauValueGlobalJ1.reduce(
    (previousValue, currentValue) => 
    previousValue + currentValue,
    GlobalJ1Initial
  );
  
  //Affichage de la somme 
  GlobalJ1.textContent = FirstSommeGlobalJ1;
 
  //si la somme est égale a 0
  if (FirstSommeGlobalJ1 > 0) {
    txt.textContent = 0;
    TableauJ1.splice(0,length);
    isOneToExit = false;
  }

 //Ajout d'un nouveau tableau
  
 //Nouveau tableau des sommes 
  TableauSommeGlobalJ1.push(ScoreJ1.textContent);

  //Tableau des somme converti en INT
  var TableauSommeGlobalJ1INT = [];
  length = TableauSommeGlobalJ1.length;
  for(var i = 0; i < length; i++)
  TableauSommeGlobalJ1INT.push(parseInt(TableauSommeGlobalJ1[i]));

  //Addition des nombre du tableau précédent
  var GlobalSommeJ1Initial = 0;
  var SecondSommeGlobalJ1 = TableauSommeGlobalJ1INT.reduce(
    (previousValue, currentValue) =>
    previousValue + currentValue,
    GlobalSommeJ1Initial
  );

  //Affichage du score total
  GlobalJ1.textContent = SecondSommeGlobalJ1;

  //si le score global est égale a 100
  if(SecondSommeGlobalJ1 >= 100) {
    location.reload();
    alert('Le Joueur 1 à gagner la partie avec ' + SecondSommeGlobalJ1 + 'points.');
  }
  turnPlayer1 = false;
}


//pour le Joueur 2

var ScoreJ2 = document.querySelector ('#GlobalJ2');
var TableauSommeGlobalJ1 = [];

function HoldJ2() {

  //Premier tableau qui prend la valeur du Tableau J2 en les passant en un nombre INT
  var TableauValueGlobalJ2 = [];
  length = TableauJ2.length;
  for (var i = 0; i < length; i++)
  TableauValueGlobalJ2.push(parseInt(TableauJ2[i]));
  
  //Somme des valeurs du tableauValue
  var GlobalJ2Initial = 0;
  var FirstSommeGlobalJ2 = TableauValueGlobalJ2.reduce(
    (previousValue, currentValue) => 
    previousValue + currentValue,
    GlobalJ2Initial
  );

  //Affichage de la somme 
  GlobalJ2.textContent = FirstSommeGlobalJ2;
    
  //si la somme est égale a 0
  if (FirstSommeGlobalJ2 > 0) {
    txt.textContent = 0;
    TableauJ2.splice(0,length);
    isOneToExit = true;
  }
  
 //Ajout d'un nouveau tableau pour les additionner
  
 //Nouveau tableau des sommes 
 TableauSommeGlobalJ2.push(ScoreJ2.textContent);

  //Tableau des somme converti en INT
 var TableauSommeGlobalJ2INT = [];
 length = TableauSommeGlobalJ2.length;
 for(var i = 0; i < length; i++)
 TableauSommeGlobalJ2INT.push(parseInt(TableauSommeGlobalJ2[i]));

  //Addition des nombre du tableau précédent
 var GlobalSommeJ2Initial = 0;
 var SecondSommeGlobalJ2 = TableauSommeGlobalJ2INT.reduce(
   (previousValue, currentValue) =>
   previousValue + currentValue,
   GlobalSommeJ2Initial
 );
 
  //Affichage du score total
 GlobalJ2.textContent = SecondSommeGlobalJ2;

  //si le score global est égale a 100
  if(SecondSommeGlobalJ2 >= 100) {
    location.reload();
    alert('Le Joueur 2 à gagner la partie avec ' + SecondSommeGlobalJ2 + 'points.');
  }
  turnPlayer1 = true;
}

//Ajout Function Hold()
function Holds() {
  HoldJ1();
  if(turnPlayer1 === false) {
    HoldJ2();
  };
  PlayerPlay();
};

//Boutton New Game
function Reload() {
  location.reload();
}
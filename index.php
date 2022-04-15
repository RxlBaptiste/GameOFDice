<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="Style.css" rel="stylesheet" >
    <title>Jeu Du Dé</title>
</head>

<body id="ColorJ1" class="ColorJ2" >
    
    <!--PopUp des règles du jeu et des prénoms-->
    <dialog class="PopUp" open>
        <div>
            <p>
                <strong>Règles : </strong><br><br>
                Chaque joueur possède un score temporaire (ROUND) et un score global.<br>
                À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. <br>
                Le résultat d’un lancer est ajouté au ROUND. <br><br>
                Lors de son tour, le joueur peut décider à tout moment de : <br><br>
                - Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL.<br>
                Ce sera alors le tour de l’autre joueur.<br><br>
                - Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour. <br>
                Le premier joueur qui atteint les 100 points sur global gagne le jeu.
            </p>
        </div>
        <h2>Prénom des Joueurs : </h2>
        <form class="PopUp" method="GET" action="jeu.php" enctype="multipart/form-data">
            <div>
                <label>
                    <strong>Joueur 1 :</strong>
                    <input id="Joueur N°1" name="Player1" placeholder="Player 1" type="text" required>
                </label>
            </div>
            <br>
            <div>
                <label>
                    <strong>Joueur 2 :</strong>
                    <input id="Joueur N°2" name="Player2" placeholder="Player 2" type="text" required> 
                </label>
            </div>
            <br>
            <div>
                <button type="submit">JOUER</button>
            </div>
        </form>
    </dialog>

    <!--Joueur 1 -->
    
    <!--Valeur du Dé non afficher sur la page-->
    <p class="Hidden" id="Value"></p>

    <div class="col-1 Joueur1">
        <div class="Global">
            <span name="J1" class="PlayerToPlay" id="PlayJ1">
                Player 1
            </span>  
            <p id="GlobalJ1">0</p>
        </div>
        <br>
        <div class="current">
            Round
            <p id="J1">0</p> 
        </div>
    </div>

    <div class="col-1 container">
        <!--Bouton New Game-->
        <button id="NewGame" type="button" onclick="Reload()">
            New Game
        </button>
        <br>
        <!--Image du dé-->
        <img id="FaceDé" src="ImagesDé/Face1.jpg">
        <br>
        <!--Bouton du dé-->
        <form class="btnLancer">
            <input id="Btn" type="button" 
            value="Lancer le dé" onclick="J1AndJ2()">
        </form>
        <br>
        <!--Button Hold-->
        <input id="btnHold" type="button" onclick="Holds()" value="HOLD" >
    </div>

    <!--Joueur 2-->
    <div class="col-1 Joueur2">
        <div class="Global">
            <span name="J2" class="PlayerNoPlay" id="PlayJ2">
                Player 2
            </span>
            <p id="GlobalJ2">0</p>
        </div>
        <br>
        <div class="current">
            Round
            <p id="J2">0</p>
        </div>
    </div>
    <script src="ScriptDé.js"></script>
</body>
</html>
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
    <!--Joueur 1 -->
    
    <!--Valeur du Dé non afficher sur la page-->
    <p class="Hidden" id="Value"></p>

    <div class="col-1 Joueur1">
        <div class="Global">
            <div>
                <span name="J1" class="PlayerToPlay" id="PlayJ1">
                    <?php $_GET['Player1']?>
                </span>
                <span id="BallRedJ1" class="GoPlay">●</span>
            </div>
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
        <button id="NewGame" class="buttons NewGame" type="button" onclick="Reload()">
            New Game
        </button>
        <br>
        <!--Image du dé-->
        <img id="FaceDé" src="ImagesDé/Face1.jpg">
        <br>
        <!--Bouton du dé-->
        <form class="btnLancer">
            <input id="Btn" class="buttons Lancer" type="button" 
            value="Lancer le dé" onclick="J1AndJ2()">
        </form>
        <br>
        <!--Button Hold-->
        <input id="btnHold" class="buttons Hold" type="button" onclick="Holds()" value="HOLD" >
    </div>

    <!--Joueur 2-->
    <div class="col-1 Joueur2">
        <div class="Global">
            <div>
                <span id="BallRedJ2" class="Hidden">●</span>
                <span name="J2" class="PlayerNoPlay" id="PlayJ2">
                    <?php $_GET['Player1']?>
                </span>
            </div>
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
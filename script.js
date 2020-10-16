document.getElementById('count').textContent = document.getElementsByClassName("row-message").length;

for(var i=0; i<document.getElementsByClassName("trash").length; i++) {
    document.getElementsByClassName("trash")[i].addEventListener("click",
    function() {
        console.log("J'ai cliqué sur la poubelle")
        this.parentNode.remove();
        document.getElementById("count").textContent = document.getElementsByClassName("row-message").length;
    });
}

var addMessageButton = document.getElementById('add-message-button');

addMessageButton.addEventListener("click", function(){
    // console.log("tu as cliqué");
    var inputValue = document.getElementById('message-input').value;
    console.log(inputValue);
    var author = "Moi";

    var firstElement = document.getElementsByClassName("row-message")[0];
    console.log(firstElement);

    // On va créer un div avec un nom de classe "row row-message"
    var div = document.createElement("div");
    div.className = "row row-message";
    document.body.insertBefore(div, firstElement);
    // document.body.appendChild(div);

    // On va créer une balise image et lui assigné un image
    var imageTag = document.createElement("img");
    imageTag.className = "avatar"; // j'assigne un nom de classe
    imageTag.src = `avatar-${Math.floor(Math.random()*5 + 1)}.jpg`; // j'assigne une source
    div.appendChild(imageTag);

    // //On va créer une div dans notre div parent "row"
    var childDiv = document.createElement("div");
    div.appendChild(childDiv);
    
    // //on va maintenant créer un h6 dans la childDiv
    var h6 = document.createElement('h6');
    h6.textContent = author;
    childDiv.appendChild(h6);

    // //On va aussi créer un paragraphe dans la childDiv
    var p = document.createElement('p');
    p.textContent = inputValue;
    childDiv.appendChild(p);

    // //Dernierement on va créer une image correspond à la poubelle dans la div parent "row"
    var trash = document.createElement("img");
    trash.className = "trash";
    trash.src = "trash.png";
    div.appendChild(trash);

    // On réinitialise la valeur de l'input
    document.getElementById("message-input").value = ""  ;
    
    // On met à jour la valeur du compteur de mails
    document.getElementById("count").textContent = document.getElementsByClassName("row-message").length;

    // On créer un écoute sur l'élément que l'on a créer au click
    trash.addEventListener("click", function() {
        this.parentNode.remove();
    })
        
});




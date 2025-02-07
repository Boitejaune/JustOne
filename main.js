var i = 13; // Nombre de round
const fs = require('fs');
const prompt = require('prompt-sync')();
const tour = require('./tour.js');
var score = 0;
var ntour = 1;
var s_add = 0;
var m_d = "";
let historiqueContenu = "";
var stringmots = fs.readFileSync('data.txt', 'utf8');
var listemots = stringmots.split(',\r\n')

function sauvegarderHistorique(historiqueContenu) {
    const blob = new Blob([historiqueContenu], { type: 'text/plain' });
    const lien = document.createElement('a');
    lien.href = URL.createObjectURL(blob);
    lien.download = 'Historique.txt';
    document.body.appendChild(lien);
    lien.click();
    document.body.removeChild(lien);
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

while (i > 0){
    actif = Math.floor(Math.random()*5)+1;
    console.log("joueur " + actif + ", tu seras joueur actif cette manche.");
    bon = false; // Vérification que le joueur entre bien le bon nombre
    while (!bon){
        result = prompt("Joueur actif (" + actif + "), choisis un nombre entre 1 et 5: ");
        if (result >0 && result<6){
            bon = true;
        }else{
            console.log("nan vraiment un *nombre* entre 1 et 5");
        }
    };
    mots=[];
    j = 5; // nombre de mots
    while (j>0){
        temp = Math.floor(Math.random()*listemots.length);
        if (!(temp in mots)){
            mots.push(listemots[temp]);
            listemots.pop(temp)
        }
        j-=1;
    };
    console.log("joueur actif (" + actif + "), cache toi les yeux, voici les mots qui étaient disponibles: ");
    // sleep(2000).then(()=>{console.log('les mots étaient donc: ');})
    sleep(2000);
    console.log(mots)
    console.log("le mot choisit est donc: " + mots[result-1]);
    [s_add, m_d] = tour.tour(actif,5,mots[result-1]);
    if (s_add == 1){
        score += s_add;
    };
    console.log("votre score: " + score);
    historiqueContenu += "Tour " + ntour +" : Mot à deviner : " + mots[result-1] + "Mot donné : "+ m_d + "par joueur " + actif + "\n";
    i -= 1;
    ntour += 1;
}
window.addEventListener('load', function() {
    sauvegarderHistorique(historiqueContenu);
});
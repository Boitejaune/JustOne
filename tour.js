
// Importing the module *
const prompt = require("prompt-sync")();


module.exports = {
    tour: function(j_cache, nb_j,m_mys) { // j_cache : joueur qui ne doit pas regarder l'écran, nb_j : nombre de joueurs, m_mys : mot mystère
        var l_mots = []
        for(let i = 1;i<=nb_j;i++){
            if (i == j_cache){
                continue;
            }
            else{
                mots = prompt("Choisissez un mot joueur" + i);
                l_mots.push(mots);
            }
        console.log(l_mots);
        }
        verif(l_mots);
        prop = prompt("Devine le mot mystère avec ceux-ci :" + l_mots + ". Ou passe ton tour en écrivant : passe | ");
        if(prop.toLowerCase() == m_mys.toLowerCase()) {
            return([1,prop]);
        }
        else if(prop == "passe"){
            return([-1,prop]);
        }
        else{
            return([0,prop]);
        }
    }
}
function verif(mots) {
    console.log("Voici les mots que vous avez choisis : " + mots);
    
    while (mots.length > 0) {
        var confirm = prompt("Voulez-vous supprimez un mot ? (Si oui : true, sinon : false) ")
        if (confirm == "false") {
            break;
        }
        else{
            suppr = prompt("Choisissez le mot à supprimer (0 à " + (mots.length - 1) + ") : " + mots);
            suppr = parseInt(suppr);
            
            if (suppr >= 0 && suppr < mots.length) {
                mots.splice(suppr, 1);
            } else {
                console.log("Numéro invalide");
            }

        }
    }
    
    console.log("Mots restants : " + mots);
}


function tour(j_cache, nb_j,m_mys) {
    var mots = []
    for(let i = 1;i<=nb_j;i++){
        if (i == j_cache){
            continue;
        }
        else{
            mots.push(prompt("Choisissez un mot joueur" + i));
        }
    }
    verif(mots);
    var prop = prompt("Devine le mot mystère avec ceux-ci :" + mots);
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
 
function verif(mots) {
    console.log("Voici les mots que vous avez choisis : " + mots);
    
    while (mots.length > 0) {
        let suppr = prompt("Choisissez le mot à supprimer (0 à " + (mots.length - 1) + ") : " + mots);
        suppr = parseInt(suppr);
        
        if (suppr >= 0 && suppr < mots.length) {
            mots.splice(suppr, 1);
        } else {
            alert("Numéro invalide");
        }
        
        if (confirm("Voulez-vous supprimer un autre mot ?") === false) {
            break;
        }
    }
    
    console.log("Mots restants : " + mots);
}

/*
var j = prompt("Saisissez le nombre de joueurs")


for(let i = 1;i<=nb_j;i++){
    tour(j,i,"mot")
}
*/
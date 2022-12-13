let valeurHome = 0;
function newHome(){
    if(valeurHome === 1){
        document.getElementById('maison').src="images/home.png";
        return valeurHome = valeurHome - 1;
    } else {
        document.getElementById('maison').src="images/home_r.png";
        return valeurHome = valeurHome + 1;
    }
}
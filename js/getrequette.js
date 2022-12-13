let yves = document.getElementById("valeur");
fetch("http://localhost:8888/api_php/")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(valeur){
        console.log(valeur);
        yves.innerText = valeur.title;
    })
    .catch(function(err){
        console.log("Une erreur est survenu");
    });




const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");
const key = "e041aabfca659c157791cbe754bd968d";

let search = "";
let movies = [];
let movies1 = [];
let clesId;
let clesKey;
let resultat;

const fetchMovies = async () =>{
    movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e041aabfca659c157791cbe754bd968d&language=fr&query=${search}`).then((res) => res.json());
    clesId = movies.results.map((yves) => yves.id);

    for(let yves of clesId){
        movies1 = await fetch(`https://api.themoviedb.org/3/movie/${yves}?api_key=${key}&append_to_response=videos&language=fr`).then((res)=>res.json());
        console.log(movies1.videos.results.map((id)=> id.key));
    }
}

const mobiesDisplay = async ()=>{
    await fetchMovies();
    /*    
    //movies.results.length = 12; 
            <p><iframe width="950" height="534" src="https://www.youtube.com/embed/xxx" title="All Nassr vs Al-Ta'i 5-1Goal and assist Ronaldo - Extеndеd Hіghlіghts & All Gоals 2022 HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>

    */
    result.innerHTML = movies.results.map((movie) => 
    `
    <article class="col-lg-12">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="img-fluid rounded-start" alt="${movie.original_title}">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h1 class="card-title">${movie.original_title}</h1>
                        <p class="card-text">${movie.overview}</p>
                        <p class="card-text"><img src="./images/etoile.png" width="25"  alt="${movie.original_title}"> <small class="text-muted">Popularité : ${movie.popularity} </small></p>
                        <p class="card-text"><img src="./images/date.png" width="25"  alt="${movie.original_title}"> <small class="text-muted">Date de sortie : ${movie.release_date} </small></p>
                    </div>
                    </div>
                </div>
            </div>
        </article>
    `
    ).join("");
}


searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    search = searchInput.value;
    mobiesDisplay();
});
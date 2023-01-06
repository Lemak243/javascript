const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");
const key = "xxxxxx";

let search = "";
let movies = [];
let movies1 = [];
let clesId;
let clesKey;
let resultat;

const fetchMovies = async () =>{
    movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=fr&append_to_response=videos,images&query=${search}`).then((res) => res.json());
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
    <li>
        <h2>${movie.original_title}</h2>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
        <p>${movie.overview}</p>
        <p>${movie.popularity}</p>
        <p>Date de sortie = ${movie.release_date}</p>
    </li>
    <hr>
    `
    ).join("");
}


searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    search = searchInput.value;
    mobiesDisplay();
});



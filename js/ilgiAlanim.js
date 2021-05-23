const API_URL = 'http://www.omdbapi.com/?apikey=2e85fa77&';

function make_request(title) {
    let url = API_URL + "t=" + encodeURI(title);
    console.log(url);
    response = $.getJSON(url);
    return response;
}

function put_info(title) {
    make_request(title)
        .then(jsondata => {
            // Gerekli verileri al.
            title = jsondata['Title'];
            year = jsondata['Year'];
            released = jsondata['Released'];
            runtime = jsondata['Runtime'];
            genre = jsondata['Genre'];
            language = jsondata['Language'];
            plot = jsondata['Plot'];
            poster_url = jsondata['Poster'];
            actors = jsondata['Actors'];
            awards = jsondata['Awards'];
            country = jsondata['Country'];
            director = jsondata['Director'];

            // HTML dosyasina burada koy.
            console.log(poster_url);
            console.log(title);
            console.log(year);
            console.log(released);
            console.log(runtime);
            console.log(genre);
            console.log(language);
            console.log(plot);
            console.log(actors);
            console.log(awards);
            console.log(country);
            console.log(director);

            var s =document.getElementById("aa");
            s.innerHTML=plot;


        });
}

put_info("Friends");



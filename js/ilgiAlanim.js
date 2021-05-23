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

            document.getElementById("a1").innerHTML="<b>Adı:</b> "+title;
            document.getElementById("a2").innerHTML="<b>Yıl: </b>"+year;
            document.getElementById("a3").innerHTML=" <b>Yayınlanma Zamanı: </b>"+released;
            document.getElementById("a4").innerHTML=" <b>Yayınlanma Süresi: </b>"+runtime;
            document.getElementById("a5").innerHTML=" <b>Türü </b>"+genre;
            document.getElementById("a6").innerHTML=" <b>Dil:</b>"+language;
            document.getElementById("a7").innerHTML=" <b>Konu:</b>"+plot;
            document.getElementById("a8").innerHTML=" <b>URK:</b>"+poster_url;
            document.getElementById("a9").innerHTML=" <b>Oyuncular:</b>"+actors;
            document.getElementById("a10").innerHTML=" <b>Ödüller:</b>" +awards;
            document.getElementById("a11").innerHTML=" <b>Ülke:</b>"+country;
            document.getElementById("a12").innerHTML=" <b>Yönetmen:</b>"+director;

        });
}

put_info("Friends");



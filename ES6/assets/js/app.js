function genreClick(data) {

        var genreSelected = data;

        var xhttp = new XMLHttpRequest;

        xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                        var response = JSON.parse(xhttp.responseText);
                        var playlist = response.playlist;

                        var item = '';

                        for (var i = 0; i < playlist.length; i++) {
                                

                                if (genreSelected == playlist[i].genre) {
                                        item += `<li class="list-group-item" id="playlistItem">
                         ${playlist[i].song} <br /> ${playlist[i].artist}<br /> ${playlist[i].genre}
                    
                        </li>                    `
                                }
                                
                        }
                        document.getElementById('display').innerHTML='vicky'

                        
                        document.getElementById('playlist').innerHTML = item;

                }
        };

        xhttp.open("GET", "assets/playlist.json", true);
        xhttp.send();

}

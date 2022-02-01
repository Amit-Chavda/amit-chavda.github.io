let get_joke = () => {
    let req = new XMLHttpRequest();
    req.open("GET", "https://v2.jokeapi.dev/joke/Any", true);
    req.send();
    req.onload = () => {
        let json = JSON.parse(req.response);

        if (json.setup != undefined) {
            document.getElementById("setup").innerText = json.setup;
            document.getElementById("delivery").innerText = json.delivery;
        } else {
            document.getElementById("setup").innerHTML = json.joke;
            document.getElementById("delivery").innerText = "";
        }
    }
}
var com;
window.alert("Click ok if you are 18+");
var likes = 0;

function btnClick() {
    likes++;
    document.getElementById('likes').innerHTML = likes;

    return true
}

function loadKom() {
    if (!window.sessionStorage.getItem("herePreviously")) {
        sessionStorage.setItem("herePreviously", "true");
    }
    var lenght = localStorage.length;
    com = [];
    for (var i = 0; i < lenght; ++i) {
        com[i] = localStorage.key(i);
    }
    com.sort();
    var markup = "<ul>";
    for (var c in com) {
        var query = localStorage.getItem(com[c]);
        markup += "<li><span>" + query + "</span>" +
            "<input id= '" + com[c] + "' type = 'button'" +
            "value = 'Edit' onclick = 'editKom(id)'>" +
            "<input id = '" + com[c] + "'type = 'button'" +
            "value = 'Delete' onclick = 'deleteKom(id)'>";
    } //end for
    markup += "</ul>";
    document.getElementById("komentari").innerHTML = markup;
} // end function
function post() {
    var c = document.getElementById("textarea");
    localStorage.setItem(c.value, c.value);
    c.value = "";
    loadKom();
}

function deleteKom(c) {
    localStorage.removeItem(c);
    loadKom();
}

function editKom(c) {
    document.getElementById("textarea").value = c;
    loadKom();
}

function start() {
    var postButton = document.getElementById("post");
    postButton.addEventListener("click", post, false);
    loadKom();
}
window.addEventListener("load", start, false);
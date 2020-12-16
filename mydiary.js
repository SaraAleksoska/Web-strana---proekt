function post(mesto, naslov, sodrzina) {
    var currentTime = new Date();
    var title = document.getElementById(naslov).value;
    var sod = document.getElementById(sodrzina).value;
    var content = "<p style='color:white; font-weight:bolder; margin-left:10px'>" + title + "</p><p style='color:lightgray; margin-left:10px'>" + sod + "</p>";
    document.getElementById(mesto).innerHTML = content + "<p  margin-left:10px; style='color:darkgray;'>" + currentTime.getDate() + "/" + (currentTime.getMonth() + 1) + "/" + currentTime.getFullYear() + "<\p>";
}
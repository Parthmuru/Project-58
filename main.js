var images = [
 "badminton.jpg", "Parth.jpg"
];
var i = 0;

function change() {
    document.getElementById("profile").src = images[i];
    i++;
    if (i == 2) {
        i = 0;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var card = document.querySelector(".birthdayCard");
    var audio = document.getElementById("birthdaySong");

    card.addEventListener("mouseover", function() {
        audio.play();
    });

    card.addEventListener("mouseout", function() {
        audio.pause();
        audio.currentTime = 0;
    });
});
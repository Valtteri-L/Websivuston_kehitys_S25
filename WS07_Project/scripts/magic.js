'use strict';

// Random Number Generaattori
function getRandomInt(min, max) {
    return min + Math.random() * (max - min);
}

let total = null;
let highScore = 0;
let lowScore = 0;
let audio = new Audio('../audios/Vine-Boom.mp3');

// funktio, jolla saadaan numero -1,000 ja +1,000 väliltä
function Rahasimulaattori() {
    let numero = Math.round(getRandomInt(-1000, 1000));

    document.getElementById("wow").innerHTML = Intl.NumberFormat('en-US').format(numero) + '€';
    document.getElementById("credits").innerHTML = Intl.NumberFormat('en-US').format(numero) + '€';

    // tämä laittaa pelin käyntiin ja vaihtaa pelin napin tekstin. Tämä osio toimii vain silloin kuin nappia painetaan ensimmäisen kerran, koska silloin total score on vielä tyhjä.
    if (total === null) {
        total = numero;
        document.getElementById("nappi").innerHTML = 'AGAIN';
    } else {
        total += numero;
    }
    // tällä vaihdetaan saadun luvun taustakuvaa jos kyseinen numero on negatiivinen ja soitetaan ääniefekti
    if (numero < 0) {
        document.getElementById("tausta").style.backgroundImage = "url(../images/minus.png)";
        document.getElementById("credits").innerHTML = Intl.NumberFormat('en-US').format(total) + '€';
        audio.play();
        audio.currentTime = 0;
    }
    // tällä vaihdetaan saadun luvun taustakuvaa jos kyseinen numero on positiivinen
    if (numero > 0) {
        document.getElementById("tausta").style.backgroundImage = "url(../images/plus.png)";
        document.getElementById("credits").innerHTML = Intl.NumberFormat('en-US').format(total) + '€';
    }
    // tällä vaihdetaan saadun yhteisluvun väri punaiseksi jos kyseinen numero on negatiivinen. Tässä on myös lowscoren update
    if (total < 0) {
        document.getElementById("credits").style.color = "red";
        if (total < lowScore) {
            lowScore = total;
            document.getElementById("LS").innerHTML = Intl.NumberFormat('en-US').format(lowScore) + '€';
        }
    }
    // tällä vaihdetaan saadun yhteisluvun väri vihreeksi jos kyseinen numero on positiivinen. Tässä on myös highscoren update
    else {
        document.getElementById("credits").style.color = "green";
        if (total > highScore) {
            highScore = total;
            document.getElementById("HS").innerHTML = Intl.NumberFormat('en-US').format(highScore) + '€';
        }
    }
    // Tällä katsotaan jos yhteisluku, 'total', ylittää -1,000 jolloin sivun tausta ja teksti vaihtuu
    if (total <= -1000) {
        document.body.style.backgroundColor = "red";
        document.getElementById("boo").innerHTML = 'AIVAN LIIAN VÄHÄN SALDOA!!';
        document.getElementById("boo").style.color = "red";
    }
    // Tämä taas palauttaa kaiken normaaliksi kun yhteisluku pääsee pois -1,000 tilasta
    else {
        document.body.style.backgroundColor = "";
        document.getElementById("boo").innerHTML = 'Pankkitili Simulator';
        document.getElementById("boo").style.color = "";
        document.getElementById("boo").style.fontFamily = '';
    }
}
// yksinkertainen klikkaus laskin
let clicks = 0;

function clickCounter() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

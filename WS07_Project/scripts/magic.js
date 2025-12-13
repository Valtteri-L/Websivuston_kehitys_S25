'use strict';

// Random Number Generaattori
function getRandomInt(min, max) {
    return min + Math.random() * (max - min);
}

let total = null;
let highScore = 0;
let lowScore = 0;
// let audio = new Audio('Red Sun in the Sky - Mao Ze Dong.mp3');
let audio2 = new Audio('../audios/Vine-Boom.mp3');
// let audio3 = new Audio('chinese speaking.mp3');

// funktio, jolla saadaan numero -1,000,000 ja +1,000,000 väliltä
function Rahasimulaattori() {
    let numero = Math.round(getRandomInt(-1000000, 1000000));

    document.getElementById("wow").innerHTML = Intl.NumberFormat('en-US').format(numero);
    document.getElementById("credits").innerHTML = Intl.NumberFormat('en-US').format(numero);

    // tämä laittaa musiikin pyörimään ja vaihtaa pelin napin tekstin. Tämä toimii vain silloin kuin nappia painetaan ensimmäisen kerran, koska silloin total score on vielä tyhjä.
    if (total === null) {
        total = numero;
        // audio.play();
        // audio.loop = true;
        document.getElementById("nappi").innerHTML = 'AGAIN';
    } else {
        total += numero;
    }
    // tällä vaihdetaan saadun luvun taustakuvaa jos kyseinen numero on negatiivinen
    if (numero < 0) {
        document.getElementById("tausta").style.backgroundImage = "url(../images/minus.png)";
        document.getElementById("credits").innerHTML = Intl.NumberFormat('en-US').format(total);
        audio2.play();
        audio2.currentTime = 0;
    }
    // tällä vaihdetaan saadun luvun taustakuvaa jos kyseinen numero on positiivinen
    if (numero > 0) {
        document.getElementById("tausta").style.backgroundImage = "url(../images/plus.png)";
        document.getElementById("credits").innerHTML = Intl.NumberFormat('en-US').format(total);
    }
    // tällä vaihdetaan saadun yhteisluvun väri punaiseksi jos kyseinen numero on negatiivinen. Tässä on myös lowscoren update
    if (total < 0) {
        document.getElementById("credits").style.color = "red";
        if (total < lowScore) {
            lowScore = total;
            document.getElementById("LS").innerHTML = Intl.NumberFormat('en-US').format(lowScore);
        }
    }
    // tällä vaihdetaan saadun yhteisluvun väri vihreeksi jos kyseinen numero on negatiivinen. Tässä on myös highscoren update
    else {
        document.getElementById("credits").style.color = "green";
        if (total > highScore) {
            highScore = total;
            document.getElementById("HS").innerHTML = Intl.NumberFormat('en-US').format(highScore);
        }
    }
    // Tällä katsotaan jos yhteisluku, 'total', ylittää -1,000,000 jolloin sivun tausta ja teksti vaihtuu
    if (total <= -1000000) {
        // audio.pause();
        // audio3.play();
        // audio3.loop = true;
        // audio3.volume = 0.7;
        document.body.style.animationIterationCount = "0";
        document.body.style.backgroundColor = "black";
        document.getElementById("boo").innerHTML = 'VEROTTAJA ISKI';
        document.getElementById("boo").style.color = "red";
    }
    // Tämä taas palauttaa kaiken normaaliksi kun yhteisluku pääsee pois -1,000,000 tilasta
    else {
        // audio3.pause();
        // audio.play();
        document.body.style.animationIterationCount = "infinite";
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

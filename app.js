
/*
const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)
a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)
b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)

2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)
a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)
b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)

3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
a. JS pagalba perskaitykite masyvą africa. (4 taškai)
b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)

4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. (2 taškai)
a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)
b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
Pasirinkite patys sau patogiausius metodus tai atlikti.

5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)
b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)
c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)
*/

const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1 Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)
// a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)
// b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)

console.log('=================================');
const bodyDOM = document.querySelector('body');
const pirmasH2 = document.createElement('h2');
const antrasH2 = document.createElement('h2');
const mygtukas = document.createElement('button');
bodyDOM.appendChild(pirmasH2);
bodyDOM.appendChild(antrasH2);
bodyDOM.appendChild(mygtukas);

mygtukas.addEventListener('click', e => {
    let firstNum = rand(1, 6);
    let secondNum = rand(1, 6);
    pirmasH2.innerText = firstNum;
    antrasH2.innerText = secondNum;
    if (firstNum === secondNum) {
        pirmasH2.style.color = 'red';
        antrasH2.style.color = 'red';
    } else {
        pirmasH2.style.color = null;
        antrasH2.style.color = null;
    }
});

// 2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)
// a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)
// b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)

const newH3 = document.createElement('h3');
const mygtukas2 = document.createElement('button');
bodyDOM.appendChild(newH3);
bodyDOM.appendChild(mygtukas2);
mygtukas.innerText = 'Skaičiukai';
mygtukas2.innerText = 'Suma';
const array = [];

mygtukas2.addEventListener('click', e => {
    let randomNumber = rand(1, 10);
    array.push(randomNumber);
    console.log(array);
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    newH3.innerText = suma;
});

// 3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
// a. JS pagalba perskaitykite masyvą africa. (4 taškai)
// b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
// c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)

const newUl = document.createElement('ul');
bodyDOM.appendChild(newUl);

africa.forEach( e => {
    console.log(e);
}) // neisivaizduoju kaip as turiu ji perskaityti :D:D


// b
africa.forEach( e => {
    const newLi = document.createElement('li');
    newLi.innerText = e;
    if (newLi.innerText.length) {
        newUl.appendChild(newLi); // c
    }
});

// 4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. (2 taškai)
// a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)
// b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
// Pasirinkite patys sau patogiausius metodus tai atlikti.
const plusButton = document.querySelector('.plus');
const firstInput = document.querySelector('.first-input');
const secondInput = document.querySelector('.second-input');
const h5DOM = document.querySelector('h5');
plusButton.addEventListener('click', e => {
    console.log(firstInput.value);
    console.log(secondInput.value);
    let suma = (+firstInput.value) + (+secondInput.value)
    console.log(suma);
    h5DOM.innerText = suma;
});
const minusButton = document.querySelector('.minus');
minusButton.addEventListener('click', e => {
    console.log(firstInput.value);
    console.log(secondInput.value);
    let minus = (+firstInput.value) - (+secondInput.value)
    console.log(minus);
    h5DOM.innerText = minus;
});

// 5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
// a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)
// b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)
// c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)

const secondUl = document.createElement('ul');
bodyDOM.appendChild(secondUl);



australia.forEach(e => {
    console.log(e);
});




// Pirma uzduotis: parašyti algoritmą, kuris įvestą tekstinę reikšmę pateikia atbuline tvarką.

const sentense = "Programuotojas"

function reverseWord(sentence) {
    return sentence.split(' ').map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ');
}

console.log(reverseWord(sentense));

// Antroji užduotis: parašyti algoritmą, kuris skaičių masyve surastų mažiausią ir didžiausią skaičių.

const myArray = Array(100)
    .fill()
    .map(() => Math.floor(1000 * Math.random()));

console.log(myArray);
console.log(Math.max(...myArray));
console.log(Math.min(...myArray));

// Trecia užduotis: parašyti algoritmą, kuris skaičių masyve surastų besidubliuojančius skaičius.

const myArray2 = Array(100)
    .fill()
    .map(() => Math.floor(1000 * Math.random()));

console.log(myArray2);

const findDuplicates = myArray2 => myArray2.filter((item, index) => myArray2.indexOf(item) !== index)
const duplicateNumbers = findDuplicates(myArray2);
console.log(duplicateNumbers);

// Ketvirta užduotis: parašyti algoritmą, kuris suskaičiuotu balsių ir priebalsių skaičių tekste.

const myText = ("“Programuotojo ar tiesiog bet kokio IT specialisto profesija taps vis labiau įprasta.“").toLowerCase();

let vowels = 0;
let consonants = 0;
let count;

for (count = 0; count < myText.length; count++) {
    let char = myText.charAt(count);
    if (char.match(/[aąeęėiįyouųū]/)) {
        vowels++;

    } else if (char.match(/[bcčdfghjklmnprsštvzž]/)) {
        consonants++;
    }
}

console.log("consonants: " + consonants);
console.log("vowels: " + vowels);
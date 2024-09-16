console.log("Booleans")
console.log("========")

console.log("Bollesche Werte sind Wahrheitswerte, die wahr (true) oder falsch (false) annehmen")

//Wahrheitswerte kennen wir bereits aus der Wenn-fuktion aus excel.

console.log("Aufgabe1")

if(true){
console.log("Der Ausdruck ist wahr (true).")
}else{
    console.log("der Ausdruck ist unwahr / falsch / false")
}

console.log("Aufgabe 2")

// In Erweiterung von AUfgabe 1 soll der Ausdruck dynamisch entweder true oder flase sein.

let a = 5

if(a>6){
    console.log("Das ist wahr")
}else{
    console.log("Das ist falsch")
}

console.log("Aufgabe 3")

// Wenn die Schülerin 16 oder jünger ist,muss sie "fahrradfahren"
// Wenn sie 17 ist, dard sie "begleitet fahren"
// Wenn sie 18 ist darf sie "fahren"

let alter = 16;
let fuehrerschein = true;
if(alter<=16 || fuehrerschein === false){ // Wenn die Schülerin 16 ist oderkeinen führerschein hat, dann Fahrrad
    console.log("fahrradfahren")
}

if(alter === 17 && fuehrerschein === true){ // Wenn 17 UND Führerschein, dann begleitet fahren
    console.log("begleitet fahren")
}

if(alter > 17 && fuehrerschein === true){ //Wenn älter 17 UND Führerschein,dann fahren
    console.log("fahren")
}

if(fuehrerschein){
    if
}else{
    console.log("fahrradfahren")
}

    console.log("Aufgabe 4")
    let zahl = 0
if(1){
    console.log("Die Zahl" + zahl +"nimmt den boolischen Wert true an")
}else{
    console.log("Die Zahl" + zahl +"nimmt den boolischen Wert false an")
}
console.log("Aufgabe 6")

function calculatePoints(matches) {
    if (!matches || matches.length === 0) return 0;

    return matches.reduce((total, match) => {
        switch (match.result) {
            case 'win':
                return total + 3;  // 3 Punkte für einen Sieg
            case 'draw':
                return total + 1;  // 1 Punkt für ein Unentschieden
            case 'loss':
                return total + 0;  // 0 Punkte für eine Niederlage
            default:
                return total;      // Falls das Ergebnis unbekannt ist, keine Punkte hinzufügen
        }
    }, 0);
}

// Testen der Funktion
const matches = [
    { result: 'win' },
    { result: 'draw' },
    { result: 'loss' },
    { result: 'win' }
];
const totalPoints = calculatePoints(matches);
console.log(totalPoints); // Ausgabe: 7


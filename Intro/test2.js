/**
 * I would like to stop commenting every method.
 * @param {String} Hallo 
 * @returns 5-fachen String
 */
function geht(Hallo) {
    let output = ""
    for (let iteration = 1; iteration <= 5; iteration++) {
        output += Hallo;
    }
    return output;
}

/**
 * Dokumentation
 * @param {*} Einagebeein 
 * @param {*} Einagebeein 
 * @returns Zusammen
 */
function zu(hallo, hallo2) {
    let test = hallo + hallo2;
    return test;
}

let count = 1;
while (count <= 10) {
    console.log("hallo");
    count++;
}
for (let iteration = 1; iteration <= 10; iteration++) {
    console.log(iteration);
}
console.log("Hallo");
console.log("Hallo" + 123);
let ausgabe = geht("Das Leben ist toll");
console.log(ausgabe);
console.log(zu("geht ", "gut"));

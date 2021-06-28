"use strict"

//-------------------Užduotis Nr.1-----------------//
console.log("------------------Užduotis Nr.1------------------")
let klase = {
    studentai: [],
    vidurkis: function() {
        let suma = 0;
        for (let i in this.studentai[0]) {
            suma = suma + this.studentai[0][i].pazymys;
        }
        let vidurkis = suma / this.studentai[0].length;
        return vidurkis;
    }
}
console.log("sukurtas objektas klese")




//--------------------Užduotis Nr.2----------------//
console.log("------------------Užduotis Nr.2------------------")


function Studentas(id, vardas, pavarde, pazymys, lankomumas) {
    this.id = id
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.pazymys = pazymys;
    this.lankomumas = lankomumas;
    this.data = today;
}

//Šios dienos data
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; 
var yyyy = today.getFullYear();
if(dd < 10) 
{
dd = '0' + dd;
} 
if(mm < 10) 
{
mm = '0' + mm;
} 
today = yyyy + '-' + mm + '-' + dd



function studentai() {

//20 studentų/lankomumas/pazymys

    let masyvas = [20];
    for (let i = 0; i < 20; i++) {
        let pazymys = (Math.floor(Math.random()*10)+1);
    
    let lankomumas = [];
    for (let i = 0; i < 20; i++) {
        const raides = "xn";
        const randomRaides = raides[Math.floor(Math.random() * raides.length)];
        let nx = randomRaides;
    lankomumas[i] = nx;
    }
        masyvas[i] = new Studentas(i+1, "Vardenis" + (i+1), "Pavardenis" + (i+1), pazymys, lankomumas, today);
    }
    return masyvas;
};

console.log(studentai())

//-------------------------Užduotis Nr.3----------------------------//
console.log("------------------Užduotis Nr.3------------------")
klase.studentai.push(studentai());

console.log(klase)

//-------------------------Užduotis Nr.4----------------------------//
console.log("------------------Užduotis Nr.4------------------")

console.log("Pažymių vidurkis = " + klase.vidurkis());
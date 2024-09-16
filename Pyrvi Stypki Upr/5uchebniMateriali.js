function uchebniMateriali(vhod){
    let brHimikalki = Number(vhod[0])
    let brMarkeri = Number(vhod[1])
    let brPreparat = Number(vhod[2])
    let otstypka = Number(vhod[3]) / 100
    let suma = (brHimikalki * 5.8 + brMarkeri * 7.2 + brPreparat * 1.2)
    let sled = suma - suma * otstypka
    console.log(sled)
}

uchebniMateriali(["4",
"2",
"5",
"13"])
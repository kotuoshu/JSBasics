function magazin(vhod){
    let ekskurziq = Number(vhod[0])
    let brPyzeli = Number(vhod[1])
    let brKukli = Number(vhod[2])
    let brMecheta = Number(vhod[3])
    let brMinjoni = Number(vhod[4])
    let brKamioncheta = Number(vhod[5])

    let suma = brPyzeli * 2.6 + brKukli * 3 + brMecheta * 4.1 + brMinjoni * 8.2 + brKamioncheta * 2
    let br = brPyzeli + brKukli + brMecheta + brMinjoni + brKamioncheta

    if (br >= 50){
        suma *= 0.75
    }
    suma *= 0.9
    if (suma >= ekskurziq){
        console.log(`Yes! ${(suma - ekskurziq).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(ekskurziq - suma).toFixed(2)} lv needed.`)
    }
}

magazin(["40.8",
"20",
"25",
"30",
"50",
"10"])

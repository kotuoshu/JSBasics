function pazaruvane(vhod){
    let byudjet = Number(vhod[0])
    let brVideokarti = Number(vhod[1])
    let brProcesori = Number(vhod[2])
    let brRam = Number(vhod[3])

    let cenaVideokarti = brVideokarti * 250
    let cenaProcesori = cenaVideokarti * 0.35 * brProcesori
    let cenaRam = cenaVideokarti * 0.1 * brRam
    let suma = cenaVideokarti + cenaProcesori + cenaRam

    if (brVideokarti > brProcesori){
        suma *= 0.85
    }
    if (byudjet >= suma){
        console.log(`You have ${(byudjet - suma).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(suma - byudjet).toFixed(2)} leva more!`)
    }
}

pazaruvane(["900",
"2",
"1",
"3"])
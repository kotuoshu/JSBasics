function lodkaZaRibolov(vhod){
    let budjet = Number(vhod[0])
    let sezon = vhod[1]
    let br = Number(vhod[2])
    let cena = 0
    switch(sezon){
        case "Spring": cena = 3000; break
        case "Summer":
        case "Autumn": cena = 4200; break
        case "Winter": cena = 2600; break
    }
    if (br <= 6){
        cena *= 0.9
    } else if (br > 6 && br <= 11){
        cena *= 0.85
    } else if (br > 11){
        cena *= 0.75
    }
    if (br % 2 == 0 && sezon != "Autumn"){
        cena *= 0.95
    }
    if (budjet >= cena){
        console.log(`Yes! You have ${(budjet - cena).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(cena - budjet).toFixed(2)} leva.`)
    }
}

lodkaZaRibolov(["3600",
"Autumn",
"6"])
function skiPochivka(vhod){
    let dniPrestoj = Number(vhod[0])
    let vidStaq = vhod[1]
    let ocenka = vhod[2]

    let cena = 0
    switch (vidStaq) {
        case "room for one person": cena = (dniPrestoj - 1) * 18; break
        case "apartment": cena = (dniPrestoj - 1) * 25; break
        case "president apartment": cena = (dniPrestoj - 1) * 35; break
    }

    if (dniPrestoj < 10){
        switch (vidStaq){
            case "apartment": cena *= 0.7; break
            case "president apartment": cena *= 0.9; break
        }
    } else if (dniPrestoj > 15){
        switch (vidStaq){
            case "apartment": cena *= 0.5; break
            case "president apartment": cena *= 0.8; break
        }
    } else {
        switch (vidStaq){
            case "apartment": cena *= 0.65; break
            case "president apartment": cena *= 0.85; break
        }
    }

    switch (ocenka){
        case "positive": cena *= 1.25; break
        case "negative": cena *= 0.9; break
    }

    console.log(cena.toFixed(2))
}

skiPochivka(["30",
"president apartment",
"negative"])

function rezervoarZaGorivo2(vhod){
    let tipGorivo = vhod[0]
    let kolichestvoGorivo = Number(vhod[1])
    let karta = vhod[2]
    let cena = 0
    if (tipGorivo == "Gasoline"){
        cena = 2.22 * kolichestvoGorivo
        if (karta == "Yes"){
            cena = cena - 0.18 * kolichestvoGorivo
        }
    } else if (tipGorivo == "Diesel"){
        cena = 2.33 * kolichestvoGorivo
        if (karta == "Yes"){
            cena = cena - 0.12 * kolichestvoGorivo
        }
    } else if (tipGorivo == "Gas"){
        cena = 0.93 * kolichestvoGorivo
        if (karta == "Yes"){
            cena = cena - 0.08 * kolichestvoGorivo
        }
    }
    if (kolichestvoGorivo >= 20 && kolichestvoGorivo <= 25){
        cena = cena * 0.92
    } else if (kolichestvoGorivo > 25){
        cena = cena * 0.90
    }
    console.log(`${cena.toFixed(2)} lv.`)
}

rezervoarZaGorivo2(["Gas",
    30,
    "Yes"])
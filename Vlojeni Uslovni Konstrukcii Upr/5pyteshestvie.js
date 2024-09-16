function pyteshestvie(vhod){
    let budjet = Number(vhod[0])
    let sezon = vhod[1]
    let cena = 0
    let mqsto = 0
    let destinaciq = 0
    
    switch(sezon){
        case "summer": if (budjet <= 100){
            destinaciq = "Bulgaria"
            mqsto = "Camp"
            cena = budjet * 0.3
        } else if (budjet > 100 && budjet <=1000){
            destinaciq = "Balkans"
            mqsto = "Camp"
            cena = budjet * 0.4
        } else if (budjet > 1000){
            destinaciq = "Europe"
            mqsto = "Hotel"
            cena = budjet * 0.9
        } break
        case "winter": mqsto = "Hotel"
        if (budjet <= 100){
            destinaciq = "Bulgaria"
            cena = budjet * 0.7
        } else if (budjet > 100 && budjet <=1000){
            destinaciq = "Balkans"
            cena = budjet * 0.8
        } else if (budjet > 1000){
            destinaciq = "Europe"
            cena = budjet * 0.9
        } break
    }
    console.log(`Somewhere in ${destinaciq}`)
    console.log(`${mqsto} - ${cena.toFixed(2)}`)
}

pyteshestvie(["1500", "summer"])
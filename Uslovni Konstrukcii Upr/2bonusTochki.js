function bonusTochki(vhod){
    let tochki = Number(vhod[0])
    let bonus = 0

    if (tochki <= 100){
        bonus = 5
    }else if (tochki > 100 && tochki <= 1000){
        bonus = 0.2 * tochki
    }else if (tochki >1000){
        bonus = 0.1 * tochki
    }

    if (tochki % 2 == 0){
        bonus = bonus + 1
    } else if (tochki % 5 == 0){
        bonus = bonus + 2
    }

    console.log(bonus)
    console.log(tochki + bonus)
}

bonusTochki(["15875"])
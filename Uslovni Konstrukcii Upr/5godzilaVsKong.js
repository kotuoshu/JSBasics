function godzilaVsKong(vhod){
    let budjet = Number(vhod[0])
    let brStatisti = Number(vhod[1])
    let obleklo1 = Number(vhod[2])

    let dekor = budjet * 0.1
    let obleklo = brStatisti * obleklo1
    if (brStatisti > 150){
        obleklo *= 0.9
    }
    let pari = dekor + obleklo
    if (pari > budjet){
        console.log("Not enough money!")
        console.log(`Wingard needs ${(pari - budjet).toFixed(2)} leva more.`)
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budjet - pari).toFixed(2)} leva left.`)
    }
}

godzilaVsKong(["15437.62",
"186",
"57.99"])
function domashniLubimci(vhod){
    let dni = Number(vhod[0])
    let ostavenaHrana = Number(vhod[1])
    let zaKuche = Number(vhod[2])
    let zaKotka = Number(vhod[3])
    let zaKostenurka = Number(vhod[4])

    let nujnaHrana = dni * (zaKuche + zaKotka + zaKostenurka / 1000)

    if (ostavenaHrana >= nujnaHrana){
        console.log(`${Math.floor(ostavenaHrana - nujnaHrana)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(nujnaHrana - ostavenaHrana)} more kilos of food are needed.`)
    }
}

domashniLubimci([2,
    10,
    1,
    1,
    1200])
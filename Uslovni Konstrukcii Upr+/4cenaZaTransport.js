function cenaZaTransport(vhod){
    let nKilometri = Number(vhod[0])
    let vreme = vhod[1]

    let taksi = 0.7
    let avtobus = 0.09 * nKilometri
    let vlak = 0.06 * nKilometri
    if (vreme == "day"){
        taksi = taksi + 0.79 * nKilometri
    } else {
        taksi = taksi + 0.9 * nKilometri
    }

    if (nKilometri < 20){
        console.log(taksi.toFixed(2))
    } else if (nKilometri >= 20 && nKilometri < 100){
        console.log(avtobus.toFixed(2))
    } else {
        console.log(vlak.toFixed(2))
    }
}

cenaZaTransport(["7",
    "night"])
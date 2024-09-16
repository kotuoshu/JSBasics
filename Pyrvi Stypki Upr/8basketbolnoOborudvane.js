function basketbolnoOborudvane(vhod){
    let kecove = Number(vhod[0]) * 0.6
    let ekip = kecove * 0.8
    let topka = 0.25 * ekip
    let aksesoari = 0.2 * topka
    let suma = Number(vhod[0]) + kecove + ekip + topka + aksesoari
    console.log(suma)
}

basketbolnoOborudvane(["365"])
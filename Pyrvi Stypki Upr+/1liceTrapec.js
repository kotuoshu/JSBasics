function liceTrapec(vhod){
    let b1 = Number(vhod[0])
    let b2 = Number(vhod[1])
    let h = Number(vhod[2])
    let lice = (b1 + b2) * h / 2
    let liceDo2 = lice.toFixed(2)
    console.log(liceDo2)
}

liceTrapec([8,
13,
7])
function naKryg(vhod){
    let r = Number(vhod[0])
    let lice = Math.PI * r * r
    let perimetyr = 2 * Math.PI * r
    console.log(lice.toFixed(2))
    console.log(perimetyr.toFixed(2))
}

naKryg([3])
function dostavka(vhod){
    let pile = Number(vhod[0]) * 10.35
    let riba = Number(vhod[1]) * 12.4
    let veg = Number(vhod[2]) * 8.15
    let desert = (pile + riba + veg) * 0.2
    let suma = pile + riba + veg + desert + 2.5
    console.log(suma)
}

dostavka(["2",
"4",
"3"])
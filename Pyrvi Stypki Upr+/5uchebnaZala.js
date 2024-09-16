function uchebnaZala(vhod){
    let w = Number(vhod[0]) * 100
    let h = (Number(vhod[1]) - 1) * 100
    let redB = Math.floor(w / 120)
    let kolonaB = Math.floor(h / 70)
    let brMesta = redB * kolonaB - 3
    console.log(brMesta)
}

uchebnaZala([8.4,
5.2])
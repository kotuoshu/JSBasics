function kino(vhod){
    let tipProjekciq = vhod[0]
    let redove = Number(vhod[1])
    let koloni = Number(vhod[2])

    switch(tipProjekciq){
        case "Premiere": console.log(`${(redove * koloni * 12).toFixed(2)} leva`); break
        case "Normal": console.log(`${(redove * koloni * 7.5).toFixed(2)} leva`); break
        case "Discount": console.log(`${(redove * koloni * 5).toFixed(2)} leva`); break
    }
}

kino(["Premiere",
"10",
"12"])
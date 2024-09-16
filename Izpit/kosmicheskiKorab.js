function kosmicheskiKorab(vhod){
    let b = Number(vhod[0])
    let a = Number(vhod[1])
    let h = Number(vhod[2])
    let hSredno = Number(vhod[3])

    let obem = a * b * h
    let staq = (hSredno + 0.40) * 4
    let hora = Math.floor(obem / staq)

    if (hora < 3){
        console.log("The spacecraft is too small.")
    } else if (hora > 10){
        console.log("The spacecraft is too big.")
    } else {
        console.log(`The spacecraft holds ${hora} astronauts.`) 
    }
    
}

kosmicheskiKorab(["3.5",
"4",
"5",
"1.70"])

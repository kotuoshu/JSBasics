function licaNaFiguri(vhod){

    let figura = vhod[0]
    let a = Number(vhod[1])
    let b = Number(vhod[2])

    let liceKvadrat = (a * a).toFixed(3)
    let licePravoygylnik = (a * b).toFixed(3)
    let liceKryg = (Math.PI * a * a).toFixed(3)
    let liceTriygylnik = (a * b / 2).toFixed(3)

    if (figura == "square"){
        console.log(liceKvadrat)
    } else if (figura == "rectangle"){
        console.log(licePravoygylnik)
    } else if (figura == "circle"){
        console.log(liceKryg)
    } else {
        console.log(liceTriygylnik)
    }
}

licaNaFiguri(["triangle",
"4.5",
"20"])
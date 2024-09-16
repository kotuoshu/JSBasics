function novDom(vhod){
    let cvete = vhod[0]
    let br = Number(vhod[1])
    let budjet = Number(vhod[2])
    let suma = 0
    switch(cvete){
        case "Roses": suma = br * 5
            if (br > 80){
                suma *= 0.9
            } break
        case "Dahlias": suma = br * 3.8
            if (br > 90){
                suma *= 0.85
            } break
        case "Tulips": suma = br * 2.8
            if (br > 80){
                suma *= 0.85
            } break
        case "Narcissus": suma = br * 3
            if (br < 120){
                suma *= 1.15
            } break
        case "Gladiolus": suma = br * 2.5
        if (br < 80){
            suma *= 1.2
        } break
    }
    if (budjet >= suma){
        console.log(`Hey, you have a great garden with ${br} ${cvete} and ${(budjet - suma).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(suma - budjet).toFixed(2)} leva more.`)
    }
}

novDom(["Tulips",
"88",
"260"])
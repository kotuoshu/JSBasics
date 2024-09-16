function tyrgovskiKomisionni(vhod){
    let grad = vhod[0]
    let prodajbi = Number(vhod[1])

    switch (grad){
        case "Sofia": if (prodajbi >= 0 && prodajbi <= 500){
            console.log((0.05 * prodajbi).toFixed(2))
        } else if (prodajbi > 500 && prodajbi <= 1000){
            console.log((0.07 * prodajbi).toFixed(2))
        } else if (prodajbi > 1000 && prodajbi <= 10000){
            console.log((0.08 * prodajbi).toFixed(2))
        } else if (prodajbi > 10000){
            console.log((0.12 * prodajbi).toFixed(2))
        } else {
            console.log("error")
        }; break
        case "Varna": if (prodajbi >= 0 && prodajbi <= 500){
            console.log((0.045 * prodajbi).toFixed(2))
        } else if (prodajbi > 500 && prodajbi <= 1000){
            console.log((0.075 * prodajbi).toFixed(2))
        } else if (prodajbi > 1000 && prodajbi <= 10000){
            console.log((0.1 * prodajbi).toFixed(2))
        } else if (prodajbi > 10000){
            console.log((0.13 * prodajbi).toFixed(2))
        } else {
            console.log("error")
        }; break
        case "Plovdiv": if (prodajbi >= 0 && prodajbi <= 500){
            console.log((0.055 * prodajbi).toFixed(2))
        } else if (prodajbi > 500 && prodajbi <= 1000){
            console.log((0.08 * prodajbi).toFixed(2))
        } else if (prodajbi > 1000 && prodajbi <= 10000){
            console.log((0.12 * prodajbi).toFixed(2))
        } else if (prodajbi > 10000){
            console.log((0.145 * prodajbi).toFixed(2))
        } else {
            console.log("error")
        }; break
        default: console.log("error"); break
    }
}

tyrgovskiKomisionni(["Sofia",
"1500"])
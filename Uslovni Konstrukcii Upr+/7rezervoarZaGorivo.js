function rezervoarZaGorivo(vhod){
    let gorivo = vhod[0]
    let litri = Number(vhod[1])

    if (litri >= 25){
        if (gorivo == "Diesel"){
            console.log("You have enough diesel.")
        } else if (gorivo == "Gasoline"){
            console.log("You have enough gasoline.")
        } else if (gorivo == "Gas"){
            console.log("You have enough gas.")
        } else {
            console.log("Invalid fuel!")
        }
    } else {
        if (gorivo == "Diesel"){
            console.log("Fill your tank with diesel!")
        } else if (gorivo == "Gasoline"){
            console.log("Fill your tank with gasoline!")
        } else if (gorivo == "Gas"){
            console.log("Fill your tank with gas!")
        } else {
            console.log("Invalid fuel!")
        }
    }
    
}

rezervoarZaGorivo(["Diesel",
    10])
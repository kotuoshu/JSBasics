function denOtSedmicata(vhod){
    let den = Number(vhod[0])
    if (den == 1){
        console.log("Monday")
    } else if (den == 2){
        console.log("Tuesday")
    } else if (den == 3){
        console.log("Wednesday")
    } else if (den == 4){
        console.log("Thursday")
    } else if (den == 5){
        console.log("Friday")
    } else if (den == 6){
        console.log("Saturday")
    } else if (den == 7){
        console.log("Sunday")
    } else {
        console.log("Error")
    }
}

denOtSedmicata (["1"])
function pochivenIliRaboten(vhod){
    let den = vhod[0]
    if (den == "Saturday" || den == "Sunday"){
        console.log("Weekend")
    } else if (den == "Monday" || den == "Tuesday" || den == "Wednesday" || den == "Thursday" || den == "Friday"){
        console.log("Working day")
    } else {
        console.log("Error")
    }
}

pochivenIliRaboten(["Monday"])
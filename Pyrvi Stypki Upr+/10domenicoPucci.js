function domenicoPucci(vhod){
    let weza = Number(vhod[0])
    if (weza < 5){
        console.log("unknown")
    }
    if (weza >= 5 && weza < 12){
        console.log("Cold")
    }
    if (weza >= 12 && weza < 15){
        console.log("Cool")
    }
    if (weza >= 15 && weza < 20){
        console.log("Mild")
    }
    if (weza >= 20 && weza < 26){
        console.log("Warm")
    }
    if (weza >= 26 && weza <= 35){
        console.log("Hot")
    }
    if (weza > 35){
        console.log("unknown")
    }
}

domenicoPucci(["20"])
function naVremeZaIzpit(vhod){
    let cI = Number(vhod[0])
    let mI = Number(vhod[1])
    let cP = Number(vhod[2])
    let mP = Number(vhod[3])

    let cIm = cI * 60 + mI
    let cPm = cP * 60 + mP
    
    if(cPm > cIm){
        console.log("Late")
    } else if(cPm == cIm || cPm + 30 >= cIm){
        console.log("On time")
    } else {
        console.log("Early")
    }

    if(cIm - cPm > 0 && cIm - cPm < 60){
        console.log(`${cIm - cPm} minutes before the start`)
    } else if (cIm - cPm < 0 && cIm - cPm > -60){
        console.log(`${-(cIm - cPm)} minutes after the start`)
    } else if (cPm - cIm >= 60 && (cPm - cIm)%60 < 10){
        console.log(`${(Math.floor((cPm - cIm)/60))}:0${(cPm - cIm)%60} hours after the start`)
    } else if (cIm - cPm >= 60 && (cIm - cPm)%60 < 10){
        console.log(`${(Math.floor((cIm - cPm)/60))}:0${(cIm - cPm)%60} hours before the start`)
    } else if (cPm - cIm >= 60){
        console.log(`${(Math.floor((cPm - cIm)/60))}:${(cPm - cIm)%60} hours after the start`)
    } else if (cIm - cPm >= 60){
        console.log(`${(Math.floor((cIm - cPm)/60))}:${(cIm - cPm)%60} hours before the start`)
    }
}

naVremeZaIzpit(["11",
"30",
"12",
"29"])

function vyzrastIPol(vhod){
    let vyzrast = Number(vhod[0])
    let pol = vhod[1]
    if (pol == "m"){
        if (vyzrast >= 16){
            console.log("Mr.")
        } else {
            console.log("Master")
        }
    } else {
        if (vyzrast >= 16){
            console.log("Ms.")
        } else {
            console.log("Miss")
        }
    }
}

vyzrastIPol(["12",
"f"])
function infoSkorost(vhod){
    let skorost = Number(vhod[0])
    if (skorost <= 10){
        console.log("slow")
    }
    if (skorost > 10 && skorost <= 50){
        console.log("average")
    }
    if (skorost > 50 && skorost <= 150){
        console.log("fast")
    }
    if (skorost > 150 && skorost <= 1000){
        console.log("ultra fast")
    }
    if (skorost > 1000){
        console.log("extremely fast")
    }
}

infoSkorost(["126"])
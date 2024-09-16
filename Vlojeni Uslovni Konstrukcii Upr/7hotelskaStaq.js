function hotelskaStaq(vhod){
    let mesec = vhod[0]
    let noshtuvki = Number(vhod[1])
    let studio = noshtuvki
    let apartament = noshtuvki

    switch(mesec){
        case "May":
        case "October": studio *= 50
            apartament *= 65 
            if (noshtuvki >7 && noshtuvki<=14){
                studio *= 0.95
            } else if (noshtuvki>14){
                studio *=0.7
                apartament *= 0.9
            } break
        case "June":
        case "September": studio *= 75.2
            apartament *= 68.7
            if (noshtuvki>14){
                studio *=0.8
                apartament*=0.9
            } break
        case "July":
        case "August": studio *= 76
            apartament *= 77
            if (noshtuvki>14){
                apartament*=0.9
            } break
    }
    console.log(`Apartment: ${apartament.toFixed(2)} lv.`)
    console.log(`Studio: ${studio.toFixed(2)} lv.`)
}

hotelskaStaq(["May",
"15"])
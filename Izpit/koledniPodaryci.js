function koledniPodaryci(vhod){
    let index = 0
    let god = vhod[index]
    index++
    let kids = 0
    let adults = 0

    while(god !== "Christmas"){
        if (god <= 16){
            kids++
        } else {
            adults++
        }
        
        god = vhod[index]
        index++
    }
    console.log(`Number of adults: ${adults}`)
        console.log(`Number of kids: ${kids}`)
        console.log(`Money for toys: ${kids * 5}`)
        console.log(`Money for sweaters: ${adults * 15}`)
}

koledniPodaryci(["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"])

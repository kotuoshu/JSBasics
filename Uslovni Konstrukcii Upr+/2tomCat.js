function tomCat(vhod){
    let pochivni = Number(vhod[0])
    
    let rabotni = 365 - pochivni
    let igra = pochivni * 127 + rabotni * 63
    
    if (igra > 30000){
        let h = Math.floor((igra - 30000) / 60)
        let m = (igra - 30000) % 60
        console.log("Tom will run away")
        console.log(`${h} hours and ${m} minutes more for play`)
    } else {
        let h = Math.floor((30000 - igra) / 60)
        let m = (30000 - igra) % 60
        console.log("Tom sleeps well")
        console.log(`${h} hours and ${m} minutes less for play`)
    }
}

tomCat(["113"])
function cena(vhod){
    let plosht=Number(vhod[0])
    let bezOtstypka=plosht*7.61
    let otstypka=bezOtstypka*0.18
    let sOtstypka=bezOtstypka-otstypka
    console.log(`The final price is: ${sOtstypka} lv.`)
    console.log(`The discount is: ${otstypka} lv.`)
}

cena(["150"])
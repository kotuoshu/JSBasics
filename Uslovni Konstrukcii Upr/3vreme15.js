function vreme15(vhod){

    let chas = Number(vhod[0])
    let min = Number(vhod[1])

    if (min < 45 && chas == 23){
        min += 15
    } else if (min < 45 && chas != 23){
        min += 15
    } else if (min > 44 && chas != 23){
        chas += 1
        min -= 45
    } else if (min > 44 && chas == 23){
        chas = 0
        min -= 45
    }

    if (min > 9){
        console.log(`${chas}:${min}`)
    } else {
        console.log(`${chas}:0${min}`)
    }
}

vreme15(["1",
"46"])
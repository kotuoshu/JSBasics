function cDoF(vhod){
    let c = Number(vhod[0])
    let f = c * 1.8 + 32
    let f1 = f.toFixed(2)
    console.log(f1)
}

cDoF([32.3])
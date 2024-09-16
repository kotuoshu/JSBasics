function trybiVBasejn(vhod){
    let v = Number(vhod[0])
    let p1 = Number(vhod[1])
    let p2 = Number(vhod[2])
    let h = Number(vhod[3])

    let otP1 = p1 * h
    let otP2 = p2 * h
    let otP = otP1 + otP2
    let prcntV = (otP) * 100 / v
    let prcntP1 = otP1 * 100 / otP
    let prcntP2 = otP2 * 100 / otP

    if (otP1 + otP2 <= v){
        console.log(`The pool is ${(prcntV).toFixed(2)}% full. Pipe 1: ${(prcntP1).toFixed(2)}%. Pipe 2: ${(prcntP2).toFixed(2)}%.`)
    } else {
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${(otP - v).toFixed(2)} liters.`)
    }
}

trybiVBasejn([100,
    100,
    100,
    2.5])
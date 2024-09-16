function preboqdisvane(vhod){
    let naylon = (Number(vhod[0]) +2) * 1.5
    let boq = Number(vhod[1]) * 1.1 * 14.5
    let razreditel = Number(vhod[2]) * 5
    let suma = naylon + boq + razreditel + 0.4
    let maystori = suma * 0.3 * Number(vhod[3])
    console.log(suma + maystori)
}

preboqdisvane(["5",
"10",
"10",
"1"])
function obednaPochivka(vhod){
    let serial = vhod[0]
    let epizod = Number(vhod[1])
    let pochivka = Number(vhod[2])

    let obqd = pochivka / 8
    let otdih = pochivka / 4
    let vreme = epizod + obqd + otdih

    if (pochivka >= vreme){
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(pochivka - vreme)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(vreme - pochivka)} more minutes.`)
    }
}

obednaPochivka(["Teen Wolf",
"48",
"60"])
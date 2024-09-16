function magazinZaCvetq(vhod){
    let magnolii = Number(vhod[0])
    let zumbuli = Number(vhod[1])
    let rozi = Number(vhod[2])
    let kaktusi = Number(vhod[3])
    let podaryk = Number(vhod[4])

    let pechalba = (magnolii * 3.25 + zumbuli * 4 + rozi * 3.5 + kaktusi * 8) * 0.95

    if (pechalba >= podaryk){
        console.log(`She is left with ${Math.floor(pechalba - podaryk)} leva.`)
    } else {
        console.log(`She will have to borrow ${Math.ceil(podaryk - pechalba)} leva.`)
    }
}

magazinZaCvetq([2,
    3,
    5,
    1,
    50])
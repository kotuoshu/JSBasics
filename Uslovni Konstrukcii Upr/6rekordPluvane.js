function rekordPluvane(vhod){
    let rSec = Number(vhod[0])
    let rMetri = Number(vhod[1])
    let iSecZaM = Number(vhod[2])

    let iSec = rMetri * iSecZaM
    let zabavqne = Math.floor(rMetri / 15) * 12.5
    let obshtoVreme = iSec + zabavqne

    if (rSec > obshtoVreme){
        console.log(`Yes, he succeeded! The new world record is ${(obshtoVreme).toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(obshtoVreme - rSec).toFixed(2)} seconds slower.`)
    }
}

rekordPluvane(["10464",
"1500",
"20"])
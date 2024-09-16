function mashinaZaKopaene(vhod){
    let videoKarta = Number(vhod[0])
    let prehodnik = Number(vhod[1])
    let tok = Number(vhod[2])
    let pechalba = Number(vhod[3])

    let izharcheni = videoKarta * 13 + prehodnik * 13 + 1000
    let vryshtane = (pechalba - tok) * 13
    let ddni = izharcheni / vryshtane
    console.log(izharcheni)
    console.log(Math.ceil(ddni))

}

mashinaZaKopaene([700,
15,
0.20,
2])
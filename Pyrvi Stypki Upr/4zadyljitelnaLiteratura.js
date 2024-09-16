function lit(vhod){
    let stranici = Number(vhod[0])
    let straniciZaChas = Number(vhod[1])
    let dni = Number(vhod[2])
    let chasoveNaDen = (stranici / straniciZaChas) / dni
    console.log(chasoveNaDen)
}

lit(["212",
"20",
"2"])
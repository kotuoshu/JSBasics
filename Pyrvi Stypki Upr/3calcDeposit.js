function calcDepozit(vhod){
    let depoziranaSuma = Number(vhod[0])
    let srokNaDepozita = Number(vhod[1]) / 100
    let godishenLihvenProcent = Number(vhod[2])
    let suma = depoziranaSuma + srokNaDepozita * ((depoziranaSuma * godishenLihvenProcent) / 12)
    console.log(suma)
}

calcDepozit(["2350",
"6",
"7"])
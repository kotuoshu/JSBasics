function akvarium(vhod){
    let dyljina = Number(vhod[0]) / 10
    let shirochina = Number(vhod[1]) / 10
    let visochina = Number(vhod[2]) / 10
    let procent = Number(vhod[3]) / 100
    let obem = dyljina * shirochina * visochina
    let suma = obem - procent * obem
    console.log(suma)
}

akvarium(["85",
"75",
"47",
"17"])
function ribnaBorsa(vhod){
    let palamud = Number(vhod[2]) * 1.6 * Number(vhod[0])
    let safrid = Number(vhod[3]) * 1.8 * Number(vhod[1])
    let midi = Number(vhod[4]) * 7.5
    let smetka = (midi + palamud + safrid).toFixed(2)
    console.log(smetka)
}

ribnaBorsa([6.90, //cena na skumriq
4.20, //cena na caca
1.5, //kila palamud
2.5, //kila safrid
1]) //kila midi
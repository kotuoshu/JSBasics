function arch(vhod){
    let ime=vhod[0]
    let proekti=Number(vhod[1])
    let vreme=proekti*3
    console.log(`The architect ${ime} will need ${vreme} hours to complete ${proekti} project/s.`)
}

arch(["Niki",
"8"])
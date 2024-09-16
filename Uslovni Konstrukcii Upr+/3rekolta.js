function rekolta(vhod){
    let xLoze = Number(vhod[0])
    let yGrozde = Number(vhod[1])
    let zLitri = Number(vhod[2])
    let brRabotnici = Number(vhod[3])

    let obshtoGrozde = xLoze * yGrozde
    let vino = 0.4 * obshtoGrozde / 2.5

    if (vino < zLitri){
        console.log(`It will be a tough winter! More ${Math.floor(zLitri - vino)} liters wine needed.`)
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(vino)} liters.`)
        console.log(`${Math.ceil(vino - zLitri)} liters left -> ${Math.ceil((vino - zLitri) / brRabotnici)} liters per person.`)
    }
}

rekolta([650,
    2,
    175,
    3])
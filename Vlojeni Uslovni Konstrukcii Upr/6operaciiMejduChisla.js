function operaciiMejduChisla(vhod){
    let a = Number(vhod[0])
    let b = Number(vhod[1])
    let znak = vhod[2]

    switch(znak){
        case "+": if ((a+b) % 2 == 0){
            console.log(`${a} + ${b} = ${a + b} - even`)
        } else{
            console.log(`${a} + ${b} = ${a + b} - odd`)
        } break
        case "-": if ((a-b) % 2 == 0){
            console.log(`${a} - ${b} = ${a - b} - even`)
        } else{
            console.log(`${a} - ${b} = ${a - b} - odd`)
        } break
        case "*": if ((a*b) % 2 == 0){
            console.log(`${a} * ${b} = ${a * b} - even`)
        } else{
            console.log(`${a} * ${b} = ${a * b} - odd`)
        } break
        case "/": if (b == 0){
            console.log(`Cannot divide ${a} by zero`)
        } else{
            console.log(`${a} / ${b} = ${(a / b).toFixed(2)}`)
        } break
        case "%": if (b == 0){
            console.log(`Cannot divide ${a} by zero`)
        } else{
            console.log(`${a} % ${b} = ${(a % b)}`)
        } break
    }
}

operaciiMejduChisla(["10",
"12",
"+"])
function catFood(vhod){
    let br = Number(vhod[0])
    let kotka = 0
    let gr1 = 0
    let gr2 = 0
    let gr3 = 0
    let sum = 0
    for (let index = 1; index <= br; index++){
       kotka = Number(vhod[index]) 
       if (kotka < 200 && kotka >= 100){
          gr1++
       } else if (kotka < 300 && kotka >= 200){
        gr2++
     } else if (kotka < 400 && kotka >= 300){
        gr3++
     }
     sum +=kotka
    }
    console.log(`Group 1: ${gr1} cats.`)
     console.log(`Group 2: ${gr2} cats.`)
     console.log(`Group 3: ${gr3} cats.`)
     console.log(`Price for food per day: ${(sum/1000*12.45).toFixed(2)} lv.`)
}

catFood(["6",
"102",
"236",
"123",
"399",
"342", 
"222"])

function chislaNa9(vhod){
    let a = Number(vhod[0])
    let b = Number(vhod[1])
    let sum = 0
    let buff = ""
    for (let i = a; i <= b; i++){
        if (i % 9 == 0){
            buff = buff + i + "\n"
            sum += i
        }
    }
    console.log(`The sum: ${sum}`)
    console.log(buff)
}

chislaNa9(["100", "200"])
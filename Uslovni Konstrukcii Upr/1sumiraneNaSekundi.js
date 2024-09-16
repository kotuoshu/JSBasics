function sumiraneNaSekundi(vhod){
    let timeFirst = Number(vhod[0])
    let timeSecond = Number(vhod[1])
    let timeThird = Number(vhod[2])

    let totalTime = timeFirst + timeSecond + timeThird
    let minutes = Math.floor(totalTime / 60)
    let seconds = totalTime % 60
    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`)
    }else{
        console.log(`${minutes}:${seconds}`)    
    }
    
}

sumiraneNaSekundi(["35",
"45",
"44"])

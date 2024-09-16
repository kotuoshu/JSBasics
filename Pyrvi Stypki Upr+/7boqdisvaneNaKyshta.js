function boqdisvaneNaKyshta(vhod){
    let x = Number(vhod[0])
    let y = Number(vhod[1])
    let h = Number(vhod[2])
    let zeleno = ((2 * x * x - 1.2 * 2 + 2 * x * y - 2 * 1.5 * 1.5) / 3.4).toFixed(2)
    let cherveno = ((2 * x * y + x * h) / 4.3).toFixed(2)
    console.log(zeleno)
    console.log(cherveno)
}

boqdisvaneNaKyshta([6, //височината на къщата – реално число в интервала [2...100]
10, //дължината на страничната стена – реално число в интервала [2...100]
5.2]) //височината на триъгълната стена на прокрива – реално число в интервала [2...100]
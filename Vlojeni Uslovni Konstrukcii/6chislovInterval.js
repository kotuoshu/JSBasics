function chislovInterval(vhod){
    let a = Number(vhod[0])
    if (a >= -100 && a <= 100 && a != 0){
        console.log("Yes")
    } else {
        console.log("No")
    }
}

chislovInterval(["-25"])
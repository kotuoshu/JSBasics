function rabotnoVreme(vhod){
    let chas = Number(vhod[0])
    let den = vhod[1]

    switch (den){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday": if (chas >= 10 && chas <= 18){
            console.log("open")
        } else {
            console.log("closed")
        } break
        case "Sunday": console.log("closed"); break
    }
}

rabotnoVreme(["11",
"Sunday"])
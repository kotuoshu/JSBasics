function lqtnoObleklo(vhod){
    let t = Number(vhod[0])
    let vreme = vhod[1]

    let drehi = 0
    let obuvki = 0

    switch(vreme){
        case "Morning": if (t >= 10 && t <= 18){
            drehi = "Sweatshirt"
            obuvki = "Sneakers"
        } else if (t > 18 && t <= 24){
            drehi = "Shirt"
            obuvki = "Moccasins"
        } else {
            drehi = "T-Shirt"
            obuvki = "Sandals"
        }; break
        case "Afternoon": if (t >= 10 && t <= 18){
            drehi = "Shirt"
            obuvki = "Moccasins"
        } else if (t > 18 && t <= 24){
            drehi = "T-Shirt"
            obuvki = "Sandals"
        } else {
            drehi = "Swim Suit"
            obuvki = "Barefoot"
        }; break
        case "Evening": if (t >= 10 && t <= 18){
            drehi = "Shirt"
            obuvki = "Moccasins"
        } else if (t > 18 && t <= 24){
            drehi = "Shirt"
            obuvki = "Moccasins"
        } else {
            drehi = "Shirt"
            obuvki = "Moccasins"
        }; break
    }

    console.log(`It's ${t} degrees, get your ${drehi} and ${obuvki}.`)
}

lqtnoObleklo(["22",
"Afternoon"])
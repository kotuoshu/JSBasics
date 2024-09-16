function futbolniSuveniri(vhod){
    let otbor = vhod[0]
    let suvenir = vhod[1]
    let br = Number(vhod[2])

    switch(otbor){
        case "Argentina": switch(suvenir){
            case "flags": console.log(`Pepi bought ${br} flags of Argentina for ${(br * 3.25).toFixed(2)} lv.`); break
            case "caps":console.log(`Pepi bought ${br} caps of Argentina for ${(br * 7.20).toFixed(2)} lv.`); break
            case "posters": console.log(`Pepi bought ${br} posters of Argentina for ${(br * 5.10).toFixed(2)} lv.`); break
            case "stickers": console.log(`Pepi bought ${br} stickers of Argentina for ${(br * 1.25).toFixed(2)} lv.`); break
            default : console.log("Invalid stock!")
        } break
        case "Brazil": switch(suvenir){
            case "flags": console.log(`Pepi bought ${br} flags of Brazil for ${(br * 4.20).toFixed(2)} lv.`); break
            case "caps":console.log(`Pepi bought ${br} caps of Brazil for ${(br * 8.50).toFixed(2)} lv.`); break
            case "posters": console.log(`Pepi bought ${br} posters of Brazil for ${(br * 5.35).toFixed(2)} lv.`); break
            case "stickers": console.log(`Pepi bought ${br} stickers of Brazil for ${(br * 1.20).toFixed(2)} lv.`); break
            default : console.log("Invalid stock!")
        } break
        case "Croatia": switch(suvenir){
            case "flags": console.log(`Pepi bought ${br} flags of Croatia for ${(br * 2.75).toFixed(2)} lv.`); break
            case "caps":console.log(`Pepi bought ${br} caps of Croatia for ${(br * 6.90).toFixed(2)} lv.`); break
            case "posters": console.log(`Pepi bought ${br} posters of Croatia for ${(br * 4.95).toFixed(2)} lv.`); break
            case "stickers": console.log(`Pepi bought ${br} stickers of Croatia for ${(br * 1.10).toFixed(2)} lv.`); break
            default : console.log("Invalid stock!")
        } break
        case "Denmark": switch(suvenir){
            case "flags": console.log(`Pepi bought ${br} flags of Denmark for ${(br * 3.10).toFixed(2)} lv.`); break
            case "caps":console.log(`Pepi bought ${br} caps of Denmark for ${(br * 6.50).toFixed(2)} lv.`); break
            case "posters": console.log(`Pepi bought ${br} posters of Denmark for ${(br * 4.80).toFixed(2)} lv.`); break
            case "stickers": console.log(`Pepi bought ${br} stickers of Denmark for ${(br * 0.90).toFixed(2)} lv.`); break
            default : console.log("Invalid stock!")
        } break
        default : console.log("Invalid country!")
    }
}

futbolniSuveniri(["Brazil", 
"stickers",
"5"])

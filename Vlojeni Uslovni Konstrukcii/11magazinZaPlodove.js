function magazinZaPlodove(vhod){
    let plod = vhod[0]
    let den = vhod[1]
    let kolichestvo = Number(vhod[2])

    switch (den){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday": switch(plod){
            case "banana": console.log((kolichestvo * 2.5).toFixed(2)); break
            case "apple": console.log((kolichestvo * 1.2).toFixed(2)); break
            case "orange": console.log((kolichestvo * 0.85).toFixed(2)); break
            case "grapefruit": console.log((kolichestvo * 1.45).toFixed(2)); break
            case "kiwi": console.log((kolichestvo * 2.7).toFixed(2)); break
            case "pineapple": console.log((kolichestvo * 5.5).toFixed(2)); break
            case "grapes": console.log((kolichestvo * 3.85).toFixed(2)); break
            default : console.log("error"); break
        } break
        case "Saturday":
        case "Sunday": switch(plod){
            case "banana": console.log((kolichestvo * 2.7).toFixed(2)); break
            case "apple": console.log((kolichestvo * 1.25).toFixed(2)); break
            case "orange": console.log((kolichestvo * 0.9).toFixed(2)); break
            case "grapefruit": console.log((kolichestvo * 1.6).toFixed(2)); break
            case "kiwi": console.log((kolichestvo * 3).toFixed(2)); break
            case "pineapple": console.log((kolichestvo * 5.6).toFixed(2)); break
            case "grapes": console.log((kolichestvo * 4.20).toFixed(2)); break
            default : console.log("error"); break
        } break
        default : console.log("error")
    }
}

magazinZaPlodove(["apple",
"Tuesday",
"2"])
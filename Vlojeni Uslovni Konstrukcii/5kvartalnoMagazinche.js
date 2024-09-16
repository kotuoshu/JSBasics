function kvartalnoMagazinche(vhod){
    let produkt = vhod[0]
    let grad = vhod[1]
    let kolichestvo = Number(vhod[2])
    switch (produkt){
        case "coffee":
            switch (grad){
                case "Sofia": console.log(kolichestvo * 0.5); break
                case "Plovdiv": console.log(kolichestvo * 0.4); break 
                case "Varna": console.log(kolichestvo * 0.45); break
            } break
        case "water":
            switch (grad){
                case "Sofia": console.log(kolichestvo * 0.8); break
                case "Plovdiv": 
                case "Varna": console.log(kolichestvo * 0.7); break
            } break
        case "beer":
            switch (grad){
                case "Sofia": console.log(kolichestvo * 1.2); break
                case "Plovdiv": console.log(kolichestvo * 1.15); break 
                case "Varna": console.log(kolichestvo * 1.1); break
            } break
        case "sweets":
            switch (grad){
                case "Sofia": console.log(kolichestvo * 1.45); break
                case "Plovdiv": console.log(kolichestvo * 1.3); break 
                case "Varna": console.log(kolichestvo * 1.35); break
            } break
        case "peanuts":
            switch (grad){
                case "Sofia": console.log(kolichestvo * 1.6); break
                case "Plovdiv": console.log(kolichestvo * 1.5); break 
                case "Varna": console.log(kolichestvo * 1.55); break
            } break
    }
}

kvartalnoMagazinche(["coffee",
"Varna",
"2"])
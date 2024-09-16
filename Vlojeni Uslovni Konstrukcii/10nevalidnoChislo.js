function nevalidnoChislo(vhod){
    let a = Number(vhod[0])
    if(!(a>=100 && a<=200 || a==0)){
        
        console.log("invalid")
    }
}

nevalidnoChislo(["75"])
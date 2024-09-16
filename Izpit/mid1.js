function experienceGaining(input){
    let expNeeded = Number(input.shift())
    let nBattles = Number(input.shift())
    
    let exp = 0
for (i=1; i<=nBattles; i++) {
    let expGained = input.shift();
    
    if (i % 3 == 0){
        exp = exp + expGained * 1.15
    } else if (i % 5 == 0){
        exp = exp + expGained * 0.9
    } else if (i % 15 == 0){
        exp = exp + expGained * 1.05
    } else {
        exp += expGained
    }
    if (exp>=expNeeded){
        console.log(`Player successfully collected his needed experience for ${i} battles.`)
        return
    }
}
console.log(`Player was not able to collect the needed experience, ${(expNeeded-exp).toFixed(2)} more needed.`)
}

experienceGaining([500,5,50,100,200,100,30])
experienceGaining([400,5,50,100,200,100,20])
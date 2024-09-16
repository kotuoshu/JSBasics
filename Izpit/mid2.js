function spaceTravel(input){
    let ammunition = input.pop()
    let fuel = input.pop()
    let route = input.pop().split('||')
    
    
    for(i=0; i<route.length; i++){
    let event = route[i].split(' ')
    let eventType = event[0]
    let eventValue = Number(event[1])

    if (eventType == 'Travel' && eventValue <= fuel){
        console.log(`The spaceship travelled ${eventValue} light-years.`)
        fuel-=eventValue
    } else if (eventType == 'Travel' && eventValue > fuel){
        console.log(`Mission failed.`)
        return
    }
    if (eventType== 'Enemy' && eventValue <= ammunition){
        console.log(`An enemy with ${eventValue} armour is defeated.`)
        ammunition-=eventValue
    } else if (eventType== 'Enemy' && eventValue > ammunition){
        if (eventValue*2<=fuel){
        console.log(`An enemy with ${eventValue} armour is outmaneuvered.`)
        fuel-=eventValue*2
        } else {
            console.log(`Mission failed.`)
            return
        }
    }
    if (eventType == 'Repair'){
        ammunition+=eventValue*2
        fuel+=eventValue
        console.log(`Ammunitions added: ${eventValue * 2}.`)
        console.log(`Fuel added: ${eventValue}.`)
    }
    if (eventType == 'Titan'){
        console.log(`You have reached Titan, all passengers are safe.`)
        return
    }
    }
    
    
}

spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan',
'50',
'80'])
console.log('------------')
spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
'60',
'100'])
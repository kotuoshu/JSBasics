function chatLogger(input){
    
    for (let current of input){
        let tokens = current.split(' ')
        let command = tokens.shift()
        if (command == 'Chat'){
            console.log(tokens.shift())
        }

        if (command == 'Delete'){

        }

        if (command == 'Edit'){

        }

        if (command == 'Pin'){

        }

        if (command == 'Spam'){

        }

        if (command == 'end'){
            break;
        }
    }

    //let fuel = input.pop()
    //let route = input.pop().split('||')
    
    
    //for(i=0; i<route.length; i++){
    //let event = route[i].split(' ')
    //let eventType = event[0]
    //let eventValue = Number(event[1])
    //}
}

chatLogger(['Chat Hello',
'Chat darling',
'Edit darling Darling',
'Spam how are you',
'Delete Darling',
'end'])
console.log('----------')
chatLogger(["Chat Hello",
"Delete John",
"Pin Hi",
"end"])
console.log('----------')
chatLogger(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])
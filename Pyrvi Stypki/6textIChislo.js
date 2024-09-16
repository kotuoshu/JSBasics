function li(vhod){
    let firstName=vhod[0]
    let lastName=vhod[1]
    let age=Number(vhod[2])
    let town=vhod[3]
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
}

li(["Nikolay", "Voynikov", "21", "Sofiq"])
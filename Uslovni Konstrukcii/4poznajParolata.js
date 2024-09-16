function poznajParolata(vhod){
    let parola = vhod[0]
    if (parola == "s3cr3t!P@ssw0rd"){
        console.log("Welcome")
    }else{
        console.log("Wrong password!")
    }
}

poznajParolata(["s3cr3t!P@ssw0rd"])
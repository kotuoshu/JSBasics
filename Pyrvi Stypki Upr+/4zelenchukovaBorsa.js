function zelenchukovaBorsa(vhod){
    let zelenchuci = Number(vhod[0]) * Number(vhod[2])
    let plodove = Number(vhod[1]) * Number(vhod[3])
    let sumaVEvro = ((zelenchuci + plodove) / 1.94).toFixed(2)
    console.log(sumaVEvro)
}

zelenchukovaBorsa([0.194,
19.4,
10,
10])
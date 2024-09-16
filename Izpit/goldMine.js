function ex(input) {

    let locations = Number(input[0]);

    let countOne = 1;


    for(let i = 0; i < locations; i++){
        
        let sum = 0;
        let expectedAverage = Number(input[countOne]);
        let daysToMine = Number(input[countOne + 1]);

        for(let k = 0; k < daysToMine; k++){

            sum+=Number(input[countOne + 2])
            countOne++;
            
        }

        countOne += 2;

        if(sum/daysToMine >= expectedAverage){
            console.log(`Good job! Average gold per day: ${(sum/daysToMine).toFixed(2)}.`);
        }
        else{
            console.log(`You need ${(expectedAverage-sum/daysToMine).toFixed(2)} gold.`);
        }
    }

}
    



ex(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])
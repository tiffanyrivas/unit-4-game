var wins = 0;
    var losses = 0;

    var winsText = document.getElementById("wins");
    var lossesText = document.getElementById("losses");




    $("#random-button").on("click", function(){
    var randNum = Math.floor(Math.random() * 100) + 15;
                
    var ranNum = document.getElementById("computer-pick");
    ranNum.textContent = randNum;
    console.log(randNum);


        var theTotal = 0;
        $('button').click(function(){
            theTotal = Number(theTotal) + Number($(this).val());
        $('#result').text("Total: "+theTotal);        
        

        // $('#result').text("Total: "+theTotal); 

        console.log(theTotal);

        if (theTotal <= randNum){
            console.log("WIN");
            wins++;
            
        }
        
        else {
            console.log("LOOSERRRRR");
            losses++;
            $('#result').text("Total: " + 0);
}

        // if ( $("#random-button").on("click") ) {
        //     $('#result').text("Total: " + 0);
        // }
        


        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
     });   
    });












// $("#random-button").on("click", function(){
//     var randNum = Math.floor(Math.random() * 75) + 20;
                
//     var ranNum = document.getElementById("computer-pick");
//     ranNum.textContent = randNum;
//     console.log(randNum);
// })




// // $("#button-red").on("click", function(){
// //     var red = document.getElementById("result");
// //     red.textContent = 1;
// //     result++;
    
// // });

// // $("#button-blue").on("click", function(){
// //     var blue = document.getElementById("result");
// //     blue.textContent = 5;
// //     result++;
    
// // })
// var result = 0;
// $('button').click(function(){

//    result = Number(result) + Number($(this).val());
   
//     $('.total').text("Total: "+ result);        
// });

// $('.total').text("Total: "+ result);        


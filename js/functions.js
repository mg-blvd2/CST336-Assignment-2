$("#img1").hide();
$("#img2").hide();
$("#img3").hide();
$("#message").hide();

var amountLeft = 500; //The amount of money we start with.
var curMultiplier = Math.ceil(Math.random() * 10); //This will create the winnings multiplier
var currentImages = [0, 0, 0] //This array decides what image to print out
var currentBet; //This will hold the users current bet

//Adds messagess the page
$("#moneyAmount").html(`Amount left: ${amountLeft}`)
$("#multiplier").html(`Current multiplier: ${curMultiplier}`)

function checkBets(){
  $("#message").show();
  currentBet = parseInt($("#wagerAmount").val());

  //The bets must be positive. No negative bets
  if(currentBet <= 0){
    $("#message").html('<p class="text-danger"> The betting value should be positive</p>');
  }else if(amountLeft <= 0){
    //This prevents anything from happenning after the user runs out of money.
  }else{
    for(var i = 0; i < 3; i++){
      //This section randomely  chooses what images will be displayed on the
      //slot machine.
      currentImages[i] = Math.floor(Math.random() * 10) % 3;
      
      if(currentImages[i] == 0){
        //This will hide the image div to display a 7 at the current location
        $(`#img${i + 1}`).hide();
      }else if(currentImages[i] == 1){
        //This will diaplay the cherries image at the curent location
        $(`#img${i + 1}`).show();
        $(`#img${i + 1}`).html('<img src="images/cherries.jpg" alt="cherries">');
      }else{
        //This will display a bar at the current location.
        $(`#img${i + 1}`).show();
        $(`#img${i + 1}`).html('<img src="images/bar.png" alt="cherries">');
      }
    }

    //This if statement will create the logic for the outcome of the spin. If
    //the values are the same, then the user will earn money. If not, the user
    //will lose money. The correct messages will be displayed to the user.
    //The amount of money and the multiplier will also be changed.
    if(currentImages[0] == currentImages[1] && currentImages[0] == currentImages[2]){
      amountLeft += currentBet * curMultiplier;
      $("#message").html(`<p class="text-success"> You earned ${currentBet * curMultiplier} dollars</p>`);
      curMultiplier = Math.ceil(Math.random() * 10);
      $("#moneyAmount").html(`Amount left: ${amountLeft}`);
      $("#multiplier").html(`Current multiplier: ${curMultiplier}`);
    }else{
      amountLeft -= currentBet;
      $("#message").html(`<p class="text-warning"> You lost ${currentBet} dollars</p>`);
      curMultiplier = Math.ceil(Math.random() * 10);
      $("#moneyAmount").html(`Amount left: ${amountLeft}`);
      $("#multiplier").html(`Current multiplier: ${curMultiplier}`);
      if(amountLeft <= 0){
        $("#message").html(`<p class="text-danger"> You lost all of your money.</p>`);
      }
    }
  }
}

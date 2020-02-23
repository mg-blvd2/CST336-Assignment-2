$("#img1").hide();
$("#img2").hide();
$("#img3").hide();
$("#message").hide();

var amountLeft = 500;
var curMultiplier = Math.ceil(Math.random() * 10);
var currentImages = [0, 0, 0]
var currentBet;

$("#moneyAmount").html(`Amount left: ${amountLeft}`)
$("#multiplier").html(`Current multiplier: ${curMultiplier}`)

function checkBets(){
  $("#message").show();
  currentBet = parseInt($("#wagerAmount").val());
  if(currentBet <= 0){
    $("#message").html('<p class="text-danger"> The betting value should be positive</p>');
  }else if(amountLeft <= 0){
  }else{
    for(var i = 0; i < 3; i++){
      currentImages[i] = Math.floor(Math.random() * 10) % 3;
      if(currentImages[i] == 0){
        $(`#img${i + 1}`).hide();
      }else if(currentImages[i] == 1){
        $(`#img${i + 1}`).show();
        $(`#img${i + 1}`).html('<img src="images/cherries.jpg" alt="cherries">');
      }else{
        $(`#img${i + 1}`).show();
        $(`#img${i + 1}`).html('<img src="images/bar.png" alt="cherries">');
      }
    }
    if(currentImages[0] == currentImages[1] && currentImages[0] == currentImages[2]){
      amountLeft += currentBet * curMultiplier;
      $("#message").html(`<p class="text-success"> You earned ${currentBet * curMultiplier} dollars</p>`);
      curMultiplier = Math.ceil(Math.random() * 10);
      $("#moneyAmount").html(`Amount left: ${amountLeft}`);
      $("#multiplier").html(`Current multiplier: ${curMultiplier}`);
    }else{
      amountLeft -= currentBet * curMultiplier;
      $("#message").html(`<p class="text-warning"> You lost ${currentBet * curMultiplier} dollars</p>`);
      curMultiplier = Math.ceil(Math.random() * 10);
      $("#moneyAmount").html(`Amount left: ${amountLeft}`);
      $("#multiplier").html(`Current multiplier: ${curMultiplier}`);
      if(amountLeft <= 0){
        $("#message").html(`<p class="text-danger"> You lost all of your money.</p>`);
      }
    }
  }
}

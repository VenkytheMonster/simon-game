buttonColors=["red","blue","green","yellow"];
gamePattern=[];
level=0;
enteredPattern=[];
started=false;
check=0;
$(document).keypress(function()
{
  if(!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
 
  }
);

  $(".btn").click(function()
  {
      var chosenColor=$(this).attr("id");
      enteredPattern.push(chosenColor);
      playSound(chosenColor);
      annimate(chosenColor);
      checkSolution(enteredPattern.length-1);
      
  });


function checkSolution(currentLevel) {

  if (gamePattern[currentLevel] === enteredPattern[currentLevel]) {
    if (enteredPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
    }



function nextSequence()
{
  level++;
  $("#level-title").text("Level " + level);

   var randomNumber=Math.random()*4;

   randomNumber=Math.floor(randomNumber);
   

   randomColor=buttonColors[randomNumber];

   gamePattern.push(randomColor);

   $("#"+randomColor).fadeIn().fadeOut().fadeIn();

   playSound(randomColor);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

function startOver()
{
  gamePattern=[];
  enteredPattern=[];
  level=0;
  started=false;
}

function annimate(chosenColor){
  $("#"+chosenColor).addClass("pressed");
  setTimeout(function(){
    $("#"+chosenColor).removeClass("pressed");
  },100);
}

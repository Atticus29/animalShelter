// Back End

function Animal(animalName, adoptionStatus){
  this.animalName = animalName;
  this.adoptionStatus = adoptionStatus;
}

// Front End





$(function(){
  var rhino = new Animal("rhino", false);
  var gorilla = new Animal("gorilla", false);
  var bat = new Animal("bat", false);

  $("#harambe-img").click(function(event){
    $("#harambe").toggle();
  });
  $("#count-img").click(function(event){
    $("#count").toggle();
  });
  $("#rambo-img").click(function(event){
    $("#rambo").toggle();
  });

  $("button").click(function(){
    event.preventDefault();
    var buttonID = $(this).attr('id');
    if(buttonID === "rhinoBtn"){
      console.log(rhino.adoptionStatus);
      rhino.adoptionStatus = true;
      $("#rambo-adopted").show();
      $("#recent-adopted").show();
      // console.log(rhino);
      console.log(rhino.adoptionStatus);
    } else if (buttonID === "gorillaBtn"){
      gorilla.adoptionStatus = true;
      $("#harambe-adopted").show();
      $("#rambo-adopted").show();
    } else if (buttonID === "batBtn") {
      bat.adoptionStatus = true;
      $("#count-adopted").show();
      $("#rambo-adopted").show();
    } else {
      console.log("Button ID doesn't match any existing animal");
    }
    // console.log(buttonID);
    if (rhino.adoptionStatus){
      console.log("Got here");
      $("#rhino").hide();
    }
    if (gorilla.adoptionStatus === true){
      $("#gorilla").hide();
    }
    if (bat.adoptionStatus === true){
      $("#bat").hide();
    }

    });
  });

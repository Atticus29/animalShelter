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

  $("button").click(function(){
    event.preventDefault();
    var buttonID = $(this).attr('id');
    if(buttonID === "rhinoBtn"){
      console.log(rhino.adoptionStatus);
      rhino.adoptionStatus = true;
      // console.log(rhino);
      console.log(rhino.adoptionStatus);
    } else if (buttonID === "gorillaBtn"){
      gorilla.adoptionStatus = true;
    } else if (buttonID === "batBtn") {
      bat.adoptionStatus = true;
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

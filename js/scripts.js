// Back End

function Animal(name, adoptionStatus){
  this.name = name;
  this.adoptionStatus = adoptionStatus;
}

// Front End
$(function(){
  var rhino = new Animal(rhino, false);
  var gorilla = new Animal(gorilla, true);
  var bat = new Animal(bat, false);

  if (rhino.adoptionStatus === true){
    $("#rhino").hide();
  }
  if (gorilla.adoptionStatus === true){
    $("#gorilla").hide();
  }
  if (bat.adoptionStatus === true){
    $("#bat").hide();
  }
});

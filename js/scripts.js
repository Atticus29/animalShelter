// Back End

function Animal(name, adoptionStatus){
  this.name = name;
  this.adoptionStatus = adoptionStatus;
}

// Front End
$(document).ready(function(){

  $("#harambe-img").click(function(event){
    $("#harambe").toggle();
  });
  $("#count-img").click(function(event){
    $("#count").toggle();
  });
  $("#rambo-img").click(function(event){
    $("#rambo").toggle();
  });
});

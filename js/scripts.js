$(document).ready(function(){
    var age = parseInt(prompt("Are you over 18? Please enter age below."));

      if(age >= 18) {
        $('.over-18').show();
      } else {
        $('.under-18').show();
      }




});

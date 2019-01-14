function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var theForm = document.forms['calorieForm'];
var gender = '';



function calculateTotal() {

  getGender();
  console.log(gender);









  function getGender() {

    if (document.getElementById('female').checked) {
      gender = 'female';

    } else {
      gender = 'male';
    };

    console.log(gender);
  }

  function calcHeight() {
    
  }

};





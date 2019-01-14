function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var theForm = document.forms['calorieForm'];


function calculateTotal() {
 

  getGender();
  console.log(gender);

  var formHeight = calcHeight();
  var formAge = getAge();
  var formWeight = getWeight();

  console.log(formHeight);
  console.log(formAge);
  console.log(formWeight);






  function getGender() {

    if (document.getElementById('female').checked) {
      gender = 'female';

    } else {
      gender = 'male';
    };

    console.log(gender);
  }



  function calcHeight() {
    var i = document.getElementById("inches");
    var inches = i.options[i.selectedIndex].text;

    var feet = document.getElementById("feet");
    var height = feet.options[feet.selectedIndex].text;


    height = parseInt(height);
    inches = parseInt(inches);

    var totalInches = height * 12;
    totalInches = totalInches + inches;


    console.log(totalInches);
    return totalInches;
  }

  function getAge() {
    var ageInput = document.getElementById('age');
    ageInput = ageInput.value;
    ageInput = parseInt(ageInput);
    return ageInput;

  }

  function getWeight() {
    var weightInput = document.getElementById('weight');
    weightInput = weightInput.value;
    weightInput = parseInt(weightInput);

    console.log(weightInput);
    return weightInput;
  }



}





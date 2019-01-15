function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var theForm = document.forms['calorieForm'];
var totalCal;

function calculateTotal() {


  getGender();
  console.log(gender);

  var formHeight = calcHeight();
  var formAge = getAge();
  var formWeight = getWeight();
  var formActivity = getActivityLevel();

  console.log(formHeight);
  console.log(formAge);
  console.log(formWeight);

  function calFormula() {
    if (gender === "male") {
      var totalCal = 66 + (6.3 * formWeight) + (12.9 * formHeight) - (6.8 * formAge);
      console.log(formActivity);
      totalCal = totalCal * formActivity;
      totalCal = Math.round(totalCal);
      console.log(totalCal);
    } else {
      var totalCal = 655 + (4.3 * formWeight) + (4.7 * formHeight) - (4.7 * formAge);
      totalCal = totalCal * formActivity;
      totalCal = Math.round(totalCal);
      console.log(totalCal);
    }

    var resultsDiv = document.getElementById('calcResults');



    var calAmt = document.createTextNode("You should be eating " + totalCal + " many calories");
    var para = document.createElement('p');
    console.log(totalCal);

    para.appendChild(calAmt);
    resultsDiv.appendChild(para);
    return totalCal;



  }

  calFormula();


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

  function getActivityLevel() {
    var activeLevel = document.getElementById('activityLevel');
    var levelInput = activeLevel.options[activeLevel.selectedIndex].text;
    var levelValue = activeLevel.options[activeLevel.selectedIndex].value;
    var multiplier;
    console.log(levelValue);

    switch (levelValue) {
      case "sedentry":
        multiplier = 1.2;

        break;

      case "lActive":
        multiplier = 1.375;
        break;

      case "mActive":

        multiplier = 1.55;
        break;

      case 'vActive':

        multiplier = 1.725;
        break;

      case 'xActive':

        multiplier = 1.9;
        break;

    }

    return multiplier;
  }








}



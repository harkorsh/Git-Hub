const doThisBtn = document.querySelector('#doThis');
const doThatBtn = document.getElementById('doThat');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

function doThis() {
  doThisBtn.style.background = 'black';
  doThisBtn.style.color = 'white';
  main.style.background = 'red';
  main.style.fontSize = '40px';
  console.log('doThis button was clicked');
}

function doThat() {
  footer.style.display = 'none';
  doThatBtn.style.background = 'green';
  console.log('do That button was clicked');
}


const myCar = new Car("Honda", "Civic", "2023", "Red");
// myCar.changeColor('White'); // Change color
// myCar.changeMake('Honda'); // Change Make
console.log("MY CAR\nMAKE: " + myCar.make + "\nMODEL: " + myCar.model + "\nYEAR: " + myCar.year + "\nCOLOR: " + myCar.color);
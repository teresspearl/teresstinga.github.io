/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let daysSelected = 0; 
const dailyCost = 35; 
const halfCost = 20; 
const days = document.querySelectorAll('.day-selector'); 
const full = document.querySelector('#full'); 
const half = document.querySelector('#half'); 
const clear = document.querySelector('#clear-button'); 
const showtotalCost = document.querySelector('#calculated-cost'); 

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

days.forEach(button => {
    button.addEventListener('click', function() {
      if (!button.classList.contains('clicked')) {
        button.classList.add('clicked');
        daysSelected++;
        recalculateCost();
      }
    });
  });

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clear.addEventListener('click', function() {
    days.forEach(button => {
      button.classList.remove('clicked');
    });
    daysSelected = 0;
    dailyCost = 35;
    full.classList.add('clicked');
    half.classList.remove('clicked');
    recalculateCost();
  });
  



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

full.addEventListener('click', function() {
    dailyCost = 35;
    full.classList.add('clicked');
    half.classList.remove('clicked');
    recalculateCost();
  });

half.addEventListener('click', function() {
    dailyCost = 20;
    half.classList.add('clicked');
    full.classList.remove('clicked');
    recalculateCost();
  });

// additional code to handle day selection and clearing

days.forEach(day => {
    day.addEventListener('click', () => {
      if (!day.classList.contains('clicked')) {
        day.classList.add('clicked');
        daysSelected++;
      }
      recalculateCost();
    });
  });

clear.addEventListener('click', () => {
    days.forEach(day => {
      if (day.classList.contains('clicked')) {
        day.classList.remove('clicked');
      }
    });
    daysSelected = 0;
    full.classList.add('clicked');
    half.classList.remove('clicked');
    recalculateCost();
  });

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.addEventListener('click', function() {
    dailyCost = 35;
    full.classList.add('clicked');
    half.classList.remove('clicked');
    recalculateCost();
  });


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculateCost() {
    const totalCost = dailyCost * daysSelected;
    showtotalCost.innerHTML = `${totalCost}`;
  }

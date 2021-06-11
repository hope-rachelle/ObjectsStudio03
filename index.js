
/*Write a crewMass function that returns the total mass of the selected crew members rounded to 1 decimal place.
    Code your crewMass function here:*/
function crewMass(crew){
  let totalMass = 0;
  for(let i = 0; i < crew.length; i++){
    totalMass = totalMass + crew[i].mass;
  }
  totalMass = Math.round(totalMass * 10)/10;
  return totalMass;
}
/* Code your fuelRequired function here:
The mass of the un-crewed rocket plus the food and other supplies is 75,000 kg... combine the rocket and crew masses, then calculate and return the amount of fuel needed to reach LEO. Add an extra 200 kg of fuel for each dog or cat on board, but only an extra 100 kg for the other species. Update fuelRequired to account for this, then round the final amount of fuel UP to the nearest integer.*/
function fuelRequired(crewMass, rocketMass, crew){
  let fuelMass = 0;
  let bonusFuel = 0;
  let totalFuel = 0;

  for(let i = 0; i < crew.length; i++){
    if(crew[i].species === 'dog' || crew[i].species === 'cat'){
      bonusFuel = bonusFuel + 200;
    } else{
      bonusFuel = bonusFuel + 100;
    };
  };
  fuelMass = (crewMass + rocketMass) * 9.5

  totalFuel = Math.ceil(fuelMass + bonusFuel);

  return totalFuel;
};


// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateB,candidateD,candidateF];
let rocketMass = 75000

console.log(`The mission has a launch mass of ${crewMass(crew)} kg and requires ${fuelRequired(crewMass(crew), rocketMass, crew)} kg of fuel.`);
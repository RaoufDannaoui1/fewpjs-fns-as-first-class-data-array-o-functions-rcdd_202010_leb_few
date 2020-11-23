
<<<<<<< HEAD
let wakeDog = function (dogName="Byron", dogBreed="poodle")){
  console.log(`Wake ${dogName} the  ${dogBreed}`);
  return `Wake ${dogName} the  ${dogBreed}`
}
let leashDog = function (dogName="Byron", dogBreed="poodle")){
  console.log(`Leash ${dogName} the  ${dogBreed}`);
  return `Leash ${dogName} the  ${dogBreed}`
}
let walkToPark = function (dogName="Byron", dogBreed="poodle")){
  console.log(`Walk to the park with ${dogName} the  ${dogBreed}`);
  return `Walk to the park with ${dogName} the  ${dogBreed}`
}
let throwFrisbee = function (dogName="Byron", dogBreed="poodle")){
  console.log(`Throw the frisbee for ${dogName} the  ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the  ${dogBreed}`
}
let walkHome = function (dogName="Byron", dogBreed="poodle")){
  console.log(`Walk home with ${dogName} the  ${dogBreed}`);
  return `Walk home with ${dogName} the  ${dogBreed}`
}
let unleashDog = function (dogName="Byron", dogBreed="poodle")){
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the  ${dogBreed}`
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];
function exerciseDog(dog,breed){

return routine.map(fn => fn(dog, breed))
=======
function wakeDog(dogName, dogBreed)){
  console.log(`Wake ${dogName} the poodle`);
}
function leashDog(dogName, dogBreed)){
  console.log(`Leash ${dogName} the poodle`);
}
function walkToPark(dogName, dogBreed)){
  console.log(`Walk to the park with ${dogName} the poodle`);
}
function throwFrisbee(dogName, dogBreed)){
  console.log(`Throw the frisbee for ${dogName} the poodle`);
}
function walkHome(dogName, dogBreed)){
  console.log(`Walk home with ${dogName} the poodle`);
}
function unleashDog(dogName, dogBreed)){
  console.log(`Unleash ${dogName} the poodle`);
}
let dogName = "Rex";
let dogBreed = "DEB";
let routine = [wakeDog(),leashDog(),walkToPark(),throwFrisbee(),walkHome(),unleashDog(),];
function exerciseDog(dogName,dogBreed){
  for (var i = 0; i < routine.length; i++) {
     routine[i];
  }
return routine[];
>>>>>>> 3445fd70b968b7947b4d9cf6cc2e6ec885a9dae3
}

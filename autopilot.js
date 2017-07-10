function getNewCar(){
return  {
  'city': 'Toronto',
  'passengers': 0,
  'gas': 100
 };
}

function addCars(cars, newCar){
  var car = cars.push(newCar);
  return console.log("Adding a new car to fleet. Fleet size is now " + cars.length + ".");
}

function pickUpPassenger(car){
  car["passengers"] += 1
  car["gas"] -= 10
  return console.log("Picked up passenger. Car now has " + car["passengers"] + "passengers.");
}


function getDestination(car){
  if (car["city"] === "Toronto") {
    return "Mississauga"}
  else if (car["city"] === "Mississauga") {
    return "London"}
  else if (car["city"] === "London") {
    return "Toronto"}
}

function fillUpGas(car) {
  var oldGas = car["gas"]
  car["gas"] = 100
  return console.log("Filled up to " + getGasDisplay(car["gas"]) + "on gas from" + getGasDisplay(oldGas) + ".");
}

function getGasDisplay(gasAmount) {
  return console.log(gasAmount)
}

function drive(car, cityDistance) {
  {
    if (car["gas"] < cityDistance) {
    return fillUpGas(car)
    };
  }
    car["city"] = getDestination(car)
    car["gas"] -= cityDistance
    return console.log("Drove to " + car["city"] + ". Remaning gas: " + getGasDisplay["gas"] + ".");
}

function dropOffPassengers(car) {
   var previousPassengers = car["passengers"]
   car["passengers"] = 0
   return console.log("Droppef off " + previousPassengers + "passengers.");
}

function act(car) {
   distanceBetweenCities = 50
   if (car["gas"] < 20) {
      fillUpGas(car)}
   else if (car["gas"] < 3) {
     pickUpPassenger(car)}
   else {
     if (car["gas"] < distanceBetweenCities) {
       return fillUpGas(car)}
     };
     droveTo = drive(car, distanceBetweenCities)
     passengersDropped = dropOffPassengers(car)
     return console.log(droveTo + passengersDropped)
}

function commandFleet(cars){
   for (var i = 0; i < cars.length; i ++) {
     var action = act(cars[i]);
     console.log("Car " + (i + 1) + ": " + action);
   }
   return console.log("---")
}

function addOneCarPerDay(cars, numDays) {
   for (var i = 0; i < numDays; i++) {
     var newCar = getNewCar;
     console.log(addCars(cars, newCar));
     return commandFleet(cars)
   };
}

var cars = [];
addOneCarPerDay(cars, 10);

var checkForShip = require('./ship_methods.js').checkForShip;

function validateLocation (player, coordinates) {
  var x = coordinates[0];
  var y = coordinates[1];

  var spaceAvailable = !checkForShip(player, coordinates);

  if ((x <= 9 && x >= 0) && (y <= 9 && y >= 0)) {
    return spaceAvailable; // decides whether this valid space is occupied
  } else {
    return false;
  }
}

function validateLocations (player, locations) {
  var validated = locations.map(function (location) {
    return validateLocation(player, location);
  });
  return validated.indexOf(false) === -1;
}

function placeShip (player, ship, startingCoordinates, direction) {
  var proposedLocations = [];
  var previousLocation,
    rowNumber,
    columnNumber;
  if (!direction){
      throw new Error('please include direction')
  }

  for (var i = 0; i < ship.size; i++) {
    previousLocation = proposedLocations[i - 1] || [];
    rowNumber = previousLocation[0];
    columnNumber = previousLocation[1];
    
    proposedLocations[i] = (i === 0)
      ? startingCoordinates
      : (direction === 'horizontal')
        ? [rowNumber, ++columnNumber]
        : [++rowNumber, columnNumber];
  }
  
  if (validateLocations(player, proposedLocations)) {
    ship.locations = proposedLocations;
  } else {
    return false;
  }
}

//use to generate random locations. add into placeShip
function getRandom(){
    let x = Math.floor(Math.random() * 9);
    let y = Math.floor(Math.random() * 9);
    return [x, y];
}

//use to generate random locations. add into placeShip
function getRandomDirection(){ 
    return Math.random() > 0.5
    ? 'horizontal'
    : 'vertical';
}


  
  module.exports = {
    placeShip: placeShip,
    validateLocations: validateLocations,
    validateLocation: validateLocation
  };
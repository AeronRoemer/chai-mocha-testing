function checkForShip(player, arr){
    let ship, shipPresent
  for(let i=0; i < player.ships.length; i++){
      ship = player.ships[i] //ship on this loop iteration
      shipPresent = ship.locations.filter(function(matchCoordinate){
          return (matchCoordinate[0] === arr[0]) && (matchCoordinate[1] === arr[1])
      })[0];
      //array comes back as undefined if there is not ship 
      if (shipPresent)
      {
          return ship
      } 
  }
  return false;
};

function damageShip(ship, arr){
   ship.damage.push(arr)
};

function fire(player, arr){
    let location = checkForShip(player, arr);
    if (location){
        damageShip(location, arr);
    }
}
function checkGameStatus(players){
    return false;
}

function takeTurn(player, guessFunction){
    const coordinates = guessFunction();
    fire(player, coordinates);
    let gameOver = checkGameStatus();
    return gameOver;
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;
module.exports.takeTurn = takeTurn;


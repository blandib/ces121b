// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function isHit() {
    // should return true if a randomly generated number is greater than .5, false if it is less than .5
    // Generate a random number between 0 and 1
    const randomNum = Math.random();

    // Check if the random number is less than 0.5 (50% chance)
    if (randomNum < 0.5) {
        return true; // It's a hit!
    } else {
        return false; // It's a miss.
    }
  }
  function shipCanFire(health, ammo) {
    // return true if the ships health is above 0 AND ammo is above 0 false otherwise
    return health > 0 && ammo > 0;
  }
 
console.log(shipCanFire(shipHealth, shipAmmo));

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}
function isDestroyed(health) {
    // return true if health is zero or less
    return health <= 0;
  }
  const healthValue = 7;
  console.log(`Is the object destroyed? ${isDestroyed(healthValue)}`);
function reloadShip(ship) {
    // reduce ship health by 1 and increase ammo by 3
   /* ship.ammo += 3;
    ship.health -= 1;
    return ship;*/
    shipHealth--;
    shipAmmo += 3;
  }
  const ship = { ammo: 5, health: 10 };
  const updatedShip = reloadShip(ship);
   console.log(`Updated ship: ${JSON.stringify(updatedShip)}`);

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

encounter();
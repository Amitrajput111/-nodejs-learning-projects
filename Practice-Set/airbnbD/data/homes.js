const registeredHomes = [];

function getHomes() {
  return registeredHomes;
}

function addHome(home) {
  registeredHomes.push(home);
  return home;
}

module.exports = { getHomes, addHome };

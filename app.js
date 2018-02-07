var planetNames = ["Jupiter", "Venus", "Saturn", "Mars"];
var distancesFromEarth = [5.2, 0.72, 9.5, 1.5];
var sunnyInAugust = [false, true, false, true];

//Display the planet information
for(var i = 0; i < planetNames.length; i++)
{
  console.log(planetNames[i]);
  console.log(distancesFromEarth[i]);
  console.log(sunnyInAugust[i]);
  console.log("----------");
}

//Find the sunny planets

console.log("These planets are sunny in August:");

for(var i = 0; i < planetNames.length; i++)
{
  if(sunnyInAugust[i])
  {
    console.log(planetNames[i]);
  }
}

//Find the closest planet

var closestPlanet = "";
var shortestDistance = 10;

for(var i = 0; i < planetNames.length; i++)
{
  if(distancesFromEarth[i] < shortestDistance)
  {
    shortestDistance = distancesFromEarth[i];
    closestPlanet = planetNames[i];
  }
}

console.log("Closest planet: " + closestPlanet);
console.log("Shortest distance: " + shortestDistance);

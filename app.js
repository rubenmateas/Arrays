window.onload = function() {

  var planetNames = ["Jupiter", "Venus", "Saturn", "Mars", "Uncreative"];
  var distancesFromEarth = [5.2, 0.72, 9.5, 1.5, 42.0];
  var sunnyInAugust = [false, true, false, true, false];

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

  var insert= "";

  for (var i = 0; i < planetNames.length; i++) {
    insert += "<span class='planet'>" + planetNames[i] + "</span>" + "<br />" + distancesFromEarth[i] + "<br />" + sunnyInAugust[i] + "<br />" + "-------- <br />";
    console.log(insert);
  }

  document.getElementById("main").innerHTML = "" + insert + "";
}

const fs = require("fs");
const path = require("path");
let currentDate = new Date();

//setting current season to default to fall if error occurs getting date to fit in range

const springStyle = "/css/springStyle.css";
const summerStlye = "/css/summerStyle.css";
const fallStyle = "/css/fallStyle.css";
const winterStyle = "/css/winterStyle.css";

class Season {
  constructor(season, dateStart, dateEnd, stylesheet) {
    this.season = season;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.stylesheet = stylesheet;
  }
}

let year = new Date().getFullYear();

//instances
const Spring = new Season(
  "Spring",
  new Date(year, 2, 20),
  new Date(year, 5, 21),
  springStyle
);
const Summer = new Season(
  "Summer",
  new Date(year, 5, 22),
  new Date(year, 8, 21),
  summerStlye
);
const Fall = new Season(
  "Fall",
  new Date(year, 8, 22),
  new Date(year, 11, 20),
  fallStyle
);
const Winter = Season(
  "Winter",
  new Date(year, 11, 21),
  new Date(year + 1, 2, 19),
  winterStyle
);

const seasons = [];
seasons.push(Spring, Summer, Fall, Winter);

let currentSeason = Fall;
// define currentSeason set value to Fall after Fall is defined

function changeSeason(season) {
  if (currentDate >= season.dateStart && currentDate <= season.dateEnd) {
    currentSeason = season;
  } else {
    return null;
  }
}

seasons.forEach((Element) => {
  changeSeason(Element);
});

module.exports = currentSeason;

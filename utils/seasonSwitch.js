const fs = require('fs');
const path = require('path');
let currentDate=new Date();
let currentSeason;

const springStyle='/css/springStyle.css';
const summerStlye = '/css/summerStyle.css';
const fallStyle = '/css/fallStyle.css'
const winterStyle = '/css/winterStyle.css'

class Season {
    constructor(season, dateStart, dateEnd, stylesheet) {
        this.season = season;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.stylesheet = stylesheet
    }

}
//instances
const Spring = new Season('Spring', new Date(2023, 2, 20), new Date(2023, 5, 21), springStyle);
const Summer = new Season('Summer', new Date(2023, 5, 22), new Date(2023, 8, 21), summerStlye);
const Fall = new Season('Fall', new Date(2023, 8, 22), new Date(2023, 11, 20), fallStyle);
const Winter = new Season('Winter', new Date(2023, 11, 21), new Date(2024, 2, 19), winterStyle);


const seasons = [];
seasons.push(Spring, Summer, Fall, Winter);


function changeSeason(season) {
    if (currentDate >= season.dateStart && currentDate <= season.dateEnd) {
        currentSeason = season
    }
    else {
        return null
    }
}

seasons.forEach(
    (Element) => {
        changeSeason(Element)
    }
)




module.exports = currentSeason
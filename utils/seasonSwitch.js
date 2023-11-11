var currentDate = new Date(2024,0,1);
let currentSeason;

class Season {
    constructor(season, dateStart, dateEnd) {
        this.season = season;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }

}


//instances
const Spring = new Season('Spring', new Date(2023, 2, 20), new Date(2023, 5, 21));
const Summer = new Season('Summer', new Date(2023, 5, 22), new Date(2023, 8, 21));
const Fall = new Season('Fall', new Date(2023, 8, 22), new Date(2023, 11, 20));
const Winter = new Season('Winter', new Date(2023, 11, 21), new Date(2024, 2, 19));


const seasons = [];
seasons.push(Spring, Summer, Fall, Winter);

function changeSeason(season){
    if(currentDate >= season.dateStart && currentDate <= season.dateEnd){
        currentSeason=season.season
    }
    else{
        return null
    }
}

seasons.forEach(
    (Element)=>{
        changeSeason(Element)
    }
)
module.exports=currentSeason
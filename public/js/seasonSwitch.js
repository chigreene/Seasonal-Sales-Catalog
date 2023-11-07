var currentDate = new Date();
var currentDate = new Date(2024,0,1);

class Season {
    constructor(season, dateStart, dateEnd) {
        this.season = season;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.holidays = [];
    }

    addHoliday(holiday, start, end, loginImages) {
        this.holidays.push({
            name: holiday,
            start: start,
            end: end,
            loginImages: loginImages
        });
    }

    getCurrentHoliday() {
        for (const holiday of this.holidays) {
            if (currentDate >= holiday.start && currentDate <= holiday.end) {
                return holiday;
            }
            // else if statment if there's no holiday you can send them a list of the upcoming holidays for that season 
        }
        return null; // No current holiday found
    }
}


//instances


const Spring = new Season('Spring', new Date(2023, 2, 20), new Date(2023, 5, 21));
Spring.addHoliday('Easter', new Date(2023, 3, 1), new Date(2023, 3, 30), ['/images/Spring/Easter/bunny.jpg', '/images/Spring/Easter/Eggs.jpg', '/images/Spring/Easter/goofy.jpg', '/images/Spring/Easter/happyEaster.jpg']);
Spring.addHoliday(`Mother's Day`, new Date(2023, 4, 1), new Date(2023, 4, 30), ['/images/Spring/MothersDay/happy.jpg', '/images/Spring/MothersDay/heart.jpg', '/images/Spring/MothersDay/love.jpg', '/images/Spring/MothersDay/mom.jpg']);


const Summer = new Season('Summer', new Date(2023, 5, 22), new Date(2023, 8, 21));
Summer.addHoliday('Independence Day', new Date(2023, 6, 1), new Date(2023, 6, 30), ['/images/Summer/IndependenceDay/firework.jpg', '/images/Summer/IndependenceDay/flags.jpg', '/images/Summer/IndependenceDay/statue.jpg', '/images/Summer/IndependenceDay/uncleSam.jpg']);
Summer.addHoliday('Labor Day', new Date(2023, 8, 1), new Date(2023, 8, 30), ['/images/Summer/LaborDay/labor.jpg', '/images/Summer/LaborDay/tool.jpg', '/images/Summer/LaborDay/worker.jpg', '/images/Summer/LaborDay/wrench.jpg']);


const Fall = new Season('Fall', new Date(2023, 8, 22), new Date(2023, 11, 20));
Fall.addHoliday('Halloween', new Date(2023, 9, 1), new Date(2023, 9, 31), ['/images/Fall/Halloween/jackolantern.jpg', '/images/Fall/Halloween/reeses.jpg', '/images/Fall/Halloween/skeletons.jpg', '/images/Fall/Halloween/witches-hat.jpg'])
Fall.addHoliday('Thanksgiving', new Date(2023, 10, 1), new Date(2023, 10, 30), ['/images/Fall/Thanksgiving/turkey.jpg', '/images/Fall/Thanksgiving/pumpkin.jpg', '/images/Fall/Thanksgiving/snoopy.jpg', '/images/Fall/Thanksgiving/pooh.jpg']);


const Winter = new Season('Winter', new Date(2023, 11, 21), new Date(2024, 2, 19));
Winter.addHoliday('Christmas', new Date(2023, 11, 1), new Date(2023, 11, 30), ['/images/Winter/Christmas/grinch.jpg', '/images/Winter/Christmas/kids.jpg', '/images/Winter/Christmas/olaf.jpg', '/images/Winter/Christmas/santa.jpg',]);
Winter.addHoliday(`New Year's Day`, new Date(2024, 0, 1), new Date(2024, 0, 30), ['/images/Winter/NewYears/baloons.jpg', '/images/Winter/NewYears/clock.jpg', '/images/Winter/NewYears/fireworks.jpg', '/images/Winter/NewYears/hat.jpg',]);


const seasons = [];
seasons.push(Spring, Summer, Fall, Winter);
seasons.forEach(Element=>{
    console.log(Element.getCurrentHoliday())
})


// functions
import { scrollerAnimation } from './scroller.js'

function changeSeason(season){
    if(currentDate >= season.dateStart && currentDate <= season.dateEnd){
        const seasonSwitchEl = document.querySelector('#seasonSwitch')
        seasonSwitchEl.textContent=`${season.season}-${season.getCurrentHoliday().name}` // want to add holiday right here 
        changeSlider(season)
    }

}

function changeSlider(season){
    const sliderDiv = document.querySelector('.scroller__inner')
    season.getCurrentHoliday().loginImages.forEach(Element=>{
        const image=document.createElement('img')
        image.src=Element
        sliderDiv.appendChild(image);
        document.addEventListener("DOMContentLoaded", function () {
            scrollerAnimation();
        });

    })

}

seasons.forEach(Element=>{
changeSeason(Element)
})



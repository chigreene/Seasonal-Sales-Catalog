const fs = require('fs');
const path = require('path');
// var currentDate = new Date(2024, 0, 1);
var currentDate = new Date();
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

// function changeStyleSheet(season) {


//     fs.readFile('public/css/loginStyle.css', 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading the file:', err);
//             return;
//         }
//         const original = `

// /* Styling the Page */
// body{
//     background-color:var(--background)
// }
// /* Banner */
// .banner{
//     display:flex;
//     justify-content:space-between;
// }

// #seasonSwitch {
// color: var(--primary);
// font-size:4em;
// font-weight:var(--bold);
// }

// .login h1{
// text-align:center;
// color:var(--secondary)
// }
// #preventAcess{
//     z-index:1;
//     width: fit-content;
//     position: relative;
//     top:250px;
//     left:450px;
//     border:5px solid white;
//     background-color:var(--tertiary);
//     padding:1%;
//     font-weight:var(--bold);
//     border-radius: var(--raidus);
// }

// /* Changing BootStrap Buttons */
// .btn-primary{
//     background-color:var(--button-primary);
//     border-color:white;
// }
// .btn-primary:hover{
//         background-color: var(--secondary) !important;
//         border-color: white !important;
// }
//  .btn-success {
//      background-color: var(--button-success);
//      border-color: white;
//  }

//  .btn-success:hover {
//      background-color: var(--primary) !important;
//  }
//      `
//         const addedStyle = original + season;

//         // Write the modified content back to the file
//         fs.writeFile('public/css/loginStyle.css', addedStyle, 'utf8', (err) => {
//             if (err) {
//                 console.error('Error writing the file:', err);
//                 return;
//             }
//         });
//     });
// };



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
// const springStyle = `
// /* Spring */
//   :root {
//       --primary: #6BBE45;
//       --secondary: #FFD700;
//       --tertiary: #87CEEB;
//       --background: #F0E68C;
//       --bold: 800;
//       --radius: 8px;
//       --button-primary: #98FB98;
//       --button-success: #ADD8E6;
//   }
// `
// const summerStlye = `
// /* Summer */
//   :root {
//       --primary: #3498db;
//       --secondary: #f39c12;
//       --tertiary: #2ecc71;
//       --background: #fdf4d1;
//       --bold: 800;
//       --radius: 8px;
//       --button-primary: #e74c3c;
//       --button-success: #27ae60;
//   }
// `;
// const fallStyle = `
// /* Fall */
//  :root {
//      --primary: #22503D;
//      --secondary: #8B4513;
//      --tertiary: #FFDB58;
//      --background: #FDD9B5;
//      --bold: 800;
//      --radius: 8px;  
//      --button-primary: #A52A2A;
//      --button-success: #347C3C;
//  }
// `;

// const winterStyle = `
//  /* winter */
//  :root {
//      --primary: #1E90FF;
//      --secondary: #4169E1;
//      --tertiary: #B0E0E6;
//      --background: #F0F8FF;
//      --bold: 800;
//      --radius: 8px;
//      --button-primary: #4682B4;
//      --button-success: #87CEEB;
//  }

// `;


module.exports = currentSeason
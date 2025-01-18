//import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { mostHolyFish, lessHolyFish, notHolyFish } from './holyFish.js'
// Generate the fish list
//const fishHTML = fishList()

const holyFishHTML = mostHolyFish()
const soldierFishHTML = lessHolyFish()
const otherFishHTML =notHolyFish()
const combinedHTML = [holyFishHTML, soldierFishHTML, otherFishHTML]


// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
const fishListContainer = document.getElementById('fishList')
fishListContainer.innerHTML = combinedHTML
 
const tipListContainer = document.getElementById('tipList')
tipListContainer.innerHTML = tipHTML

const locationListContainer = document.getElementById('locationList')
locationListContainer.innerHTML = locationHTML

    
    


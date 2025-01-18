import { database } from './aquariumData.js';
const fishes = database.fish


export const mostHolyFish = () => {
    
    let holyHTML = '<header><h1><strong>Holy Fish</strong></h1></header>'
    fishes.map(fish => {
        if (fish.length % 3 === 0) {
            holyHTML += `
            <article class="fish">
        <img src="${fish.image}" alt="${fish.name}">
        <div class="fish_details">
            <h2 class="fish_name">${fish.name}</h2>
            <li>Species: ${fish.species}</li>
            <li>Length: ${fish.length}</li>
            <li>Location: ${fish.location}</li>
            <li>Diet: ${fish.diet}</li>
        
        </div>
        </article>
        `
    }
})
    return holyHTML
}

export const lessHolyFish = () => {
    
    let soldierHTML = '<header><h1><strong>Soldier Fish</strong></h1></header>'
    fishes.map(fish => {
        if (fish.length % 5 === 0) {
            soldierHTML += `
            <article class="fish">
        <img src="${fish.image}" alt="${fish.name}">
        <div class="fish_details">
            <h2 class="fish_name">${fish.name}</h2>
            <li>Species: ${fish.species}</li>
            <li>Length: ${fish.length}</li>
            <li>Location: ${fish.location}</li>
            <li>Diet: ${fish.diet}</li>
        
        </div>
        </article>
        `
    }
})
    return soldierHTML
}

export const notHolyFish = () => {
    
    let allOthersHTML = '<header><h1><strong>Regular Fish</strong></h1></header>'
    fishes.map(fish => {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            allOthersHTML += `
            <article class="fish">
        <img src="${fish.image}" alt="${fish.name}">
        <div class="fish_details">
            <h2 class="fish_name">${fish.name}</h2>
            <li>Species: ${fish.species}</li>
            <li>Length: ${fish.length}</li>
            <li>Location: ${fish.location}</li>
            <li>Diet: ${fish.diet}</li>
        
        </div>
        </article>
        `
    }
})
    return allOthersHTML
}
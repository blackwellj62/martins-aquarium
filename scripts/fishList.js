import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = ''

    for (const fish of database.fish) {
        fishHTML += `
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
    return fishHTML
};
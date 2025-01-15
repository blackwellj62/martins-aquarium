import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishes = database
    let fishHTML = ''

    for (const fish of fishes) {
        fishHTML += `
        <article class="fish">
        <img src="${fish.image}" alt="${fish.name}">
        <div class="fish_details">
            <h2 class="fish_name">${fish.name}</h2>
            <ol>
            <li>${fish.species}</li>
            <li>${fish.length}</li>
            <li>${fish.location}</li>
            <li>${fish.diet}</li>
            </ol>
        </div>
        </article>
        `
    }
    return fishHTML
};
import { database } from "./aquariumData.js"

export const tipList = () => {
   let tipHTML = ""
    for (const tip of database.tips) {
        tipHTML += `
        <ul class='tips'>
        <li class="tip">
        <h3>${tip.topic}</h3>
        <p>${tip.text}</p>
        </li>
        </ul>
        `
    }

    return tipHTML
}
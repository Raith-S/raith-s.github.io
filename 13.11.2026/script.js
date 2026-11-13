// Find the HTML elements once.
const nameInput = document.querySelector("#name");
const generateButton = document.querySelector("#generate");
const storyOutput = document.querySelector("#story");
 
const geschichte = [
    "Hier ist der Beginn meiner Geschichte",
    "Jetzt kommt ein spannender Hauptteil",
    "Langsam kommt das Ende näher",
    "Geschichte ist zu Ende",
];

const randomItem = (items) => {
    const randomItem = Math.floor(Math.random()*items.length);
    return items[randomItem];

};
 
function generateStory() {
 
    // Hier kommt eure Logik hinein
    let name = nameInput.value.trim();
    const story = randomItem(geschichte) + ": " + name
    storyOutput.textContent = story;
}
 
 
generateButton.addEventListener("click", generateStory);
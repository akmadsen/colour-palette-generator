// Defined Constants 
const MIN_COUNT = 1;
const INITIAL_COUNT = 3; // Start with a default count of 3
const MAX_COUNT = 10;

// jQuery IDs 
const QUANTITY_DISPLAY = '#quantity-display';
const SUBMIT_BUTTON_ID = '#submit-button';
const INCREMENT_BUTTON_ID = "#more-button";
const DECREMENT_BUTTON_ID = "#less-button";

// Tracking Variables 
let count = INITIAL_COUNT;
let colours = [];
let clipboard = null;

const getColourObj = () => {
    return colourGenerator.makeColourObj(
        count, document.forms[0]['hue'].value, 
        document.forms[0]['luminosity'].value);
}

const updateCounterDisplay = () => {
    $(QUANTITY_DISPLAY).text(count);
}

function incrementCounter() {
    count = (count + 1) > MAX_COUNT ?
        MAX_COUNT : 
        count + 1;
    updateCounterDisplay();
}

function decrementCounter() {
    count = (count - 1) < MIN_COUNT ? 
        MIN_COUNT : 
        count - 1;
    updateCounterDisplay();
}


// Interactivity 
$(SUBMIT_BUTTON_ID).click((event) => {
    event.preventDefault();
    colourDisplay.updateDisplay(getColourObj());
});

$(INCREMENT_BUTTON_ID).click(incrementCounter);
$(DECREMENT_BUTTON_ID).click(decrementCounter);
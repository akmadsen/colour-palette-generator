// Safety check - make sure we have jQuery loaded in one form or another
window.jQuery || document.write('<script src="./js/jquery.js"></script>');

// Defined Constants 
const MIN_COUNT = 1; 
const INITIAL_COUNT = 3; // Start with a default count of 3
const MAX_COUNT = 10; 

// jQuery IDs 
const QUANTITY_DISPLAY = '#quantity-display'; 
const COLOR_TILE_CONTAINER = "#color-tile-container"; 
const SUBMIT_BUTTON_ID = '#submit-button'; 
const INCREMENT_BUTTON_ID = "#more-button";
const DECREMENT_BUTTON_ID = "#less-button"; 

// Tracking Variables 
let count = INITIAL_COUNT; 
let currentColors = []; 
let clipboard = null; 

function getColourObj() { 
    return colourGenerator.makeColourObj(count, document.forms[0]['hue'], document.forms[0]['luminosity']); 
}

const updateCounterDisplay = () => { 
    $(QUANTITY_DISPLAY).text(count); 
}

function incrementCounter() { 
    count = (count + 1) > MAX_COUNT ? MAX_COUNT : count + 1; 
    updateCounterDisplay(); 
}

function decrementCounter() { 
    count = (count - 1) < MIN_COUNT ? MIN_COUNT : count - 1; 
    updateCounterDisplay(); 
}

function applyColourGeneration(colorDefinitions) { 
    currentColors = randomColor(colorDefinitions); 

    $(COLOR_TILE_CONTAINER).empty(); 

    $.each(currentColors, (index, value) => {
        // If the value is unspecified, then we don't want to interfere
        if (value === "unspecified") { 
            return; 
        }

        let card = $('<div class="color-tile" data-clipboard-text="' + currentColors[index] + '"></div>'); 

        card.css({
            "background-color": value
        });

        $(COLOR_TILE_CONTAINER).append(card); 
    }); 

    if(clipboard) { 
        clipboard.destroy(); 
    }

    clipboard = new ClipboardJS('.color-tile'); 
}

// Initialization
(function init() { 
    applyColourGeneration(getColourObj()); 
})(); 

// Interactivity 
$(SUBMIT_BUTTON_ID).click((event) => {
    event.preventDefault(); 
    applyColourGeneration(getColourObj()); 
}); 

$(INCREMENT_BUTTON_ID).click(incrementCounter); 
$(DECREMENT_BUTTON_ID).click(decrementCounter); 
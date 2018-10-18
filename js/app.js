// Safety check - make sure we have jQuery loaded in one form or another
window.jQuery || document.write('<script src="./js/jquery.js"></script>');

// When Document Ready 
$(() => {
    // Initialization
    (function init() {
        colourDisplay.updateDisplay(getColourObj());
    })();
});
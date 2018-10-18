let colourDisplay = { 
    // Attributes
    containerID: "#color-tile-container",
    
    // Methods

    // TODO: Can't use an arrow function here. Why? 
    updateDisplay: function(colourRequirements) {

        colours = randomColor(colourRequirements);

        $(this.containerID).empty();
        
        $.each(colours, (index, value) => {
            // If the value is unspecified, then we don't want to interfere
            if (value === "unspecified") {
                return;
            }
            
            let card = $('<div class="color-tile" data-clipboard-text="' + colours[index] + '"></div>');
            
            card.css({
                "background-color": value
            });
            
            $(this.containerID).append(card);
        });
        
        if (clipboard) {
            clipboard.destroy();
        }
        
        clipboard = new ClipboardJS('.color-tile');
    }
}
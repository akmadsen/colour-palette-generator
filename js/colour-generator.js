let colourGenerator = { 
    // Attributes 
    hues: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome'], 
    luminosities: ['bright', 'light', 'dark'], 
    
    // Methods
    getRandomIndex: (max) => Math.floor(Math.random() * max), 
    
    getRandomHue: function() {
        return this.hues[getRandomIndex(this.hues.length)];
    },
    
    getRandomLuminosity: function() {
        return luminosities[getRandomIndex(luminosities.length)]; 
    },
    
    makeColourObj: function(count, hue, luminosity) { 
        // Randomize if applicable

        console.log("COUNT: " + count); 
        console.log("HUE: " + hue); 
        console.log("LUM: " + luminosity); 

        let obj = {'count': count}; 

        if (hue !== "unspecified") {
            obj['hue'] = hue === 'random' ? this.getRandomHue() : hue; 
        }

        if (luminosity !== "unspecified") {
            obj['luminosity'] = luminosity === 'random' ? this.getRandomLuminosity() : luminosity; 
        }

        return obj; 
    }
}
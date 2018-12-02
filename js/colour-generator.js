let colourGenerator = (function () { 
    // Attributes 
    const hues = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome']; 
    const luminosities = ['bright', 'light', 'dark']; 
    
    // Methods
    const getRandomIndex = function (max) {
        return Math.floor(Math.random() * max);
    }
    
    const getRandomHue = function() {
        return hues[getRandomIndex(hues.length)];
    }
    
    const getRandomLuminosity = function() {
        return luminosities[getRandomIndex(luminosities.length)];
    } 
    
    const makeColourObj = function(count, hue, luminosity) { 
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

    return {
        hues: hues, 
        luminosities: luminosities, 
        getRandomLuminosity: getRandomLuminosity, 
        getRandomHue: getRandomHue, 
        makeColourObj: makeColourObj, 
    }
})(); 
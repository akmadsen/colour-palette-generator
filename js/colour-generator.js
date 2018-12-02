let colourGenerator = (function () { 
    // Attributes 
    let hues = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome']; 
    let luminosities = ['bright', 'light', 'dark']; 
    
    // Methods
    let getRandomIndex = function (max) {
        Math.floor(Math.random() * max);
    }
    
    let getRandomHue = function() {
        return this.hues[getRandomIndex(this.hues.length)];
    }
    
    let getRandomLuminosity = () => luminosities[getRandomIndex(luminosities.length)];
    
    let makeColourObj = function(count, hue, luminosity) { 
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
let colourGenerator = { 
    // Attributes 
    hues: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome'], 
    luminosities: ['bright', 'light', 'dark'], 
    
    // Methods
    getRandomIndex: (max) => Math.floor(Math.random() * max), 
    
    getRandomHue: () => hues[getRandomIndex(hues.length)],
    
    getRandomLuminosity: () => luminosities[getRandomIndex(luminosities.length)],
    
    makeColourObj: (count, hue, luminosity) => { 
        // Randomize if applicable 
        hue = hue === 'random' ? getRandomHue() : hue; 
        luminosity = luminosity === 'random' ? getRandomLuminosity() : luminosity; 

        // Object Shorthand
        return { 
            count, 
            hue, 
            luminosity
        }; 
    }
}
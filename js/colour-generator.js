let colourGenerator = (function () { 
    // Attributes 
    const hues = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome']; 
    const luminosities = ['bright', 'light', 'dark']; 
    
    // Methods
    const getRandomItem = (arr) => arr[getRandomIndex(arr.length)]; 

    const getRandomIndex = (max) => Math.floor(Math.random() * max);
    
    const getRandomHue = () => getRandomItem(hues);
    
    const getRandomLuminosity = () => getRandomItem(luminosities); 
    
    const makeColourObj = (count, hue, luminosity) => { 
        let obj = {'count': count}; 

        if (hue !== "unspecified") {
            obj['hue'] = hue === 'random' ? getRandomHue() : hue; 
        }

        if (luminosity !== "unspecified") {
            obj['luminosity'] = luminosity === 'random' ? getRandomLuminosity() : luminosity; 
        }

        return obj; 
    }

    return {
        getRandomLuminosity: getRandomLuminosity, 
        getRandomHue: getRandomHue, 
        makeColourObj: makeColourObj, 
    }
})(); 
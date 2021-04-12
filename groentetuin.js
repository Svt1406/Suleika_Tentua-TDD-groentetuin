const getYieldForPlant = (plant, enviromentFactors) => {
    let sunPercentage = 100; 
    let windPercentage = 100;
    let soilPercentage = 100;

    if (enviromentFactors.sun == "low") {
        sunPercentage += plant.factors.sun.low;
    } else if (enviromentFactors.sun == "medium"){
        sunPercentage += plant.factors.sun.medium;
    } else if (enviromentFactors.sun == "high") {
        sunPercentage += plant.factors.sun.high;
    }
    sunPercentage = sunPercentage / 100;

    if (enviromentFactors.wind == "low") {
        windPercentage += plant.factors.wind.low;
    } else if (enviromentFactors.wind == "medium") {
        windPercentage += plant.factors.wind.medium;
    } else if (enviromentFactors.wind == "high") {
        windPercentage += plant.factors.wind.high;
    }

    windPercentage = windPercentage / 100;

    if (enviromentFactors.soil == "clay"){
        soilPercentage += plant.factors.soil.clay;
    } else if (enviromentFactors.soil == "sand") {
        soilPercentage += plant.factors.soil.sand;
    }

    soilPercentage = soilPercentage / 100;

    return plant.yield * sunPercentage * windPercentage * soilPercentage;
};


const getYieldForCrop = (input, factors) => { 
    return input.numCrops * getYieldForPlant(input.crop, factors);
};


const getTotalYield = (crops, factors) => { 
    let sum = 0;
    crops.crops.forEach(element => {
        sum = sum + getYieldForCrop(element, factors);
    });
    return sum;
};


const getCostsForCrop = (crop) => {
    return crop.numCrops * crop.cost;
};


const getRevenueForCrop = (crop, factors) => { 
    return crop.salesPrice * getYieldForCrop(crop, factors); 
};


const getProfitForCrop = (crop,factors) => {
   return getRevenueForCrop(crop, factors) - getCostsForCrop(crop);
};


const getTotalProfit = (crops, factors) => { 
    let sum = 0;
    crops.crops.forEach(element => {
        sum = sum + getProfitForCrop(element, factors);
    });
    return sum;
};

module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
};
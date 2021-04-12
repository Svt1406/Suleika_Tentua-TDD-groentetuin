const { getAttrList } = require("parse5/lib/tree-adapters/default");

const getYieldForPlant = (corn) => {
    return corn.yield;
};


const getYieldForCrop = (input) => { 
    return input.numCrops * getYieldForPlant(input.crop);
};


const getTotalYield = (crops) => { 
    let sum = 0;
    crops.crops.forEach(element => {
        sum = sum + getYieldForCrop(element);
    });
    return sum;
};

const getCostsForCrop = (crop) => { 
    return crop.numCrops * crop.cost;
};

const getRevenueForCrop = (crop) => { 
    return crop.salesPrice * getYieldForCrop(crop);
};

const getProfitForCrop = (crop) => {
   return getRevenueForCrop(crop) - getCostsForCrop(crop);
};

module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop
};
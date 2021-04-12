const getYieldForPlant = (corn, enviromentFactors) => {
    if (enviromentFactors.sun == "low") {
        const lowFactor = (corn.yield / 100) * 50;
        return lowFactor;
    } else if (enviromentFactors.sun == "medium"){
        const mediumFactor = (corn.yield / 100) * 100;
        return mediumFactor;
    } else if (enviromentFactors.sun == "high") {
        const highFactor = (corn.yield / 100) * 150;
        return highFactor;
    }
};


// const getYieldForCrop = (input) => { 
//     return input.numCrops * getYieldForPlant(input.crop);
// };


// const getTotalYield = (crops) => { 
//     let sum = 0;
//     crops.crops.forEach(element => {
//         sum = sum + getYieldForCrop(element);
//     });
//     return sum;
// };


// const getCostsForCrop = (crop) => {
//     return crop.numCrops * crop.cost;
// };


// const getRevenueForCrop = (crop) => { 
//     return crop.salesPrice * getYieldForCrop(crop); 
// };


// const getProfitForCrop = (crop) => {
//    return getRevenueForCrop(crop) - getCostsForCrop(crop);
// };


// const getTotalProfit = (crops) => { 
//     let sum = 0;
//     crops.crops.forEach(element => {
//         console.log(getProfitForCrop(element));
//         sum = sum + getProfitForCrop(element);
//     });
//     return sum;
// };

module.exports = {
    getYieldForPlant, 
    // getYieldForCrop, 
    // getTotalYield,
    // getCostsForCrop,
    // getRevenueForCrop,
    // getProfitForCrop,
    // getTotalProfit
};
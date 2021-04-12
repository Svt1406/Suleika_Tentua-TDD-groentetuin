const { 
    getYieldForPlant, 
    // getYieldForCrop, 
    // getTotalYield, 
    // getCostsForCrop,
    // getRevenueForCrop,
    // getProfitForCrop,
    // getTotalProfit
} = require("../groentetuin");


describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
              low: -50,
              medium: 0,
              high: 50,
            },
        },
    };

    const lowFactor = {
        sun: "low",
    };

    test("Get yield for plant with low environment factors", () => {
        expect(getYieldForPlant(corn, lowFactor)).toBe(15);
    });

    const mediumFactor = {
        sun: "medium",
    };

    test("Get yield for plant with medium enviroment factors", () => {
        expect(getYieldForPlant(corn, mediumFactor)).toBe(30);
    });

    const highFactor = { 
        sun: "high",
    };

    test("Get yield for plant with high enviroment factors", () => {
        expect(getYieldForPlant(corn, highFactor)).toBe(45);
    });
});

// describe("getYieldForCrop", () => {
//     test("Get yield for crop, simple", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const input = {
//             crop: corn,
//             numCrops: 10,
//         };
//         expect(getYieldForCrop(input)).toBe(30);
//     });
// });


// describe("getTotalYield", () => {
//     test("Calculate total yield with multiple crops", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const pumpkin = {
//             name: "pumpkin",
//             yield: 4,
//         };
//         const crops = [
//             { crop: corn, numCrops: 5 },
//             { crop: pumpkin, numCrops: 2 },
//         ];
//         expect(getTotalYield({ crops })).toBe(23);
//     });

//     test("Calculate total yield with 0 amount", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const crops = [{ crop: corn, numCrops: 0 }];
//         expect(getTotalYield({ crops })).toBe(0);
//     });
// });


// describe ("getCostsForCrop", () => {
//     test ("Calculate costs for 1 crop", () => {
//          const corn = {
//              name: "corn",
//              yield: 3, 
//          };
//          const crop = { crop: corn, numCrops: 5, cost: 1};
//     expect(getCostsForCrop(crop)).toBe(5);
//     });
// });


// describe ("getRevenueForCrop", () => {
//     test ("calculate Revenue for 1 crop", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const crop = {crop: corn, numCrops: 5, salesPrice: 2};
//     expect(getRevenueForCrop(crop)).toBe(30);
//     }); 
// });


// describe ("getProfitForCrop", () => { 
//     test("calculate profit for each crop", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const crop = {crop: corn, numCrops: 5, cost: 1, salesPrice: 2};
//         expect(getProfitForCrop(crop)).toBe(25);
//     });
// });

// describe ("getTotalProfit", () => {
//     test ("calculate total profit", () => {
//          const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const pumpkin = {
//             name: "pumpkin",
//             yield: 4,
//         };
//         const crops = [
//             {crop: corn, numCrops: 5, cost: 1, salesPrice: 2},
//             {crop: pumpkin, numCrops: 2, cost: 1, salesPrice: 2}
//         ];
//         expect(getTotalProfit({crops})).toBe(39);
//     });
// });
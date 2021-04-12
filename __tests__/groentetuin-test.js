const { 
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield, 
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
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
    const environmentFactors = {
        sun: "medium",
};

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                  low: -50,
                  medium: 0,
                  high: 50,
                },
              },
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };

        const environmentFactors = {
            sun: "medium",
        };
        expect(getYieldForCrop(input,environmentFactors)).toBe(30);
    });
});


describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                  low: -50,
                  medium: 0,
                  high: 50,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                  low: -30,
                  medium: 0,
                  high: 60,
                },
            },
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];

        const environmentFactors = {
            sun: "medium",
        };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                  low: -50,
                  medium: 0,
                  high: 50,
                },
            },
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        const environmentFactors = {
            sun: "medium",
        };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(0);
    });
});


describe ("getCostsForCrop", () => {
    test ("Calculate costs for 1 crop", () => {
         const corn = {
             name: "corn",
             yield: 3, 
         };
         const crop = { crop: corn, numCrops: 5, cost: 1};
    expect(getCostsForCrop(crop)).toBe(5);
    });
});


describe ("getRevenueForCrop", () => {
    test ("calculate Revenue for 1 crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                  low: -50,
                  medium: 0,
                  high: 50,
                },
            },
        };
        const crop = {crop: corn, numCrops: 5, salesPrice: 2};
        const environmentFactors = {
            sun: "medium",
        };
    expect(getRevenueForCrop(crop, environmentFactors)).toBe(30);
    }); 
});


describe ("getProfitForCrop", () => { 
    test("calculate profit for each crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                  low: -50,
                  medium: 0,
                  high: 50,
                },
            },
        };
        const crop = {crop: corn, numCrops: 5, cost: 1, salesPrice: 2};
        const environmentFactors = {
            sun: "medium",
        };
        expect(getProfitForCrop(crop,environmentFactors)).toBe(25);
    });
});

describe ("getTotalProfit", () => {
    test ("calculate total profit", () => {
         const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                  low: -50,
                  medium: 0,
                  high: 50,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                  low: -50,
                  medium: 0,
                  high: 50,
                },
            },
        };
        const crops = [
            {crop: corn, numCrops: 5, cost: 1, salesPrice: 2},
            {crop: pumpkin, numCrops: 2, cost: 1, salesPrice: 2}
        ];
        const environmentFactors = {
            sun: "medium",
        };
        expect(getTotalProfit({crops}, environmentFactors)).toBe(39);
    });
});
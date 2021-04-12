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
            wind: {
                high: -60,
                medium: -30,
                low: 0,
            },
            soil: { 
                clay: -20,
                sand: 10,
            }
          },
        };
    const environmentFactors = {
        sun: "medium",
    };

    test("Get yield for plant with medium environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(30);
    });

    const environmentFactors2 = {
        sun: "low",
    };
    test("Get yield for plant with low environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors2)).toBe(15);
    });

    const environmentFactors3 = {
        sun: "high",
    };
    test("Get yield for plant with high environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors3)).toBe(45);
    });

    const environmentFactors4 = {
        sun: "medium",
        wind: "medium",
    };

    test("Get yield for plant with medium environment sun and wind factors", () => {
        expect(getYieldForPlant(corn, environmentFactors4)).toBe(21);
    });

    const environmentFactors5 = {
        sun: "low",
        wind: "low",
    };
    test("Get yield for plant with low environment sun and windfactors", () => {
        expect(getYieldForPlant(corn, environmentFactors5)).toBe(15);
    });

    const environmentFactors6 = {
        sun: "high",
        wind: "high",
    };
    test("Get yield for plant with high environment sun and wind factors", () => {
        expect(getYieldForPlant(corn, environmentFactors6)).toBe(18);
    });

    const environmentFactors7 = {
        sun: "medium",
        wind: "medium",
        soil: "clay",
    };

    test("Get yield for plant with medium environment sun, wind and soil factors", () => {
        expect(getYieldForPlant(corn, environmentFactors7)).toBe(16.8);
    });

    const environmentFactors8 = {
        sun: "low",
        wind: "low",
        soil: "sand",
    };
    test("Get yield for plant with low environment sun, wind and soil factors", () => {
        expect(getYieldForPlant(corn, environmentFactors8)).toBe(16.5);
    });

    const environmentFactors9 = {
        sun: "high",
        wind: "high",
        soil: "clay",
    };
    test("Get yield for plant with high environment sun, wind and soil factors", () => {
        expect(getYieldForPlant(corn, environmentFactors9)).toBe(14.4);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, with sun environment factor", () => {
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

    test("Get yield for crop, with sun and wind environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                  low: -50,
                  medium: 0,
                  high: 50,
                },
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
                },
              },
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };

        const environmentFactors = {
            sun: "medium",
            wind: "medium",
        };
        expect(getYieldForCrop(input,environmentFactors)).toBeCloseTo(20.999);
    });
});


describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops and sun environmentfactors", () => {
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

    test("Calculate total yield with multiple crops, and sun and wind environmentfactors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
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
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
                },
            },
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];

        const environmentFactors = {
            sun: "medium",
            wind: "medium",
        };
        expect(getTotalYield({ crops }, environmentFactors)).toBeCloseTo(16.099);
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
    test ("calculate Revenue for 1 crop and sun environment factor", () => {
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

    test ("calculate Revenue for 1 crop and sun and wind environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                  low: -50,
                  medium: 0,
                  high: 50,
                },
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
                },
            },
        };
        const crop = {crop: corn, numCrops: 5, salesPrice: 2};
        const environmentFactors = {
            sun: "medium",
            wind: "medium",
        };
    expect(getRevenueForCrop(crop, environmentFactors)).toBeCloseTo(20.999);
    }); 
});


describe ("getProfitForCrop", () => { 
    test("calculate profit for each crop and sun environment factor", () => {
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

    test("calculate profit for each crop and sun and wind environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                  low: -50,
                  medium: 0,
                  high: 50,
                },
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
                },
            },
        };
        const crop = {crop: corn, numCrops: 5, cost: 1, salesPrice: 2};
        const environmentFactors = {
            sun: "medium",
            wind: "medium",
        };
        expect(getProfitForCrop(crop,environmentFactors)).toBeCloseTo(15.999);
    });
});

describe ("getTotalProfit", () => {
    test ("calculate total profit with sun environment factor", () => {
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

    test ("calculate total profit with sun and wind factors", () => {
        const corn = {
           name: "corn",
           yield: 3,
           factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
               },
                wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
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
               wind: {
                    high: -60,
                    medium: -30,
                    low: 0,
                },
           },
       };
       const crops = [
           {crop: corn, numCrops: 5, cost: 1, salesPrice: 2},
           {crop: pumpkin, numCrops: 2, cost: 1, salesPrice: 2}
       ];
       const environmentFactors = {
           sun: "medium",
           wind: "medium",
       };
       expect(getTotalProfit({crops}, environmentFactors)).toBeCloseTo(25.199);
   });
});
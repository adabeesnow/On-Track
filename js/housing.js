/**
 * Created by bpalm_000 on 2/22/2017.
 */
let housingCostsYearly = function() {
    return (annualOneBedAverage() + annualTwoBedAverage() + annualThreeBedAverage() + annualFourBedAverage());
};

let monthlyOneBedAverage = function() {
    return (housing_1_bed_84401  +
        housing_1_bed_84403  +
        housing_1_bed_84404  +
        housing_1_bed_84405  +
        housing_1_bed_84408) / 5;
};

let annualOneBedAverage = function() {
    return monthlyOneBedAverage() * 12;
};

let monthlyTwoBedAverage = function() {
    return (housing_2_bed_84401  +
        housing_2_bed_84403  +
        housing_2_bed_84404  +
        housing_2_bed_84405  +
        housing_2_bed_84408) / 5;
};

let annualTwoBedAverage = function() {
    return monthlyTwoBedAverage() * 12;
};

let monthlyThreeBedAverage = function() {
    return (housing_3_bed_84401  +
        housing_3_bed_84403  +
        housing_3_bed_84404  +
        housing_3_bed_84405  +
        housing_3_bed_84408) / 5;
};

let annualThreeBedAverage = function() {
    return monthlyThreeBedAverage() * 12;
};

let monthlyFourBedAverage = function() {
    return (housing_4_bed_84401  +
        housing_4_bed_84403  +
        housing_4_bed_84404  +
        housing_4_bed_84405  +
        housing_4_bed_84408) / 5;
};

let annualFourBedAverage = function() {
    return monthlyFourBedAverage() * 12;
};
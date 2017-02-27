// /**
//  * Created by adsal on 2/1/2017.
//  */
//
// // CONSTANTS
//
// let center_care_avg_0_to_12_mo = 653.65;
// let center_care_avg_1_yr = 663.05;
// let center_care_avg_2_yr = 535.23;
// let center_care_avg_3_yr = 511.42;
// let center_care_avg_4_yr = 503.42;
// let center_care_avg_5_yr = 511.33;
// let center_care_avg_kindergarten_in = 466.12;
// let center_care_avg_kindergarten_out = 489.09;
// let center_care_avg_schoolage_in = 442.00;
// let center_care_avg_schoolage_out = 476.89;
// let family_care_avg_0_to_12_mo = 514.77;
// let family_care_avg_1_yr = 521.68;
// let family_care_avg_2_yr = 482.32;
// let family_care_avg_3_yr = 467.64;
// let family_care_avg_4_yr = 457.12;
// let family_care_avg_5_yr = 467.38;
// let family_care_avg_kindergarten_in = 412.79;
// let family_care_avg_kindergarten_out = 437.43;
// let family_care_avg_schoolage_in = 384.65;
// let family_care_avg_schoolage_out = 439.08;
// let household_income_as_percentage_of_federal_poverty_line_list = {};
// let applicable_figure_list = {};
// let gross_income = 21999.30;
// let family_size_list = {};
// let poverty_level_list = {};
// let housing_1_bed_84401 = 550.00;
// let housing_1_bed_84403 = 560.00;
// let housing_1_bed_84404 = 620.00;
// let housing_1_bed_84405 = 620.00;
// let housing_1_bed_84408 = 610.00;
// let housing_2_bed_84401 = 710.00;
// let housing_2_bed_84403 = 720.00;
// let housing_2_bed_84404 = 790.00;
// let housing_2_bed_84405 = 790.00;
// let housing_2_bed_84408 = 780.00;
// let housing_3_bed_84401 = 1020.00;
// let housing_3_bed_84403 = 1030.00;
// let housing_3_bed_84404 = 1130.00;
// let housing_3_bed_84405 = 1130.00;
// let housing_3_bed_84408 = 1120.00;
// let housing_4_bed_84401 = 1170.00;
// let housing_4_bed_84403 = 1190.00;
// let housing_4_bed_84404 = 1300.00;
// let housing_4_bed_84405 = 1300.00;
// let housing_4_bed_84408 = 1290.00;
// let low_cost_food_plan_price_per_mo_weber_county_infant = 118.84;
// let low_cost_food_plan_price_per_mo_weber_county_preschooler = 124.92;
// let low_cost_food_plan_price_per_mo_weber_county_schoolager = 193.37;
// let low_cost_food_plan_price_per_mo_weber_county_teenager = 209.30;
// let low_cost_food_plan_price_per_mo_weber_county_adult = 210.30;
// let car_insurance_avg_per_mo_single = 465.64;
// let car_insurance_avg_per_mo_married = 466.00;
// let car_price = 5341.00;
// let car_miles_per_gallon = 26.00;
// let car_finance_cost = 373.64;
// let car_monthly_payment = 158.74;
// let car_gas_price = 2.75;
// let car_miles = 4716.00;
// let car_registration = 110.50;
// let car_emissions = 27.00;
// let car_maintenance = 580.00;
// let employer_health_premium_in_avg_single = 1406.00;
// let employer_health_premium_in_avg_couple = 2592.00;
// let employer_health_premium_in_avg_family = 3412.00;
// let out_of_pocket_infant = 31.16;
// let out_of_pocket_preschooler = 31.16;
// let out_of_pocket_schoolager = 93.24;
// let out_of_pocket_teen = 93.24;
// let out_of_pocket_adult = 107.62;
// let entertainment_household_of_1 = 1139.00;
// let entertainment_household_of_2 = 1496.00;
// let entertainment_household_of_3 = 1650.00;
// let entertainment_household_of_4 = 2379.00;
// let entertainment_household_of_5_or_more = 2429.00;
// let misc_for_1_15000_to_19999 = 403.00;
// let personal_products_for_1_15000_to_19999 = 311.00;
// let housekeeping_supplies_for_1_15000_to_19999 = 307.00;
// let apparel_for_1_15000_to_19999 = 593.00;
// let misc_for_2_20000_to_29999 = 275.00;
// let personal_products_for_2_20000_to_29999 = 487.00;
// let housekeeping_supplies_for_2_20000_to_29999 = 520.00;
// let apparel_for_2_20000_to_29999 = 709.00;
// let misc_for_3_30000_to_39999 = 389.00;
// let personal_products_for_3_30000_to_39999 = 522.00;
// let housekeeping_supplies_for_3_30000_to_39999 = 400.00;
// let apparel_for_3_30000_to_39999 = 1230.00;
// let misc_for_4_50000_to_69999 = 512.00;
// let personal_products_for_4_50000_to_69999 = 730.00;
// let housekeeping_supplies_for_4_50000_to_69999 = 598.00;
// let apparel_for_4_50000_to_69999 = 1676.00;
// let misc_for_5_or_more_50000_to_69999 = 610.00;
// let personal_products_for_5_or_more_50000_to_69999 = 582.00;
// let housekeeping_supplies_for_5_or_more_50000_to_69999 = 752.00;
// let apparel_for_5_or_more_50000_to_69999 = 2271.00;
// let misc_for_5_or_more_70000_and_up = 932.00;
// let personal_products_for_5_or_more_70000_and_up = 980.00;
// let housekeeping_supplies_for_5_or_more_70000_and_up = 1115.00;
// let apparel_for_5_or_more_70000_and_up = 3095.00;
// let income_at_least_list = [];
// let income_less_than_list = [];
// let credit_amount_single_0_children_list = [];
// let credit_amount_single_1_children_list = [];
// let credit_amount_single_2_children_list = [];
// let credit_amount_single_3_children_list = [];
// let credit_amount_married_filing_jointly_0_children_list = [];
// let credit_amount_married_filing_jointly_1_children_list = [];
// let credit_amount_married_filing_jointly_2_children_list = [];
// let credit_amount_married_filing_jointly_3_children_list = [];
//
// // ashton vars
// let federal_payroll_tax_multiplier = 0.0765;
// let qualifying_child_care_expense_zero = 0;
// let qualifying_child_care_expsnse_one = 3000;
// let qualifying_child_care_expense_2ormore = 6000;
// let utah_taxes_owed_less_than_zero = 0;
//
//
// // Out of Pocket marketplace costs
// let marketplace_oop_infant = 46.74;
// let marketplace_oop_preschooler = 46.74;
// let marketplace_oop_schoolager = 139.86;
// let marketplace_oop_teenager = 139.86;
// let marketplace_oop_adult = 161.43;
//
// let employer_oop_infant = 31.16;
// let employer_oop_preschooler = 31.16;
// let employer_oop_schoolager = 93.24;
// let employer_oop_teenager = 93.24;
// let employer_oop_adult = 107.62;
//
//
// // Marketplace health insurance costs
// let adult_marketplace_cost = 2536;
// let child_marketplace_cost = 2536;
//
// // User input variables
//
// let number_of_adults = null;
// let number_of_infants = null;
// let number_of_preschoolers = null;
// let number_of_schoolagers = null;
// let number_of_teenagers = null;
// let estimated_babysitting_cost = null;
// let childcare_needed_bool = true;
// let use_family_care_bool = false;
// let number_of_bedrooms = null;
// let use_marketplace_health_insurance_bool = false;
// let number_of_cars = -1;
// let number_of_public_transport_passes_adult = null;
// let number_of_public_transport_passes_child = null;
//
// let ehc_gross_income = 21999.30;
// let mhc_gross_income = 19069.30;

// let numAdults = function() {
//     return number_of_adults;
// };

// let numInfants = function() {
//     return number_of_infants;
// };

// let numPreschoolers= function() {
//     return number_of_preschoolers;
// };
//
// let numSchoolagers= function() {
//     return number_of_schoolagers;
// };
//
// let numTeenagers = function() {
//     return number_of_teenagers;
// };

// Taxes!O9
// let ehcEITC = function () {
//     let credit_amount_list = [];
//     if (numberOfChildren() == 1) {
//         credit_amount_list = credit_amount_married_filing_jointly_1_children_list;
//     } else
//     if (numberOfChildren() == 2) {
//         credit_amount_list = credit_amount_married_filing_jointly_2_children_list;
//     } else
//     if (numberOfChildren() == 0) {
//         credit_amount_list = credit_amount_married_filing_jointly_0_children_list;
//     } else
//     if (numberOfChildren() >= 3) {
//         credit_amount_list = credit_amount_married_filing_jointly_3_children_list;
//     }
//     else {
//         return false;
//     }
//
//     let i = 0;
//     while (i <= income_at_least_list.length) {
//         if (i >= income_at_least_list.length) {
//             return false;
//         }
//         if (gross_income > income_at_least_list[i]) {
//             break;
//         }
//         i++;
//     }
//     return credit_amount_list[i];
// };

// // Taxes!O6
// let mhcEITC = function () {
//     let credit_amount_list = [];
//     if (numberOfChildren() == 1) {
//         credit_amount_list = credit_amount_single_1_children_list;
//     } else
//     if (numberOfChildren() == 2) {
//         credit_amount_list = credit_amount_single_2_children_list;
//     } else
//     if (numberOfChildren() == 0) {
//         credit_amount_list = credit_amount_single_0_children_list;
//     } else
//     if (numberOfChildren() >= 3) {
//         credit_amount_list = credit_amount_single_3_children_list;
//     }
//     else {
//         return false;
//     }
//
//     let i = 0;
//     while (i <= income_at_least_list.length) {
//         if (i >= income_at_least_list.length) {
//             return false;
//         }
//         if (gross_income > income_at_least_list[i]) {
//             break;
//         }
//         i++;
//     }
//     return credit_amount_list[i];
// };

// /**
//  * Performs a goalSeek function 6x for accuracy, returns the new ehc_gross_income value.
//  * Changing cell:   gross
//  * Goal cell:       expense
//  * GoalSeek cell:   net
//  */
// let ehcCalcGross = function() {
//     let gross = ehc_gross_income;
//     let expense = ehcTotalExpenses();
//     // let net = ehcNetYearlyIncome();
//     let net = function(gross, tax) { return gross-tax; };
//     let tax = ehcTotalTax();
//
//     for (let i = 0; i < 6; i++) {
//         gross = goalSeek({
//             Func: net,                      // The function which should return the value of the goal cell.
//             aFuncParams: [gross, tax()],    // The params to be passed to the function above.
//             oFuncArgTarget: {
//                 Position: 0                 // The position in the aFuncParams array of the value which will be changed.
//             },
//             Goal: expense,                  // The value which the function above should match.
//             Tol: 0.01,                      // The tolerance of the final result.
//             maxIter: 1000                   // The maximum number of iterations for the goalSeek function to take.
//         });
//     }
//
//     console.log('gross: ' + gross);
//     console.log('tax: ' + tax());
//     console.log('net: ' + net(gross, tax()));
//
//     return gross;
// };

// /**
//  * Performs a goalSeek function 6x for accuracy, returns the new mhc_gross_income value.
//  * Changing cell:   gross
//  * Goal cell:       expense
//  * GoalSeek cell:   net
//  */
// let mhcCalcGross = function() {
//     let gross = mhc_gross_income;
//     let expense = mhcTotalExpenses();
//     // let net = ehcNetYearlyIncome();
//     let net = function(gross, tax) { return gross-tax; };
//     let tax = mhcTotalTax();
//
//     for (let i = 0; i < 6; i++) {
//         gross = goalSeek({
//             Func: net,                      // The function which should return the value of the goal cell.
//             aFuncParams: [gross, tax()],    // The params to be passed to the function above.
//             oFuncArgTarget: {
//                 Position: 0                 // The position in the aFuncParams array of the value which will be changed.
//             },
//             Goal: expense,                  // The value which the function above should match.
//             Tol: 0.01,                      // The tolerance of the final result.
//             maxIter: 1000                   // The maximum number of iterations for the goalSeek function to take.
//         });
//     }
//
//     console.log('gross: ' + gross);
//     console.log('tax: ' + tax());
//     console.log('net: ' + net(gross, tax()));
//
//     return gross;
// };

// let carInsurance6Mo = function() {
//     return (numCars() === 1 ? car_insurance_avg_per_mo_single : car_insurance_avg_per_mo_married * 2);
//     // TODO: Make this handle adult numbers other than 1 or 2.
// };

let overallCost = function() {  // -1 == 'Standard'
  return    (number_of_bedrooms == -1 ? housingCost() :
                (number_of_bedrooms == 1 ? annualOneBedAverage() :
                    (number_of_bedrooms == 2 ? annualTwoBedAverage() :
                        (number_of_bedrooms == 3 ? annualThreeBedAverage() :
                            (number_of_bedrooms == 4 ? annualFourBedAverage() :
                                0
                            )
                        )
                    )
                )
            ) +
            (estimated_babysitting_cost > 0 ? estimated_babysitting_cost :
                (use_family_care_bool == true ? familyChildCareCost() :
                    childCareAnnualTotal()
                )
            ) +
            carInsurance() +
            carOwnership() +
            (use_marketplace_health_insurance_bool == false ? healthCareEmployerCombinedTotal() : totalMarketplaceHealthCareCost()) +
            entertainmentCost() +
            miscCost() +
            excessiveChildrenCost() +
            excessiveAdultsCost() +
            publicTransitCost() +
            foodCostAnnualTotal()
};

// let monthlyOneBedAverage = function() {
//     return (housing_1_bed_84401  +
//             housing_1_bed_84403  +
//             housing_1_bed_84404  +
//             housing_1_bed_84405  +
//             housing_1_bed_84408) / 5;
// };
//
// let annualOneBedAverage = function() {
//     return monthlyOneBedAverage() * 12;
// };
// let monthlyTwoBedAverage = function() {
//     return (housing_2_bed_84401  +
//             housing_2_bed_84403  +
//             housing_2_bed_84404  +
//             housing_2_bed_84405  +
//             housing_2_bed_84408) / 5;
// };
// let annualTwoBedAverage = function() {
//     return monthlyTwoBedAverage() * 12;
// };
// let monthlyThreeBedAverage = function() {
//     return (housing_3_bed_84401  +
//             housing_3_bed_84403  +
//             housing_3_bed_84404  +
//             housing_3_bed_84405  +
//             housing_3_bed_84408) / 5;
// };
// let annualThreeBedAverage = function() {
//     return monthlyThreeBedAverage() * 12;
// };
// let monthlyFourBedAverage = function() {
//     return (housing_4_bed_84401  +
//             housing_4_bed_84403  +
//             housing_4_bed_84404  +
//             housing_4_bed_84405  +
//             housing_4_bed_84408) / 5;
// };
// let annualFourBedAverage = function() {
//     return monthlyFourBedAverage() * 12;
// };

let familyChildCareCost = function() {
    return  familyCareAnnualPreschooler() +
            familyCareAnnualSchoolager() +
            familyCareAnnualInfant();
};

let carInsurance = function() {
    return numCars() * car_insurance_avg_per_mo_single;
};

let carOwnership = function() {
    return numCars() * totalCostPerCar();
};

let totalCostPerCar = function() {
    return car_registration +
            car_emissions +
            car_maintenance +
            taxOnCarPurchase() +
            carPaymentYearly() +
            gasYearly();
};

// let taxOnCarPurchase = function() {
//     return car_miles_per_gallon * 0.071;
// };

// let carPaymentMonthly = function() {
//     return car_monthly_payment / 2;
// };

// let taxOnCarPurchaseYearly = function() {
//     return taxOnCarPurchase() / 6;
// };
//
// let carPaymentYearly = function() {
//     return  carPaymentMonthly() * 12;
// };
//
// let gasYearly = function() {
//     return car_gas_price * (car_miles / car_miles_per_gallon);
// };
//
// let totalCostTwoCars = function() {
//     return totalCostPerCar() * 2;
// };

let entertainmentCost = function() {
    return  (familySize() == 1 ? entertainment_household_of_1 :
                (familySize() == 2 ? entertainment_household_of_2:
                    (familySize() == 3 ? entertainment_household_of_3 :
                        (familySize() == 4 ? entertainment_household_of_4 :
                            entertainment_household_of_5_or_more
                        )
                    )
                )
            );
};

let miscCost = function() {
    return  (familySize() == 1 ? miscOne :
                (familySize() == 2 ? miscTwo :
                    (familySize() == 3 ? miscThree :
                        (familySize() == 4 ? miscFour:
                            (familySize() == 5 ? miscFiveOrMore():
                                miscFiveOrMore70kPlus()
                            )
                        )
                    )
                )
            );
};

let excessiveChildrenCost = function() {
    return excessiveChildren() * 6000;
};

let excessiveAdultsCost = function() {
    return excessiveAdults() * 8000;
};

// let miscOne = function() {
//     return  misc_for_1_15000_to_19999 +
//             personal_products_for_1_15000_to_19999 +
//             housekeeping_supplies_for_1_15000_to_19999 +
//             apparel_for_1_15000_to_19999;
// };
//
// let miscTwo = function() {
//     return  misc_for_2_20000_to_29999 +
//             personal_products_for_2_20000_to_29999 +
//             housekeeping_supplies_for_2_20000_to_29999 +
//             apparel_for_2_20000_to_29999;
// };
//
// let miscThree = function() {
//     return  misc_for_3_30000_to_39999 +
//             personal_products_for_3_30000_to_39999 +
//             housekeeping_supplies_for_3_30000_to_39999 +
//             apparel_for_3_30000_to_39999;
// };
//
// let miscFour = function() {
//     return  misc_for_4_50000_to_69999 +
//             personal_products_for_4_50000_to_69999 +
//             housekeeping_supplies_for_4_50000_to_69999 +
//             apparel_for_4_50000_to_69999;
// };
//
// let miscFiveOrMore = function() {
//     return  misc_for_5_or_more_50000_to_69999 +
//             personal_products_for_5_or_more_50000_to_69999 +
//             housekeeping_supplies_for_5_or_more_50000_to_69999 +
//             apparel_for_5_or_more_50000_to_69999;
// };
//
// let miscFiveOrMore70kPlus = function() {
//     return  misc_for_5_or_more_70000_and_up +
//             personal_products_for_5_or_more_70000_and_up +
//             housekeeping_supplies_for_5_or_more_70000_and_up +
//             apparel_for_5_or_more_70000_and_up;
// };

// let foodFamilyType = function() {
//     let multiplier = 0;
//
//     if (numAdults() == 1 && numChildren() == 0){
//         multiplier = 1.20;
//     }
//     else if (numAdults() == 1 && numChildren() == 1){
//         multiplier = 1.10;
//     }
//     else if (numAdults() == 1 && numChildren() == 2){
//         multiplier = 1.05;
//     }
//     else if (numAdults() == 1 && numChildren() == 3) {
//         multiplier = 1.0;
//     }
//     else if (numAdults() == 1 && (numChildren() == 4 || numChildren() >= 5)){
//         multiplier = 0.95;
//     }
//     else if (numAdults() == 2 && numChildren() == 0){
//         multiplier = 1.10;
//     }
//     else if (numAdults() == 2 && numChildren() == 1){
//         multiplier = 1.05;
//     }
//     else if (numAdults() == 2 && numChildren() == 2){
//         multiplier = 1.0;
//     }
//     else if (numAdults() == 2 && numChildren() == 3 || numChildren() == 4) {
//         multiplier = 0.95;
//     }
//     else if (numAdults() == 2 && (numChildren() >= 5)){
//         multiplier = 0.90;
//     }
//     else {
//         return 0;
//     }
//
//     return multiplier * (   numAdults() * low_cost_food_plan_price_per_mo_weber_county_adult +
//                             numInfants() * low_cost_food_plan_price_per_mo_weber_county_infant +
//                             numPreschoolers() * low_cost_food_plan_price_per_mo_weber_county_preschooler +
//                             numSchoolagers() * low_cost_food_plan_price_per_mo_weber_county_schoolager +
//                             numTeenagers() * low_cost_food_plan_price_per_mo_weber_county_teenager
//                             );
// };

// let annualFoodCostFamilyType = function() {
//     return foodFamilyType() * 12;
// };














































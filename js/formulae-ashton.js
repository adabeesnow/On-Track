/**
 * Created by doebo on 2/1/2017.
 */

let center_care_avg_0_to_12_mo = 653.65;
let center_care_avg_1_yr = 663.05;
let center_care_avg_2_yr = 535.23;
let center_care_avg_3_yr = 511.42;
let center_care_avg_4_yr = 503.42;
let center_care_avg_5_yr = 511.33;
let center_care_avg_kindergarten_in = 466.12;
let center_care_avg_kindergarten_out = 489.09;
let center_care_avg_schoolage_in = 442.00;
let center_care_avg_schoolage_out = 476.89;
let family_care_avg_0_to_12_mo = 514.77;
let family_care_avg_1_yr = 521.68;
let family_care_avg_2_yr = 482.32;
let family_care_avg_3_yr = 467.64;
let family_care_avg_4_yr = 457.12;
let family_care_avg_5_yr = 467.38;
let family_care_avg_kindergarten_in = 412.79;
let family_care_avg_kindergarten_out = 437.43;
let family_care_avg_schoolage_in = 384.65;
let family_care_avg_schoolage_out = 439.08;
let household_income_as_percentage_of_federal_poverty_line_list = {};
let applicable_figure_list = {};
let gross_income = 21999.30;
let family_size_list = {};
let poverty_level_list = {};
let housing_1_bed_84401 = 550.00;
let housing_1_bed_84403 = 560.00;
let housing_1_bed_84404 = 620.00;
let housing_1_bed_84405 = 620.00;
let housing_1_bed_84408 = 610.00;
let housing_2_bed_84401 = 710.00;
let housing_2_bed_84403 = 720.00;
let housing_2_bed_84404 = 790.00;
let housing_2_bed_84405 = 790.00;
let housing_2_bed_84408 = 780.00;
let housing_3_bed_84401 = 1020.00;
let housing_3_bed_84403 = 1030.00;
let housing_3_bed_84404 = 1130.00;
let housing_3_bed_84405 = 1130.00;
let housing_3_bed_84408 = 1120.00;
let housing_4_bed_84401 = 1170.00;
let housing_4_bed_84403 = 1190.00;
let housing_4_bed_84404 = 1300.00;
let housing_4_bed_84405 = 1300.00;
let housing_4_bed_84408 = 1290.00;
let low_cost_food_plan_price_per_mo_weber_county_infant = 118.84;
let low_cost_food_plan_price_per_mo_weber_county_preschooler = 124.92;
let low_cost_food_plan_price_per_mo_weber_county_schoolager = 193.37;
let low_cost_food_plan_price_per_mo_weber_county_teenager = 209.30;
let low_cost_food_plan_price_per_mo_weber_county_adult = 210.30;
let car_insurance_avg_per_mo_single = 465.64;
let car_insurance_avg_per_mo_married = 466.00;
let car_price = 5341.00;
let car_miles_per_gallon = 26.00;
let car_finance_cost = 373.64;
let car_monthly_payment = 158.74;
let car_gas_price = 2.75;
let car_miles = 4716.00;
let car_registration = 110.50;
let car_emissions = 27.00;
let car_maintenance = 580.00;
let employer_health_avg_number_of_single = 1;
let employer_health_avg_number = 2;
let employer_health_avg_number_of_family = 3;
let employer_health_premium_in_avg_single = 1406.00;
let employer_health_premium_in_avg = 2592.00;
let employer_health_premium_in_avg_family = 3412.00;
let out_of_pocket_infant = 31.16;
let out_of_pocket_preschooler = 31.16;
let out_of_pocket_schoolager = 93.24;
let out_of_pocket_teen = 93.24;
let out_of_pocket_adult = 107.62;
let entertainment_household_of_1 = 1139.00;
let entertainment_household_of_2 = 1496.00;
let entertainment_household_of_3 = 1650.00;
let entertainment_household_of_4 = 2379.00;
let entertainment_household_of_5_or_more = 2429.00;
let misc_for_1_15000_to_19999 = 403.00;
let personal_products_for_1_15000_to_19999 = 311.00;
let housekeeping_supplies_for_1_15000_to_19999 = 307.00;
let apparel_for_1_15000_to_19999 = 593.00;
let misc_for_2_20000_to_29999 = 275.00;
let personal_products_for_2_20000_to_29999 = 487.00;
let housekeeping_supplies_for_2_20000_to_29999 = 520.00;
let apparel_for_2_20000_to_29999 = 709.00;
let misc_for_3_30000_to_39999 = 389.00;
let personal_products_for_3_30000_to_39999 = 522.00;
let housekeeping_supplies_for_3_30000_to_39999 = 400.00;
let apparel_for_3_30000_to_39999 = 1230.00;
let misc_for_4_50000_to_69999 = 512.00;
let personal_products_for_4_50000_to_69999 = 730.00;
let housekeeping_supplies_for_4_50000_to_69999 = 598.00;
let apparel_for_4_50000_to_69999 = 1676.00;
let misc_for_5_or_more_50000_to_69999 = 610.00;
let personal_products_for_5_or_more_50000_to_69999 = 582.00;
let housekeeping_supplies_for_5_or_more_50000_to_69999 = 752.00;
let apparel_for_5_or_more_50000_to_69999 = 2271.00;
let misc_for_5_or_more_70000_and_up = 932.00;
let personal_products_for_5_or_more_70000_and_up = 980.00;
let housekeeping_supplies_for_5_or_more_70000_and_up = 1115.00;
let apparel_for_5_or_more_70000_and_up = 3095.00;
let income_at_least_list = [];
let income_less_than_list = [];
let credit_amount_single_0_children_list = [];
let credit_amount_single_1_children_list = [];
let credit_amount_single_2_children_list = [];
let credit_amount_single_3_children_list = [];
let credit_amount_married_filing_jointly_0_children_list = [];
let credit_amount_married_filing_jointly_1_children_list = [];
let credit_amount_married_filing_jointly_2_children_list = [];
let credit_amount_married_filing_jointly_3_children_list = [];
let federal_payroll_tax_multiplier = 0.0765;
let qualifying_child_care_expense_zero = 0;
let qualifying_child_care_expsnse_one = 3000;
let qualifying_child_care_expense_2ormore = 6000;
let utah_taxes_owed_less_than_zero = 0;


// User input variables

let number_of_adults = null; //FamilyComposition!G4
let number_of_infants = null; //FamilyComposition!G7
let number_of_preschoolers = null; //FamilyComposition!G10
let number_of_schoolagers = null; //FamilyComposition!G13
let number_of_teenagers = null; //FamilyComposition!G16
let estimated_babysitting_cost = null;
let childcare_needed_bool = true;
let use_family_care_bool = false;
let number_of_bedrooms = null;
let use_marketplace_health_insurance_bool = false;
let number_of_cars = -1;
let number_of_public_transport_passes_adult = null;
let number_of_public_transport_passes_child = null;

let qualifyingChildCareExpenses = function(){
    let num_kids = number_of_infants + number_of_preschoolers + number_of_schoolagers;
    return (
        (num_kids)===0?qualifying_child_care_expense_zero:(
            (num_kids)==1?qualifying_child_care_expsnse_one:(
                (num_kids)>1?qualifying_child_care_expense_2ormore:"False")));
};

let federalPayrollTax = function(){
    return(federal_payroll_tax_multiplier * gross_income);
};

let federalTaxOwed = function(){
    return fedTaxOwedLessNonRefundableTax - fedDeductionPlusStateExemption;
};

let utahTaxesOwed = function(){
    return ((stateTaxBeforeCredits-utahTaxCredit)<0?utah_taxes_owed_less_than_zero:(stateTaxBeforeCredits-utahTaxCredit));
};

//Use CostByAge!B19 formula 'overallCost'
let totalExpenses = function(){
    return overallCost();
};

let savings1PercentGross = function() {
    return gross_income * 0.01;
};

let totalExpensesPlusSavings = function() {
    return savings1PercentGross + totalExpenses;
};

let totalTax = function() {
    return federalTaxOwed+utahTaxesOwed+federalPayrollTax;
};

let netYearlyIncome = function() {
    return gross_income-totalTax;
};

//use CostByAge!B9 'familySize' formula
let familySize = function() {
    return 'familySize';
};

let standardDeduction = function() {
    return (number_of_adults===1?(familySize>1?9250:6300):12600);
};

let federalExemptions = function() {
    return familySize * 4000;
};

let stateExemptions = function() {
    return familySize * 3000;
};

let grossTaxableFederal = function() {
    return ((gross_income-federalExemptions-standardDeduction<0)?0:gross_income-federalExemptions-standardDeduction);
};

let utahStateCreditValueHolder = function() {
    return (number_of_adults===1?(familySize>=2?20707:13805):27610);
};

let stateTaxBeforeCredits = function () {
    return gross_income * 0.05;
};

let grossTaxFedUtahStateCreditValueHold = function () {
    return (gross_income-utahStateCreditValueHolder>0?gross_income-utahStateCreditValueHolder:0);
};

let creditBeforePhaseOut = function () {
    return (standardDeduction+stateExemptions)*0.06;
};

let phaseOutX = function () {
    return grossTaxFedUtahStateCreditValueHold*0.013;
};

let numberOfChildren = function () {
    return (number_of_infants + number_of_preschoolers + number_of_schoolagers + number_of_teenagers);
};

let federalTaxesOwedBeforeCredits = function () {
    return (number_of_adults===1?(familySize>1?((grossTaxableFederal-13150)<0?(grossTaxableFederal*0.1):((grossTaxableFederal-50200)<0?(grossTaxableFederal-13150)*0.15+1315:((grossTaxableFederal-129600)<0?(grossTaxableFederal-50200)*0.25+1315+5557.35:((grossTaxableFederal-209850)<0?(grossTaxableFederal-129600)*0.28+1315+5557.35+19849.75:((grossTaxableFederal-411500)<0?(grossTaxableFederal-209850)*0.33+1315+5557.35+19849.75+22469.72:(grossTaxableFederal-411500)*0.396+1315+5557.35+19849.75+22469.72+66544.17))))):((grossTaxableFederal-9225)<0?(grossTaxableFederal*0.1):((grossTaxableFederal-37450)<0?(grossTaxableFederal-9225)*0.15+922.5:((grossTaxableFederal-90750)<0?(grossTaxableFederal-37450)*0.25+922.5+4233.75:((grossTaxableFederal-189300)<0?(grossTaxableFederal-90751)*0.28+922.5+4233.75+13324.75:((grossTaxableFederal-411500)<0?(grossTaxableFederal-189301)*0.33+922.5+4233.75+13324.75+27593:(grossTaxableFederal-411500)*0.396+922.5+4233.75+13324.75+27593+73325.67)))))):((grossTaxableFederal-18450)<0?(grossTaxableFederal*0.1):((grossTaxableFederal-74900)<0?(grossTaxableFederal-18450)*0.15+1845:((grossTaxableFederal-181500)<0?(grossTaxableFederal-74900)*0.25+1845+8467.5:((grossTaxableFederal-378600)<0?(grossTaxableFederal-181500)*0.28+1845+8467.5+26650:((grossTaxableFederal-823000)<0?(grossTaxableFederal-378600)*0.33+1845+8467.5+26650+55188:(grossTaxableFederal-823000)*0.396+1845+8467.5+26650+55188+146652))))));
};

let eitc = function () {

};

let childTaxCredit = function () {
    return numberOfChildren * 1000;
};

let adjustedChildTaxCredit = function () {

};

let federalTaxesLessChildCareTaxCredit = function () {
    return (federalTaxesOwedBeforeCredits<childCareTaxCredit?0:federalTaxesOwedBeforeCredits-childCareTaxCredit);
};

let adjustedChildTaxCreditUsed = function () {
    return (adjustedChildTaxCredit<federalTaxesLessChildCareTaxCredit?adjustedChildTaxCredit:federalTaxesLessChildCareTaxCredit);
};

let additionalChildTaxCredit = function () {
    return ((numberOfChildren<=3?(((((gross_income-3000)<=0?0:(gross_income-3000))*0.15))<((((numberOfChildren*1000)-adjustedChildTaxCreditUsed)<=0?0:((numberOfChildren*1000)-adjustedChildTaxCreditUsed)))?(((gross_income-3000)<=0?0:(gross_income-3000))*0.15):((((numberOfChildren*1000)-adjustedChildTaxCreditUsed)<=0?0:((numberOfChildren*1000)-adjustedChildTaxCreditUsed)))):(((gross_income-3000)*0.15)>=((numberOfChildren*1000)-adjustedChildTaxCreditUsed)?((numberOfChildren*1000)-adjustedChildTaxCreditUsed):(((((0.0765*gross_income)-eitc)<0?0:((0.0765*gross_income)-eitc))>(((gross_income-3000)<=0?0:(gross_income-3000))*0.15)?(((0.0765*gross_income)-eitc)<0?0:(((0.0765*gross_income)-eitc))):(((gross_income-3000)<=0?0:(gross_income-3000))*0.15))<((((numberOfChildren*1000)-adjustedChildTaxCreditUsed)<=0?0:((numberOfChildren*1000)-adjustedChildTaxCreditUsed)))?((((0.0765*gross_income)-eitc)<0?0:((0.0765*gross_income)-eitc))>(((gross_income-3000)<=0?0:(gross_income-3000))*0.15)?(((0.0765*gross_income)-eitc)<0?0:(((0.0765*gross_income)-eitc))):(((gross_income-3000)<=0?0:(gross_income-3000))*0.15)):((numberOfChildren*1000)-adjustedChildTaxCreditUsed)))));
};

let childCareTaxCredit = function () {

};

let sumOfNonRefundableTaxCredits = function () {
    return childCareTaxCredit + adjustedChildTaxCredit;
};

let sumOfRefundableTaxCredits = function () {
    return (eitc==null?0:eitc) + additionalChildTaxCredit; // not sure on this one
};

let fedTaxOwedLessNonRefundableTax = function () {
    return (federalTaxesOwedBeforeCredits-sumOfNonRefundableTaxCredits<0?0:federalTaxesOwedBeforeCredits-sumOfNonRefundableTaxCredits);
};

let fedDeductionPlusStateExemption = function () {
    return (stateExemptions+standardDeduction) * 0.06;
};

let utahTaxCredit = function () {
    return (phaseOutX>creditBeforePhaseOut?0:creditBeforePhaseOut()-phaseOutX);
};
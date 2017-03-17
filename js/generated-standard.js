/**
 * Created by bpalm_000 on 2/22/2017.
 */
let grossHourlyIncome = function(){
    return annualGrossIncome() / 52 / 40;
};

let netHourlyIncome = function(){
    return annualNetIncome() / 52 / 40;
};

let savingsYearly = function() {
    return ehcSavings1PercentGross();
};

let netTaxesYearly = function() {
    return (use_marketplace_health_insurance_bool==false?ehcTotalTax():mhcTotalTax());
};

let annualFoodCosts = function() {
    //return foodCostAnnualTotal();
    return annualFoodCostFamilyType();
};

let annualCarInsurance = function() {
    return carInsurance();
};

let annualCarOwnership = function() {
    return carOwnership();
};

let annualPublicTransportation = function() {
    return publicTransitCost();
};

let annualHealthInsurance = function() {
    return (use_marketplace_health_insurance_bool===false?healthCareEmployerCost():marketplaceHealthCareCostBeforeOOP());
};

let annualOutOfPocketCosts = function() {
    return (use_marketplace_health_insurance_bool===false?healthCareEmployerOOPTotal():healthCareMarketplaceOOPTotal());
};

let annualEntertainmentCosts = function() {
    return entertainmentCost();
};

let annualMiscellaneousCosts = function() {
    return miscCost();
};

let annualHousingCosts = function() {
    return (number_of_bedrooms==-1?housingCostAutomatic():(number_of_bedrooms==1?annualOneBedAverage():
        (number_of_bedrooms==2?annualTwoBedAverage():(number_of_bedrooms==3?annualThreeBedAverage():
            (number_of_bedrooms==4?annualFourBedAverage:0)))));
};

let annualChildcareCosts = function() {
    return (estimated_babysitting_cost>0?estimated_babysitting_cost:(use_family_care_bool===true?familyChildCareCost():childCareAnnualTotal()));
};

let annualGrossIncome = function(){
    if(use_marketplace_health_insurance_bool){
        return mhc_gross_income
    }
    else{
        return ehc_gross_income
    }
};

let annualNetIncome = function(){
    if(use_marketplace_health_insurance_bool){
        return mhcNetYearlyIncome()
    }
    else{
        return ehcNetYearlyIncome()
    }
};

let annualTotalExpenses = function(){
    return(annualHousingCosts() + annualChildcareCosts() + annualFoodCosts() + annualCarInsurance() + annualCarOwnership() +
    annualPublicTransportation() + annualHealthInsurance() + annualOutOfPocketCosts() + annualEntertainmentCosts() + annualMiscellaneousCosts());
};


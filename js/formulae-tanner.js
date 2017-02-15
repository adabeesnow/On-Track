/**
 * Created by tannergriffin on 2/5/2017.
 */
// CONSTANTS

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
let poverty_level_list = [11670, 15730, 19790, 23850, 27910, 31970, 36030, 40090];
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
let employer_health_premium_in_avg_single = 1406.00;
let employer_health_premium_in_avg_couple = 2592.00;
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


// Out of Pocket marketplace costs
let marketplace_oop_infant = 46.74;
let marketplace_oop_preschooler = 46.74;
let marketplace_oop_schoolager = 139.86;
let marketplace_oop_teenager = 139.86;
let marketplace_oop_adult = 161.43;

let employer_oop_infant = 31.16;
let employer_oop_preschooler = 31.16;
let employer_oop_schoolager = 93.24;
let employer_oop_teenager = 93.24;
let employer_oop_adult = 107.62;

// Marketplace health insurance costs
let adult_marketplace_cost = 2536;
let child_marketplace_cost = 2536;

// Taxes Constants
let benchmark_silver_base = 2932;
let benchmark_silver_additional = 1673;
let child_tax_credit = 1000;

// Public Transportation Constants
let public_transportation_child_cost = 753;
let public_transportation_adult_cost = 1005;


// User input variables

let number_of_adults = null;
let number_of_infants = null;
let number_of_preschoolers = null;
let number_of_schoolagers = null;
let number_of_teenagers = null;
let estimated_babysitting_cost = null;
let childcare_needed_bool = true;
let use_family_care_bool = false;
let number_of_bedrooms = null;
let use_marketplace_health_insurance_bool = false;
let number_of_cars = -1;
let number_of_public_transport_passes_adult = null;
let number_of_public_transport_passes_child = null;


// B8
let numChildren = function () {
    return number_of_infants + number_of_preschoolers + number_of_schoolagers + number_of_teenagers
};

let numChildrenSchoolageAndUnder = function () {
    return number_of_infants + number_of_preschoolers + number_of_schoolagers;
};

// B9
let familySize = function () {
    return number_of_infants + number_of_preschoolers + number_of_schoolagers + number_of_teenagers + number_of_adults
};

//B11
let excessiveChildren = function () {
    numChildren = numChildren();
    return Math.max(0, numChildren - 5);
};

//B12
let excessiveAdults = function () {
    return Math.max(0, number_of_adults - 5);
};

// B14
let numCars = function () {
    if (number_of_cars == -1) return number_of_adults;
    else return number_of_cars;
};


// C16
let housingCost = function () {
    let total = 0;
    let beds = 0;
    if (number_of_bedrooms == -1) {
        beds = Math.ceil(number_of_adults / 2) + Math.ceil(numChildren() / 2)
    }
    else beds = number_of_bedrooms;

    if (beds == 1) {
        total =
            housing_1_bed_84401 +
            housing_1_bed_84403 +
            housing_1_bed_84404 +
            housing_1_bed_84405 +
            housing_1_bed_84408;
    }
    else if (beds == 2) {
        total =
            housing_2_bed_84401 +
            housing_2_bed_84403 +
            housing_2_bed_84404 +
            housing_2_bed_84405 +
            housing_2_bed_84408;
    } else if (beds == 3) {
        total =
            housing_3_bed_84401 +
            housing_3_bed_84403 +
            housing_3_bed_84404 +
            housing_3_bed_84405 +
            housing_3_bed_84408;
    } else if (beds == 4) {
        total =
            housing_4_bed_84401 +
            housing_4_bed_84403 +
            housing_4_bed_84404 +
            housing_4_bed_84405 +
            housing_4_bed_84408;
    }

    return total / 5;
};


// CHILD CARE FUNCTIONS

let centerCareMonthlyAvgInfant = function () {
    let avg_cost = (
            center_care_avg_0_to_12_mo +
            center_care_avg_1_yr +
            center_care_avg_2_yr
        ) / 3;

    return avg_cost * number_of_infants
};

let centerCareMonthlyAvgPreschooler = function () {
    let avg_cost = (
            center_care_avg_3_yr +
            center_care_avg_4_yr +
            center_care_avg_5_yr
        ) / 3;

    return avg_cost * number_of_preschoolers;
};

let centerCareMonthlyAvgSchoolagerIn = function () {
    return center_care_avg_kindergarten_in * .14 + center_care_avg_schoolage_in * .86;
};
let centerCareMonthlyAvgSchoolagerOut = function () {
    return center_care_avg_kindergarten_out * .14 + center_care_avg_schoolage_out * .86;
};
let centerCareMonthlyAvgSchoolager = function () {
    return (centerCareMonthlyAvgSchoolagerIn() * .75 + centerCareMonthlyAvgSchoolagerOut() * .25) * number_of_schoolagers;
};


let familyCareMonthlyAvgInfant = function () {
    let avg_cost = (
            family_care_avg_0_to_12_mo +
            family_care_avg_1_yr +
            family_care_avg_2_yr
        ) / 3;
    return avg_cost * number_of_infants
};
let familyCareMonthlyAvgPreschooler = function () {
    let avg_cost = (
        family_care_avg_3_yr +
        family_care_avg_4_yr +
        family_care_avg_5_yr
    );
    return avg_cost * number_of_preschoolers
};
let familyCareMonthlyAvgSchoolagerIn = function () {
    return family_care_avg_kindergarten_in * .14 + family_care_avg_schoolage_in * .86;
};
let familyCareMonthlyAvgSchoolagerOut = function () {
    return family_care_avg_kindergarten_out * .14 + family_care_avg_schoolage_out * .86;
};
let familyCareMonthlyAvgSchoolager = function () {
    return (familyCareMonthlyAvgSchoolagerIn() * .75 + familyCareMonthlyAvgSchoolagerOut() * .25) * number_of_schoolagers;
};

let centerCareAnnualInfant = function () {
    return centerCareMonthlyAvgInfant() * 12;
};
let centerCareAnnualPreschooler = function () {
    return centerCareMonthlyAvgPreschooler() * 12;
};
let centerCareAnnualSchoolager = function () {
    return centerCareMonthlyAvgSchoolager() * 12;
};
let familyCareAnnualInfant = function () {
    return familyCareMonthlyAvgInfant() * 12;
};
let familyCareAnnualPreschooler = function () {
    return familyCareMonthlyAvgPreschooler() * 12;
};
let familyCareAnnualSchoolager = function () {
    return familyCareMonthlyAvgSchoolager() * 12;
};

let childCareAnnualInfant = function () {
    if (use_family_care_bool) {
        return familyCareAnnualInfant();
    } else return centerCareAnnualInfant();
};
let childCareAnnualPreschooler = function () {
    if (use_family_care_bool) {
        return familyCareAnnualPreschooler();
    } else return centerCareAnnualPreschooler();
};
let childCareAnnualSchoolager = function () {
    if (use_family_care_bool) {
        return familyCareAnnualSchoolager();
    } else return centerCareAnnualSchoolager();
};
let childCareAnnualTotal = function () {
    if (childcare_needed_bool) {
        return childCareAnnualInfant() +
            childCareAnnualPreschooler() +
            childCareAnnualSchoolager()
    } else return 0;
};


// FOOD FUNCTIONS

let foodAnnualInfant = function () {
    return low_cost_food_plan_price_per_mo_weber_county_infant * 12 * number_of_infants;
};
let foodAnnualPreschooler = function () {
    return low_cost_food_plan_price_per_mo_weber_county_preschooler * 12 * number_of_preschoolers;
};
let foodAnnualSchoolager = function () {
    return low_cost_food_plan_price_per_mo_weber_county_schoolager * 12 * number_of_schoolagers;
};
let foodAnnualTeenager = function () {
    return low_cost_food_plan_price_per_mo_weber_county_teenager * 12 * number_of_teenagers;
};
let foodAnnualAdult = function () {
    return low_cost_food_plan_price_per_mo_weber_county_adult * 12 * number_of_adults;
};

let foodCostAnnualTotal = function () {
    return foodAnnualAdult() +
        foodAnnualInfant() +
        foodAnnualPreschooler() +
        foodAnnualSchoolager() +
        foodAnnualTeenager()
};

let healthCareMarketplaceOOPInfant = function () {
    return marketplace_oop_infant * number_of_infants;
};
let healthCareMarketplaceOOPPreschooler = function () {
    return marketplace_oop_preschooler * number_of_preschoolers;
};
let healthCareMarketplaceOOPSchoolager = function () {
    return marketplace_oop_schoolager * number_of_schoolagers;
};
let healthCareMarketplaceOOPTeenager = function () {
    return marketplace_oop_teenager * number_of_teenagers;
};
let healthCareMarketplaceOOPAdult = function () {
    return marketplace_oop_adult * number_of_adults;
};
let healthCareMarketplaceOOPTotal = function () {
    return healthCareMarketplaceOOPInfant() +
        healthCareMarketplaceOOPPreschooler() +
        healthCareMarketplaceOOPSchoolager() +
        healthCareMarketplaceOOPTeenager() +
        healthCareMarketplaceOOPAdult();
};

let healthCareEmployerOOPInfant = function () {
    return employer_oop_infant * number_of_infants;
};
let healthCareEmployerOOPPreschooler = function () {
    return employer_oop_preschooler * number_of_preschoolers;
};
let healthCareEmployerOOPSchoolager = function () {
    return employer_oop_schoolager * number_of_schoolagers;
};
let healthCareEmployerOOPTeenager = function () {
    return employer_oop_teenager * number_of_teenagers;
};
let healthCareEmployerOOPAdult = function () {
    return employer_oop_adult * number_of_adults;
};
let healthCareEmployerOOPTotal = function () {
    return healthCareEmployerOOPInfant() +
        healthCareEmployerOOPPreschooler() +
        healthCareEmployerOOPSchoolager() +
        healthCareEmployerOOPTeenager() +
        healthCareEmployerOOPAdult();
};

let marketplaceHealthCareAdult = function () {
    return adult_marketplace_cost * number_of_adults;
};
let marketplaceHealthCareChild = function () {
    return child_marketplace_cost * numChildren();
};

let marketplaceHealthCareCostBeforeOOP = function () {
    return marketplaceHealthCareChild() + marketplaceHealthCareAdult();
};

let totalMarketplaceHealthCareCost = function () {
    return marketplaceHealthCareAdult() + marketplaceHealthCareChild() + healthCareMarketplaceOOPTotal();
};

let healthCareEmployerCost = function () {
    let size = familySize();
    if (size == 1) {
        return employer_health_premium_in_avg_single
    } else if (size == 2) {
        return employer_health_premium_in_avg_couple
    } else {
        return employer_health_premium_in_avg_family
    }
};

let healthCareEmployerCombinedTotal = function () {
    return healthCareEmployerCost() + healthCareEmployerOOPTotal();
};

let mhcQualifyingChildCareExpenses = function () {
    return qualifyingChildCareExpenses();
};

let mhcBenchmarkSilverPlan = function () {
    return benchmark_silver_base + (
            numChildren() * benchmark_silver_additional
        )
};

let mhcFamilySize = function () {
    return familySize();
};

let mhcFederalPovertyLine = function () {
    let family_size = mhcFamilySize();
    if (family_size <= poverty_level_list.length) {
        return poverty_level_list[family_size]
    }
    else return 0;
};

let mhcGrossIncomeOverFederalPovertyLine = function () {
    return mhc_gross_income / mhcFederalPovertyLine() * 100.0;
};

let mhcValueFromApplicableFigureTable = function () {
    let percent_of_poverty_line = Math.floor(mhcGrossIncomeOverFederalPovertyLine());
    if (percent_of_poverty_line < 133) {
        return applicable_figure_list[0]
    }
    else if (percent_of_poverty_line > 299) {
        return applicable_figure_list[-1]
    }
    else {
        return applicable_figure_list[percent_of_poverty_line - 133]
    }
};

let mhcApplicableFigureXGrossIncome = function () {
    return mhcValueFromApplicableFigureTable() * mhc_gross_income;
};


let mhcBenchApplicableFigureXGrossIncome = function () {
    return mhcApplicableFigureXGrossIncome() - mhcBenchmarkSilverPlan();
};

let mhcMarketPlacePlanChosen = function () {
    return marketplaceHealthCareCostBeforeOOP()
};

let mhcPremiumTaxCredit = function () {
    return Math.max(mhcMarketPlacePlanChosen(), mhcBenchApplicableFigureXGrossIncome())
};

let mhcEligibleExpenses = function () {
    return mhcMarketPlacePlanChosen() - mhcPremiumTaxCredit();
};

let mhcUtahsHealthBenefitPlanCredit = function () {
    return mhcEligibleExpenses() * .05;
};

let mhcNumberOfChildren = function () {
    return numChildren();
};

let mhcChildTaxCredit = function () {
    return mhcNumberOfChildren() * child_tax_credit;
};

let mhcAdjustedChildTaxCredit = function () {
    return ((mhc_gross_income < 75000 ? mhcChildTaxCredit() : (((mhc_gross_income - 75000) * 0.05))));
};

let mhcFedTaxOwedBeforeCredits = function () {
    return federalTaxesOwedBeforeCredits();
};

let mhcChildCareTaxCredit = function () {
    let base_level = 43000;

    if (mhc_gross_income > 75000) {
        return 0
    } else {
        let difference_points = base_level - mhc_gross_income;
        if (difference_points < 0) {
            return .2;
        }
        else {
            difference_points = Math.floor(difference_points / 2000);
            return difference_points * .01 + .2;
        }
    }
};

let mhcFedTaxLessChildCareTaxCredit = function () {
    return mhcFedTaxOwedBeforeCredits() - mhcChildCareTaxCredit()
};

let mhcAdjustedChildTaxCreditUsed = function () {
    return Math.max(
        mhcAdjustedChildTaxCredit(),
        mhcFedTaxLessChildCareTaxCredit()
    );
};

let mhcAdditionalChildTaxCredit = function () {
    return (mhcNumberOfChildren() <= 3 ? (((((mhc_gross_income - 3000) <= 0 ? 0 : (mhc_gross_income - 3000)) * 0.15)) <
    ((((mhcNumberOfChildren() * 1000) - mhcAdjustedChildTaxCreditUsed()) <= 0 ? 0 : ((mhcNumberOfChildren() * 1000) - mhcAdjustedChildTaxCreditUsed()))) ? (((mhc_gross_income - 3000) <= 0 ? 0 : (mhc_gross_income - 3000)) * 0.15) :
        ((((mhcNumberOfChildren() * 1000) - mhcAdjustedChildTaxCreditUsed()) <= 0 ? 0 : ((mhcNumberOfChildren() * 1000) - mhcAdjustedChildTaxCreditUsed())))) : (((mhc_gross_income - 3000) * 0.15) >= ((mhcNumberOfChildren() * 1000) - mhcAdjustedChildTaxCreditUsed()) ? ((mhcNumberOfChildren() * 1000) - mhcAdjustedChildTaxCreditUsed()) :
        (((((0.0765 * mhc_gross_income) - mhcEITC()) < 0 ? 0 : ((0.0765 * mhc_gross_income) - mhcEITC())) > (((mhc_gross_income - 3000) <= 0 ? 0 : (mhc_gross_income - 3000)) * 0.15) ? (((0.0765 * mhc_gross_income) - mhcEITC())
        < 0 ? 0 : (((0.0765 * mhc_gross_income) - mhcEITC()))) : (((mhc_gross_income - 3000) <= 0 ? 0 : (mhc_gross_income - 3000)) * 0.15)) < ((((mhcNumberOfChildren() * 1000) - mhcAdjustedChildTaxCreditUsed()) <= 0 ? 0 :
            ((mhcNumberOfChildren() * 1000) - mhcAdjustedChildTaxCreditUsed()))) ? ((((0.0765 * mhc_gross_income) - mhcEITC()) < 0 ? 0 : ((0.0765 * mhc_gross_income) - mhcEITC()))
        > (((mhc_gross_income - 3000) <= 0 ? 0 : (mhc_gross_income - 3000)) * 0.15) ? (((0.0765 * mhc_gross_income) - mhcEITC()) < 0 ? 0 : (((0.0765 * mhc_gross_income) - mhcEITC()))) :
            (((mhc_gross_income - 3000) <= 0 ? 0 : (mhc_gross_income - 3000)) * 0.15)) : ((mhcNumberOfChildren() * 1000) - mhcAdjustedChildTaxCreditUsed()))))
};

let mhcStandardDeduction = function () {
    return standardDeduction();
};
let mhcFederalExemptions = function () {
    return federalExemptions();
};
let mhcStateExemptions = function () {
    return stateExemptions();
};

let mhcFederalGrossTaxible = function () {
    return Math.max(
        mhc_gross_income - mhcStandardDeduction() - mhcFederalExemptions(),
        0
    )
};
let mhcUtahStateCreditValueHolder = function () {
    return utahStateCreditValueHolder();
};
let mhcStateTaxBeforeCredits = function () {
    return mhc_gross_income * .05;
};
let mhcGrossTaxFedMinusUtahStateCredValueHolder = function () {
    return Math.max(
        mhc_gross_income - mhcUtahStateCreditValueHolder(),
        0
    );
};
let mhcCreditBeforePhaseOut = function () {
    return creditBeforePhaseOut();
};
let mhcPhaseOutX13 = function () {
    return mhcGrossTaxFedMinusUtahStateCredValueHolder() * .013;
};
let mhcSumOfNonRefundableTaxCredits = function () {
    return mhcChildCareTaxCredit() + mhcAdjustedChildTaxCredit();
};
let mhcSumOfRefundableTaxCredits = function () {
    return mhcEITC() + mhcAdditionalChildTaxCredit() + mhcPremiumTaxCredit();
};
let mhcFedTaxOwedLessNonRefundTaxCredits = function () {
    return Math.max(
        mhcFedTaxOwedBeforeCredits() - mhcSumOfNonRefundableTaxCredits(),
        0
    )
};
let mhcFedDeductionPlusStateExemptionX6Per = function () {
    return (mhcStandardDeduction() + mhcStateExemptions()) * .06
};
let mhcUtahTaxCredit = function () {
    return Math.max(
        0,
        mhcCreditBeforePhaseOut() - mhcPhaseOutX13()
    )
};
let mhcFederalPayrollTax = function () {
    return mhc_gross_income * federal_payroll_tax_multiplier;
};
let mhcFederalTaxOwed = function () {
    return mhcFedTaxOwedLessNonRefundTaxCredits() - mhcSumOfRefundableTaxCredits();
};
let mhcUtahTaxesOwed = function () {
    return Math.max(
        0,
        mhcStateTaxBeforeCredits() - mhcUtahTaxCredit() - mhcUtahsHealthBenefitPlanCredit()
    )
};
let mhcTotalExpenses = function () {
    return overallCost()
};
let mhcSavings1PercentGross = function () {
    return mhc_gross_income * .01;
};
let mhcTotalExpensesPlusSavings = function () {
    return mhcTotalExpenses() + mhcSavings1PercentGross();
};
let mhcTotalTax = function () {
    return mhcFederalPayrollTax() + mhcFederalTaxOwed() + mhcUtahTaxesOwed()
};
let mhcNetYearlyIncome = function(){
    return mhc_gross_income - mhcTotalTax();
};

let publicTransitAdult = function(){
    return number_of_public_transport_passes_adult * public_transportation_adult_cost
};
let publicTransitSchoolager = function(){
    return number_of_public_transport_passes_child * public_transportation_child_cost
};

let publicTransitCost = function(){
    return publicTransitAdult() + publicTransitSchoolager()
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
        return netYearlyIncome()
    }
};
let hourlyGrossIncome = function(){
    return annualGrossIncome() / 52 / 40;
};
let hourlyNetIncome = function(){
    return annualNetIncome() / 52 / 40;
};

/**
 * Created by adsal on 2/27/2017.
 */

//generated-standard formulas
$(document).ready(function () {
    number_of_adults = 2;
    number_of_infants = 1;
    number_of_preschoolers = 1;
    number_of_schoolagers = 1;
    number_of_teenagers = 1;
    use_marketplace_health_insurance_bool = true;
//
    let parsedJSON;
    $.ajax({
        url: 'http://icarus.cs.weber.edu/~tg46219/cottages/api/v1/entry/',
        method: 'GET',
        success: function (response) {
            parsedJSON = $.parseJSON(response);
            parsedJSON = parsedJSON.sort(
                function (a, b) {
                    return alphanum(a.entryName.replace(/\D/g, ''), b.entryName.replace(/\D/g, ''));
                }
            );
            for (let i = 0; i < parsedJSON.length; i++) {
                if (parsedJSON[i].entryName.includes("single_no_children")) {
                    credit_amount_single_0_children_list.push(parsedJSON[i].entryValue);
                }
                if (parsedJSON[i].entryName.includes("single_one_child")) {
                    credit_amount_single_1_children_list.push(parsedJSON[i].entryValue);
                }
                if (parsedJSON[i].entryName.includes("single_two_children")) {
                    credit_amount_single_2_children_list.push(parsedJSON[i].entryValue);
                }
                if (parsedJSON[i].entryName.includes("single_three_children")) {
                    credit_amount_single_3_children_list.push(parsedJSON[i].entryValue);
                }
                if (parsedJSON[i].entryName.includes("married_no_children")) {
                    credit_amount_married_filing_jointly_0_children_list.push(parsedJSON[i].entryValue);
                }
                if (parsedJSON[i].entryName.includes("married_one_child")) {
                    credit_amount_married_filing_jointly_1_children_list.push(parsedJSON[i].entryValue);
                }
                if (parsedJSON[i].entryName.includes("married_two_children")) {
                    credit_amount_married_filing_jointly_2_children_list.push(parsedJSON[i].entryValue);
                }
                if (parsedJSON[i].entryName.includes("married_three_children")) {
                    credit_amount_married_filing_jointly_3_children_list.push(parsedJSON[i].entryValue);
                }
            }

            credit_amount_single_0_children_list = credit_amount_single_0_children_list.slice(1, credit_amount_single_0_children_list.length);
            credit_amount_single_1_children_list = credit_amount_single_1_children_list.slice(1, credit_amount_single_1_children_list.length);
            credit_amount_single_2_children_list = credit_amount_single_2_children_list.slice(1, credit_amount_single_2_children_list.length);
            credit_amount_single_3_children_list = credit_amount_single_3_children_list.slice(1, credit_amount_single_3_children_list.length);
            credit_amount_married_filing_jointly_0_children_list = credit_amount_married_filing_jointly_0_children_list.slice(1, credit_amount_married_filing_jointly_0_children_list.length);
            credit_amount_married_filing_jointly_1_children_list = credit_amount_married_filing_jointly_1_children_list.slice(1, credit_amount_married_filing_jointly_1_children_list.length);
            credit_amount_married_filing_jointly_2_children_list = credit_amount_married_filing_jointly_2_children_list.slice(1, credit_amount_married_filing_jointly_2_children_list.length);
            credit_amount_married_filing_jointly_3_children_list = credit_amount_married_filing_jointly_3_children_list.slice(1, credit_amount_married_filing_jointly_3_children_list.length);

            console.log("single no kids: " + credit_amount_single_0_children_list);
            console.log("Successfully retrieved EITC entries.");

            for (let i = 0; i < 50; i++) {
                // ehc_gross_income =
                mhc_gross_income = mhcCalcGross();
            }



            console.log("annualHousingCosts(): " + annualHousingCosts());
            console.log("annualChildcareCosts(): " + annualChildcareCosts());
            console.log("annualFoodCosts(): " + annualFoodCosts());
            console.log("annualCarInsurance(): " + annualCarInsurance());
            console.log("annualCarOwnership(): " + annualCarOwnership());
            console.log("annualPublicTransportation(): " + annualPublicTransportation());
            console.log("annualHealthInsurance(): " + annualHealthInsurance());
            console.log("annualOutOfPocketCosts(): " + annualOutOfPocketCosts());
            console.log("annualEntertainmentCosts(): " + annualEntertainmentCosts());
            console.log("annualMiscellaneousCosts(): " + annualMiscellaneousCosts());
            console.log("savingsYearly(): " + savingsYearly());
            console.log("netTaxesYearly(): " + netTaxesYearly());
            console.log("annualGrossIncome(): " + annualGrossIncome());
            console.log("annualNetIncome(): " + annualNetIncome());
            console.log("annualTotalExpenses(): " + annualTotalExpenses());
            console.log("grossHourlyIncome(): " + grossHourlyIncome());
            console.log("netHourlyIncome(): " + netHourlyIncome());

            console.log("OVERALL COST: " + overallCost());

            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~ MHC TAX STUFF ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

            console.log('mhcQualifyingChildCareExpenses: ' + mhcQualifyingChildCareExpenses());
            console.log('mhcBenchApplicableFigureXGrossIncome: ' + mhcBenchApplicableFigureXGrossIncome());
            console.log('mhcMarketPlacePlanChosen: ' + mhcMarketPlacePlanChosen());
            console.log('mhcPremiumTaxCredit: ' + mhcPremiumTaxCredit());
            console.log('mhcEligibleExpenses: ' + mhcEligibleExpenses());
            console.log('mhcUtahsHealthBenefitPlanCredit: ' + mhcUtahsHealthBenefitPlanCredit());
            console.log('mhcSumOfNonRefundableTaxCredits: ' + mhcSumOfNonRefundableTaxCredits());
            console.log('mhcSumOfRefundableTaxCredits: ' + mhcSumOfRefundableTaxCredits());
            console.log('mhcFedTaxOwedLessNonRefundTaxCredits: ' + mhcFedTaxOwedLessNonRefundTaxCredits());
            console.log('mhcFedDeductionPlusStateExemptionX6Per: ' + mhcFedDeductionPlusStateExemptionX6Per());
            console.log('mhcUtahTaxCredit: ' + mhcUtahTaxCredit());
            console.log('mhcFederalPayrollTax: ' + mhcFederalPayrollTax());
            console.log('mhcFederalTaxOwed: ' + mhcFederalTaxOwed());
            console.log('mhcUtahTaxesOwed: ' + mhcUtahTaxesOwed());
            console.log('mhcTotalExpenses: ' + mhcTotalExpenses());
            console.log('mhcSavings1PercentGross: ' + mhcSavings1PercentGross());
            console.log('mhcTotalExpensesPlusSavings: ' + mhcTotalExpensesPlusSavings());
            console.log('mhcTotalTax: ' + mhcTotalTax());
            console.log('mhcNetYearlyIncome: ' + mhcNetYearlyIncome());
            console.log('mhcFamilySize: ' + mhcFamilySize());
            console.log('mhcStandardDeduction: ' + mhcStandardDeduction());
            console.log('mhcFederalExemptions: ' + mhcFederalExemptions());
            console.log('mhcStateExemptions: ' + mhcStateExemptions());
            console.log('mhcFederalGrossTaxable: ' + mhcFederalGrossTaxable());
            console.log('mhcUtahStateCreditValueHolder: ' + mhcUtahStateCreditValueHolder());
            console.log('mhcStateTaxBeforeCredits: ' + mhcStateTaxBeforeCredits());
            console.log('mhcGrossTaxFedMinusUtahStateCredValueHolder: ' + mhcGrossTaxFedMinusUtahStateCredValueHolder());
            console.log('mhcCreditBeforePhaseOut: ' + mhcCreditBeforePhaseOut());
            console.log('mhcPhaseOutX13: ' + mhcPhaseOutX13());
            console.log('mhcNumberOfChildren: ' + mhcNumberOfChildren());
            console.log('mhcFedTaxOwedBeforeCredits: ' + mhcFedTaxOwedBeforeCredits());
            console.log('mhcEITC: ' + mhcEITC());
            console.log('mhcChildTaxCredit: ' + mhcChildTaxCredit());
            console.log('mhcAdjustedChildTaxCredit: ' + mhcAdjustedChildTaxCredit());
            console.log('mhcFedTaxLessChildCareTaxCredit: ' + mhcFedTaxLessChildCareTaxCredit());
            console.log('mhcAdjustedChildTaxCreditUsed: ' + mhcAdjustedChildTaxCreditUsed());
            console.log('mhcAdditionalChildTaxCredit: ' + mhcAdditionalChildTaxCredit());
            console.log('mhcChildCareTaxCredit: ' + mhcChildCareTaxCredit());
            console.log('mhcFederalPovertyLine: ' + mhcFederalPovertyLine());
            console.log('mhcGrossIncomeOverFederalPovertyLine: ' + mhcGrossIncomeOverFederalPovertyLine());
            console.log('mhcValueFromApplicableFigureTable: ' + mhcValueFromApplicableFigureTable());
            console.log('mhcApplicableFigureXGrossIncome: ' + mhcApplicableFigureXGrossIncome());
            console.log('mhcBenchmarkSilverPlan: ' + mhcBenchmarkSilverPlan());

        }
    });


});



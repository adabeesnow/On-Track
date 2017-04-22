/**
 * Created by adsal on 2/27/2017.
 */

//generated-standard formulas
$(document).ready(function () {

    let parsedJSON;
    $.ajax({
        url: 'https://icarus.cs.weber.edu/~tg46219/cottages/api/v1/entry/',
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

            applicable_figure_list = [0.0201, 0.0302, 0.0308, 0.0314, 0.032, 0.0326, 0.0331, 0.0337, 0.0343, 0.0349, 0.0355,
                0.0361, 0.0367, 0.0373, 0.0378, 0.0384, 0.039, 0.0396, 0.0402, 0.0407, 0.0411, 0.0416, 0.0421, 0.0425, 0.043,
                0.0434, 0.0439, 0.0444, 0.0448, 0.0453, 0.0458, 0.0462, 0.0467, 0.0472, 0.0476, 0.0481, 0.0486, 0.049, 0.0495,
                0.0499, 0.0504, 0.0509, 0.0513, 0.0518, 0.0523, 0.0527, 0.0532, 0.0537, 0.0541, 0.0546, 0.055, 0.0555, 0.056,
                0.0564, 0.0569, 0.0574, 0.0578, 0.0583, 0.0588, 0.0592, 0.0597, 0.0602, 0.0606, 0.0611, 0.0615, 0.062, 0.0625,
                0.0629, 0.0634, 0.0638, 0.0641, 0.0645, 0.0648, 0.0652, 0.0655, 0.0659, 0.0662, 0.0666, 0.0669, 0.0673, 0.0676,
                0.068, 0.0683, 0.0687, 0.069, 0.0694, 0.0697, 0.0701, 0.0704, 0.0708, 0.0711, 0.0715, 0.0718, 0.0722, 0.0726,
                0.0729, 0.0733, 0.0736, 0.074, 0.0743, 0.0747, 0.075, 0.0754, 0.0757, 0.0761, 0.0764, 0.0768, 0.0771, 0.0775,
                0.0778, 0.0782, 0.0785, 0.0789, 0.0792, 0.0796, 0.0799, 0.0803, 0.0806, 0.081, 0.0813, 0.0816, 0.0819, 0.0822,
                0.0825, 0.0828, 0.083, 0.0833, 0.0836, 0.0839, 0.0842, 0.0845, 0.0848, 0.0851, 0.0854, 0.0857, 0.086, 0.0863,
                0.0865, 0.0868, 0.0871, 0.0874, 0.0877, 0.088, 0.0883, 0.0886, 0.0889, 0.0892, 0.0895, 0.0898, 0.0901, 0.0903,
                0.0906, 0.0909, 0.0912, 0.0915, 0.0918, 0.0921, 0.0924, 0.0927, 0.093, 0.0933, 0.0936, 0.0938, 0.0941, 0.0944,
                0.0947, 0.095,0.0953, 0.0956];

            if (use_marketplace_health_insurance_bool == true) {
                for (let i = 0; i < 50; i++) {
                    mhc_gross_income = mhcCalcGross();
                }
            } else {
                for (let i = 0; i < 50; i++) {
                    ehc_gross_income = ehcCalcGross();
                }
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

            // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~ TAX STUFF ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
            //
            // console.log("ehcQualifyingChildCareExpenses: " + ehcQualifyingChildCareExpenses());
            // console.log("ehcFederalPayrollTax: " + ehcFederalPayrollTax());
            // console.log("ehcFederalTaxOwed: " + ehcFederalTaxOwed());
            // console.log("ehcUtahTaxesOwed: " + ehcUtahTaxesOwed());
            // console.log("ehcTotalExpenses: " + ehcTotalExpenses());
            // console.log("ehcSavings1PercentGross: " + ehcSavings1PercentGross());
            // console.log("ehcTotalExpensesPlusSavings: " + ehcTotalExpensesPlusSavings());
            // console.log("ehcTotalTax: " + ehcTotalTax());
            // console.log("ehcNetYearlyIncome: " + ehcNetYearlyIncome());
            // console.log("ehcFamilySize: " + ehcFamilySize());
            // console.log("ehcStandardDeduction: " + ehcStandardDeduction());
            // console.log("ehcFederalExemptions: " + ehcFederalExemptions());
            // console.log("ehcStateExemptions: " + ehcStateExemptions());
            // // console.log("ehcGrossTaxableFederal: " + ehcGrossTaxablefederal());
            // console.log("ehcUtahStateCreditValueHolder: " + ehcUtahStateCreditValueHolder());
            // console.log("ehcStateTaxBeforeCredits: " + ehcStateTaxBeforeCredits());
            // console.log("ehcGrossTaxFedUtahStateCreditValueHold: " + ehcGrossTaxFedUtahStateCreditValueHold());
            // console.log("ehcCreditBeforePhaseOut: " + ehcCreditBeforePhaseOut());
            // console.log("ehcPhaseOutX: " + ehcPhaseOutX());
            // console.log("ehcNumberOfChildren: " + ehcNumberOfChildren());
            // console.log("ehcFederalTaxesOwedBeforeCredits: " + ehcFederalTaxesOwedBeforeCredits());
            // console.log("ehcEITC: " + ehcEITC());
            // console.log("ehcChildTaxCredit: " + ehcChildTaxCredit());
            // console.log("ehcAdjustedChildTaxCredit: " + ehcAdjustedChildTaxCredit());
            // console.log("ehcFederalTaxesLessChildCareTaxCredit: " + ehcFederalTaxesLessChildCareTaxCredit());
            // console.log("ehcAdjustedChildTaxCreditUsed: " + ehcAdjustedChildTaxCreditUsed());
            // console.log("ehcAdditionalChildTaxCredit: " + ehcAdditionalChildTaxCredit());
            // console.log("ehcChildCareTaxCredit: " + ehcChildCareTaxCredit());
            // console.log("ehcSumOfNonRefundableTaxCredits: " + ehcSumOfNonRefundableTaxCredits());
            // console.log("ehcSumOfRefundableTaxCredits: " + ehcSumOfRefundableTaxCredits());
            // console.log("ehcFedTaxOwedLessNonRefundableTax: " + ehcFedTaxOwedLessNonRefundableTax());
            // console.log("ehcFedDeductionPlusStateExemption: " + ehcFedDeductionPlusStateExemption());
            // console.log("ehcUtahTaxCredit: " + ehcUtahTaxCredit());//

            // update_page();
        }
    });


});



/**
 * Created by adsal on 2/22/2017.
 */

// let mhcQualifyingChildCareExpenses = function () {
//     return ehcQualifyingChildCareExpenses(); // uses ehcFunction
// };

let mhcQualifyingChildCareExpenses = function(){
    let num_kids = number_of_infants + number_of_preschoolers + number_of_schoolagers;
    return (
        (num_kids)===0?qualifying_child_care_expense_zero:(
                (num_kids)==1?qualifying_child_care_expense_one:(
                        (num_kids)>1?qualifying_child_care_expense_2ormore:"False")));
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
    return mhcFederalTaxesOwedBeforeCredits();
};

let mhcFederalTaxesOwedBeforeCredits = function () {
    return (number_of_adults===1?(mhcFamilySize()>1?((mhcGrossTaxableFederal()-13150)<0?(mhcGrossTaxableFederal()*0.1):
                ((mhcGrossTaxableFederal()-50200)<0?(mhcGrossTaxableFederal()-13150)*0.15+1315:
                    ((mhcGrossTaxableFederal()-129600)<0?(mhcGrossTaxableFederal()-50200)*0.25+1315+5557.35:
                        ((mhcGrossTaxableFederal()-209850)<0?(mhcGrossTaxableFederal()-129600)*0.28+1315+5557.35+19849.75:
                            ((mhcGrossTaxableFederal()-411500)<0?(mhcGrossTaxableFederal()-209850)*0.33+1315+5557.35+19849.75+22469.72:
                                (mhcGrossTaxableFederal()-411500)*0.396+1315+5557.35+19849.75+22469.72+66544.17))))):
            ((mhcGrossTaxableFederal()-9225)<0?(mhcGrossTaxableFederal()*0.1):
                ((mhcGrossTaxableFederal()-37450)<0?(mhcGrossTaxableFederal()-9225)*0.15+922.5:
                    ((mhcGrossTaxableFederal()-90750)<0?(mhcGrossTaxableFederal()-37450)*0.25+922.5+4233.75:
                        ((mhcGrossTaxableFederal()-189300)<0?(mhcGrossTaxableFederal()-90751)*0.28+922.5+4233.75+13324.75:
                            ((mhcGrossTaxableFederal()-411500)<0?(mhcGrossTaxableFederal()-189301)*0.33+922.5+4233.75+13324.75+27593:
                                (mhcGrossTaxableFederal()-411500)*0.396+922.5+4233.75+13324.75+27593+73325.67)))))):
        ((mhcGrossTaxableFederal()-18450)<0?(mhcGrossTaxableFederal()*0.1):
            ((mhcGrossTaxableFederal()-74900)<0?(mhcGrossTaxableFederal()-18450)*0.15+1845:
                ((mhcGrossTaxableFederal()-181500)<0?(mhcGrossTaxableFederal()-74900)*0.25+1845+8467.5:
                    ((mhcGrossTaxableFederal()-378600)<0?(mhcGrossTaxableFederal()-181500)*0.28+1845+8467.5+26650:
                        ((mhcGrossTaxableFederal()-823000)<0?(mhcGrossTaxableFederal()-378600)*0.33+1845+8467.5+26650+55188:
                            (mhcGrossTaxableFederal()-823000)*0.396+1845+8467.5+26650+55188+146652))))));
};

// let mhcChildCareTaxCredit = function () {
//     let base_level = 43000;
//
//     if (mhc_gross_income > 75000) {
//         return 0
//     } else {
//         let difference_points = base_level - mhc_gross_income;
//         if (difference_points < 0) {
//             return .2;
//         }
//         else {
//             difference_points = Math.floor(difference_points / 2000);
//             return difference_points * .01 + .2;
//         }
//     }
// };

let mhcChildCareTaxCredit = function () {
    return (mhc_gross_income>75000?0:(mhc_gross_income>43000?mhcQualifyingChildCareExpenses()*0.2:(mhc_gross_income>41000?mhcQualifyingChildCareExpenses()*0.21:(mhc_gross_income>39000?mhcQualifyingChildCareExpenses()*0.22:(mhc_gross_income>37000?mhcQualifyingChildCareExpenses()*0.23:(mhc_gross_income>35000?mhcQualifyingChildCareExpenses()*0.24:(mhc_gross_income>33000?mhcQualifyingChildCareExpenses()*0.25:(mhc_gross_income>31000?mhcQualifyingChildCareExpenses()*0.26:(mhc_gross_income>29000?mhcQualifyingChildCareExpenses()*0.27:(mhc_gross_income>27000?mhcQualifyingChildCareExpenses()*0.28:(mhc_gross_income>25000?mhcQualifyingChildCareExpenses()*0.29:(mhc_gross_income>23000?mhcQualifyingChildCareExpenses()*0.3:(mhc_gross_income>21000?mhcQualifyingChildCareExpenses()*0.31:(mhc_gross_income>19000?mhcQualifyingChildCareExpenses()*0.32:(mhc_gross_income>17000?mhcQualifyingChildCareExpenses()*0.33:(mhc_gross_income>17000?mhcQualifyingChildCareExpenses()*0.34:(mhc_gross_income<15000?mhcQualifyingChildCareExpenses()*0.35:0)))))))))))))))));
};

let mhcFedTaxLessChildCareTaxCredit = function () {
    return mhcFedTaxOwedBeforeCredits() - mhcChildCareTaxCredit();
};

let mhcAdjustedChildTaxCreditUsed = function () {
    return Math.min(
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

let mhcStandardDeduction = function() {
    return (number_of_adults===1?(mhcFamilySize()>1?9250:6300):12600);
};

let mhcFederalExemptions = function() {
    return mhcFamilySize() * 4000;
};

let mhcStateExemptions = function() {
    return mhcFamilySize() * 3000;
};

let mhcGrossTaxableFederal = function () {
    return Math.max(
        mhc_gross_income - mhcStandardDeduction() - mhcFederalExemptions(),
        0
    )
};

let mhcUtahStateCreditValueHolder = function() {
    return (number_of_adults===1?(mhcFamilySize()>=2?20707:13805):27610);
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
    return (mhcStandardDeduction()+mhcStateExemptions())*0.06;
};

// TODO: make sure all the functions are there that are in the spreadsheet


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

// Taxes!O6
let mhcEITC = function () {
    let credit_amount_list = [];
    if (mhcNumberOfChildren() == 1) {
        credit_amount_list = credit_amount_single_1_children_list;
    } else
    if (mhcNumberOfChildren() == 2) {
        credit_amount_list = credit_amount_single_2_children_list;
    } else
    if (mhcNumberOfChildren() == 0) {
        credit_amount_list = credit_amount_single_0_children_list;
    } else
    if (mhcNumberOfChildren() >= 3) {
        credit_amount_list = credit_amount_single_3_children_list;
    }
    else {
        return false;
    }

    let i = 0;
    while (i <= income_at_least_list.length) {
        if (i >= income_at_least_list.length) {
            return false;
        }
        if (mhc_gross_income > income_at_least_list[i]) {
            break;
        }
        i++;
    }
    return credit_amount_list[i];
};

/**
 * Performs a goalSeek function 6x for accuracy, returns the new mhc_gross_income value.
 * Changing cell:   gross
 * Goal cell:       expense
 * GoalSeek cell:   net
 */
let mhcCalcGross = function() {
    let gross = mhc_gross_income;
    let expense = mhcTotalExpensesPlusSavings();
    let net = function(gross, tax) { return gross-tax; };
    let tax = mhcTotalTax();

    // for (let i = 0; i < 6; i++) {
        gross = goalSeek({
            Func: net,                      // The function which should return the value of the goal cell.
            aFuncParams: [gross, tax],    // The params to be passed to the function above.
            oFuncArgTarget: {
                Position: 0                 // The position in the aFuncParams array of the value which will be changed.
            },
            Goal: expense,                  // The value which the function above should match.
            Tol: 0.01,                      // The tolerance of the final result.
            maxIter: 1000                   // The maximum number of iterations for the goalSeek function to take.
        });
    // }

    console.log('gross: ' + gross);
    console.log('tax: ' + tax);
    console.log('net: ' + net(gross, tax));
    console.log('expense: ' + expense);

    return gross;
};
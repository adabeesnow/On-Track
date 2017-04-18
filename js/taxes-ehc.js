/**
 * Created by adsal on 2/22/2017.
 */

let ehcQualifyingChildCareExpenses = function(){
    let num_kids = number_of_infants + number_of_preschoolers + number_of_schoolagers;
    return (
        (num_kids)===0?qualifying_child_care_expense_zero:(
            (num_kids)==1?qualifying_child_care_expense_one:(
                (num_kids)>1?qualifying_child_care_expense_2ormore:"False")));
};

let ehcFederalPayrollTax = function(){
    return(federal_payroll_tax_multiplier * ehc_gross_income);
};

let ehcFederalTaxOwed = function(){
    return ehcFedTaxOwedLessNonRefundableTax() - ehcSumOfRefundableTaxCredits();
};

let ehcUtahTaxesOwed = function(){
    return ((ehcStateTaxBeforeCredits()-ehcUtahTaxCredit())<0?utah_taxes_owed_less_than_zero:
                (ehcStateTaxBeforeCredits()-ehcUtahTaxCredit()));
};

//Use CostByAge!B19 formula 'overallCost'
let ehcTotalExpenses = function(){
    return overallCost();
};

let ehcSavings1PercentGross = function() {
    return ehc_gross_income * 0.01;
};

let ehcTotalExpensesPlusSavings = function() {  // Used in goalSeek (ehcEITC) function.
    return ehcSavings1PercentGross() + ehcTotalExpenses();
};

let ehcTotalTax = function() {
    return ehcFederalTaxOwed() + ehcUtahTaxesOwed() + ehcFederalPayrollTax();
};

let ehcNetYearlyIncome = function() {
    return ehc_gross_income - ehcTotalTax();
};

//use CostByAge!B9 'familySize' formula
let ehcFamilySize = function() {
    return familySize();
};

let ehcStandardDeduction = function() {
    return (number_of_adults===1?(ehcFamilySize()>1?9250:6300):12600);
};

let ehcFederalExemptions = function() {
    return ehcFamilySize() * 4000;
};

let ehcStateExemptions = function() {
    return ehcFamilySize() * 3000;
};

let ehcGrossTaxableFederal = function() {
    return ((ehc_gross_income-ehcFederalExemptions()-ehcStandardDeduction()<0)?0:
                ehc_gross_income-ehcFederalExemptions()-ehcStandardDeduction());
};

let ehcUtahStateCreditValueHolder = function() {
    return (number_of_adults===1?(ehcFamilySize()>=2?20707:13805):27610);
};

let ehcStateTaxBeforeCredits = function () {
    return ehc_gross_income * 0.05;
};

let ehcGrossTaxFedUtahStateCreditValueHold = function () {
    return (ehc_gross_income-ehcUtahStateCreditValueHolder()>0?ehc_gross_income-ehcUtahStateCreditValueHolder():0);
};

let ehcCreditBeforePhaseOut = function () {
    return (ehcStandardDeduction()+ehcStateExemptions())*0.06;
};

let ehcPhaseOutX = function () {
    return ehcGrossTaxFedUtahStateCreditValueHold()*0.013;
};

let ehcNumberOfChildren = function () {
    return (number_of_infants + number_of_preschoolers + number_of_schoolagers + number_of_teenagers);
};

let ehcFederalTaxesOwedBeforeCredits = function () {
    return (number_of_adults===1?(ehcFamilySize()>1?((ehcGrossTaxableFederal()-13150)<0?(ehcGrossTaxableFederal()*0.1):
        ((ehcGrossTaxableFederal()-50200)<0?(ehcGrossTaxableFederal()-13150)*0.15+1315:
            ((ehcGrossTaxableFederal()-129600)<0?(ehcGrossTaxableFederal()-50200)*0.25+1315+5557.35:
                ((ehcGrossTaxableFederal()-209850)<0?(ehcGrossTaxableFederal()-129600)*0.28+1315+5557.35+19849.75:
                    ((ehcGrossTaxableFederal()-411500)<0?(ehcGrossTaxableFederal()-209850)*0.33+1315+5557.35+19849.75+22469.72:
                    (ehcGrossTaxableFederal()-411500)*0.396+1315+5557.35+19849.75+22469.72+66544.17))))):
        ((ehcGrossTaxableFederal()-9225)<0?(ehcGrossTaxableFederal()*0.1):
            ((ehcGrossTaxableFederal()-37450)<0?(ehcGrossTaxableFederal()-9225)*0.15+922.5:
                ((ehcGrossTaxableFederal()-90750)<0?(ehcGrossTaxableFederal()-37450)*0.25+922.5+4233.75:
                    ((ehcGrossTaxableFederal()-189300)<0?(ehcGrossTaxableFederal()-90751)*0.28+922.5+4233.75+13324.75:
                        ((ehcGrossTaxableFederal()-411500)<0?(ehcGrossTaxableFederal()-189301)*0.33+922.5+4233.75+13324.75+27593:
                        (ehcGrossTaxableFederal()-411500)*0.396+922.5+4233.75+13324.75+27593+73325.67)))))):
        ((ehcGrossTaxableFederal()-18450)<0?(ehcGrossTaxableFederal()*0.1):
            ((ehcGrossTaxableFederal()-74900)<0?(ehcGrossTaxableFederal()-18450)*0.15+1845:
                ((ehcGrossTaxableFederal()-181500)<0?(ehcGrossTaxableFederal()-74900)*0.25+1845+8467.5:
                    ((ehcGrossTaxableFederal()-378600)<0?(ehcGrossTaxableFederal()-181500)*0.28+1845+8467.5+26650:
                        ((ehcGrossTaxableFederal()-823000)<0?(ehcGrossTaxableFederal()-378600)*0.33+1845+8467.5+26650+55188:
                        (ehcGrossTaxableFederal()-823000)*0.396+1845+8467.5+26650+55188+146652))))));
};

let ehcChildTaxCredit = function () {   // Documentation lists this as being used in ehcAdjustedChildTaxCredit (below)
    return ehcNumberOfChildren() * 1000;
};

// let ehcAdjustedChildTaxCredit = function () {
//     return Math.max(
//         ehcChildTaxCredit(),    // this was ehcAdjustedChildTaxCredit (same function)?
//         ehcFederalTaxesLessChildCareTaxCredit()
//     );
// };
let ehcAdjustedChildTaxCredit = function () {
    return ((ehc_gross_income<75000?ehcChildTaxCredit():(((ehc_gross_income-75000)*0.05))));
};


// icarus test


let ehcEITC = function () {
    let credit_amount_list = [];
    if (ehcNumberOfChildren() === 1) {
        credit_amount_list = credit_amount_married_filing_jointly_1_children_list;
    } else
    if (ehcNumberOfChildren() === 2) {
        credit_amount_list = credit_amount_married_filing_jointly_2_children_list;
    } else
    if (ehcNumberOfChildren() === 0) {
        credit_amount_list = credit_amount_married_filing_jointly_0_children_list;
    } else
    if (ehcNumberOfChildren() >= 3) {
        credit_amount_list = credit_amount_married_filing_jointly_3_children_list;
    }
    else {
        return false;
    }

    let i = 0;
    while (i <= income_at_least_list.length) {
        if (i >= income_at_least_list.length) {
            return false;
        }
        if (income_at_least_list[i] > ehc_gross_income) {
            break;
        }
        i++;
    }
    return credit_amount_list[i-1];
};

let ehcFederalTaxesLessChildCareTaxCredit = function () {
    return (ehcFederalTaxesOwedBeforeCredits()<ehcChildCareTaxCredit()?0:
                ehcFederalTaxesOwedBeforeCredits()-ehcChildCareTaxCredit());
};

let ehcAdjustedChildTaxCreditUsed = function () {
    return (ehcAdjustedChildTaxCredit()<ehcFederalTaxesLessChildCareTaxCredit()?ehcAdjustedChildTaxCredit():
                ehcFederalTaxesLessChildCareTaxCredit());
};

let ehcAdditionalChildTaxCredit = function () {
    return ((ehcNumberOfChildren()<=3?(((((ehc_gross_income-3000)<=0?0:(ehc_gross_income-3000))*0.15))<((((ehcNumberOfChildren()*1000)
    -ehcAdjustedChildTaxCreditUsed())<=0?0:((ehcNumberOfChildren()*1000)-ehcAdjustedChildTaxCreditUsed())))?
        (((ehc_gross_income-3000)<=0?0:(ehc_gross_income-3000))*0.15):((((ehcNumberOfChildren()*1000)-ehcAdjustedChildTaxCreditUsed())<=0?0:
        ((ehcNumberOfChildren()*1000)-ehcAdjustedChildTaxCreditUsed())))):(((ehc_gross_income-3000)*0.15)>=((ehcNumberOfChildren()*1000)
    -ehcAdjustedChildTaxCreditUsed())?((ehcNumberOfChildren()*1000)-ehcAdjustedChildTaxCreditUsed()):(((((0.0765*ehc_gross_income)-ehcEITC())<0?0:
        ((0.0765*ehc_gross_income)-ehcEITC()))>(((ehc_gross_income-3000)<=0?0:(ehc_gross_income-3000))*0.15)?(((0.0765*ehc_gross_income)-ehcEITC())<0?0:
        (((0.0765*ehc_gross_income)-ehcEITC()))):(((ehc_gross_income-3000)<=0?0:(ehc_gross_income-3000))*0.15))<((((ehcNumberOfChildren()*1000)
    -ehcAdjustedChildTaxCreditUsed())<=0?0:((ehcNumberOfChildren()*1000)-ehcAdjustedChildTaxCreditUsed())))?((((0.0765*ehc_gross_income)-ehcEITC())<0?0:
        ((0.0765*ehc_gross_income)-ehcEITC()))>(((ehc_gross_income-3000)<=0?0:(ehc_gross_income-3000))*0.15)?(((0.0765*ehc_gross_income)-ehcEITC())
    <0?0:(((0.0765*ehc_gross_income)-ehcEITC()))):(((ehc_gross_income-3000)<=0?0:(ehc_gross_income-3000))*0.15)):((ehcNumberOfChildren()*1000)
    -ehcAdjustedChildTaxCreditUsed())))));
};

// let ehcChildCareTaxCredit = function () {
//     let base_level = 43000;
//
//     if (ehc_gross_income > 75000) {
//         return 0
//     } else {
//         let difference_points = base_level - ehc_gross_income;
//         if (difference_points < 0) {
//             return .2;
//         }
//         else {
//             difference_points = Math.floor(difference_points / 2000);
//             return difference_points * .01 + .2;
//         }
//     }
// };
let ehcChildCareTaxCredit = function () {
    return (ehc_gross_income>75000?0:(ehc_gross_income>43000?ehcQualifyingChildCareExpenses()*0.2:(ehc_gross_income>41000?ehcQualifyingChildCareExpenses()*0.21:(ehc_gross_income>39000?ehcQualifyingChildCareExpenses()*0.22:(ehc_gross_income>37000?ehcQualifyingChildCareExpenses()*0.23:(ehc_gross_income>35000?ehcQualifyingChildCareExpenses()*0.24:(ehc_gross_income>33000?ehcQualifyingChildCareExpenses()*0.25:(ehc_gross_income>31000?ehcQualifyingChildCareExpenses()*0.26:(ehc_gross_income>29000?ehcQualifyingChildCareExpenses()*0.27:(ehc_gross_income>27000?ehcQualifyingChildCareExpenses()*0.28:(ehc_gross_income>25000?ehcQualifyingChildCareExpenses()*0.29:(ehc_gross_income>23000?ehcQualifyingChildCareExpenses()*0.3:(ehc_gross_income>21000?ehcQualifyingChildCareExpenses()*0.31:(ehc_gross_income>19000?ehcQualifyingChildCareExpenses()*0.32:(ehc_gross_income>17000?ehcQualifyingChildCareExpenses()*0.33:(ehc_gross_income>17000?ehcQualifyingChildCareExpenses()*0.34:(ehc_gross_income<15000?ehcQualifyingChildCareExpenses()*0.35:0)))))))))))))))));
};

let ehcSumOfNonRefundableTaxCredits = function () {
    return ehcChildCareTaxCredit() + ehcAdjustedChildTaxCredit();
};

let ehcSumOfRefundableTaxCredits = function () {
    if(ehcEITC() == false)
        return ehcAdditionalChildTaxCredit();
    else
        return ehcEITC() + ehcAdditionalChildTaxCredit();
};

let ehcFedTaxOwedLessNonRefundableTax = function () {
    return (ehcFederalTaxesOwedBeforeCredits()-ehcSumOfNonRefundableTaxCredits()<0?0:
                ehcFederalTaxesOwedBeforeCredits()-ehcSumOfNonRefundableTaxCredits());
};

let ehcFedDeductionPlusStateExemption = function () {   // Not used in original spreadsheet.
    return (ehcStateExemptions()+ehcStandardDeduction()) * 0.06;
};

let ehcUtahTaxCredit = function () {
    return (ehcPhaseOutX()>ehcCreditBeforePhaseOut()?0:ehcCreditBeforePhaseOut()-ehcPhaseOutX());
};

/**
 * Performs a goalSeek function 6x for accuracy, returns the new ehc_gross_income value.
 * Changing cell:   gross
 * Goal cell:       expense
 * GoalSeek cell:   net
 */
let ehcCalcGross = function() {
    let gross = ehc_gross_income;
    let expense = ehcTotalExpensesPlusSavings();
    let tax = ehcTotalTax();
    let net = function(gross, tax) { return gross-tax; };

    for (let i = 0; i < 50; i++) {
        gross = goalSeek({
            Func: net,                      // The function which should return the value of the goal cell.
            aFuncParams: [gross, tax],      // The params to be passed to the function above.
            oFuncArgTarget: {
                Position: 0                 // The position in the aFuncParams array of the value which will be changed.
            },
            Goal: expense,                  // The value which the function above should match.
            Tol: 0.01,                      // The tolerance of the final result.
            maxIter: 1000                   // The maximum number of iterations for the goalSeek function to take.
        });
    }

    return gross;
};
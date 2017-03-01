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

let ehcGrossTaxablefederal = function() {
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
    return (number_of_adults===1?(ehcFamilySize()>1?((ehcGrossTaxablefederal()-13150)<0?(ehcGrossTaxablefederal()*0.1):
        ((ehcGrossTaxablefederal()-50200)<0?(ehcGrossTaxablefederal()-13150)*0.15+1315:
            ((ehcGrossTaxablefederal()-129600)<0?(ehcGrossTaxablefederal()-50200)*0.25+1315+5557.35:
                ((ehcGrossTaxablefederal()-209850)<0?(ehcGrossTaxablefederal()-129600)*0.28+1315+5557.35+19849.75:
                    ((ehcGrossTaxablefederal()-411500)<0?(ehcGrossTaxablefederal()-209850)*0.33+1315+5557.35+19849.75+22469.72:
                    (ehcGrossTaxablefederal()-411500)*0.396+1315+5557.35+19849.75+22469.72+66544.17))))):
        ((ehcGrossTaxablefederal()-9225)<0?(ehcGrossTaxablefederal()*0.1):
            ((ehcGrossTaxablefederal()-37450)<0?(ehcGrossTaxablefederal()-9225)*0.15+922.5:
                ((ehcGrossTaxablefederal()-90750)<0?(ehcGrossTaxablefederal()-37450)*0.25+922.5+4233.75:
                    ((ehcGrossTaxablefederal()-189300)<0?(ehcGrossTaxablefederal()-90751)*0.28+922.5+4233.75+13324.75:
                        ((ehcGrossTaxablefederal()-411500)<0?(ehcGrossTaxablefederal()-189301)*0.33+922.5+4233.75+13324.75+27593:
                        (ehcGrossTaxablefederal()-411500)*0.396+922.5+4233.75+13324.75+27593+73325.67)))))):
        ((ehcGrossTaxablefederal()-18450)<0?(ehcGrossTaxablefederal()*0.1):
            ((ehcGrossTaxablefederal()-74900)<0?(ehcGrossTaxablefederal()-18450)*0.15+1845:
                ((ehcGrossTaxablefederal()-181500)<0?(ehcGrossTaxablefederal()-74900)*0.25+1845+8467.5:
                    ((ehcGrossTaxablefederal()-378600)<0?(ehcGrossTaxablefederal()-181500)*0.28+1845+8467.5+26650:
                        ((ehcGrossTaxablefederal()-823000)<0?(ehcGrossTaxablefederal()-378600)*0.33+1845+8467.5+26650+55188:
                        (ehcGrossTaxablefederal()-823000)*0.396+1845+8467.5+26650+55188+146652))))));
};

let ehcChildTaxCredit = function () {   // Documentation lists this as being used in ehcAdjustedChildTaxCredit (below)
    return ehcNumberOfChildren() * 1000;
};

let ehcAdjustedChildTaxCredit = function () {
    return Math.max(
        ehcChildTaxCredit(),    // TODO: this was ehcAdjustedChildTaxCredit (same function)?
        ehcFederalTaxesLessChildCareTaxCredit()
    );
};





let ehcEITC = function () {
    let credit_amount_list = [];
    if (ehcNumberOfChildren() == 1) {
        credit_amount_list = credit_amount_married_filing_jointly_1_children_list;
    } else
    if (ehcNumberOfChildren() == 2) {
        credit_amount_list = credit_amount_married_filing_jointly_2_children_list;
    } else
    if (ehcNumberOfChildren() == 0) {
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
        if (ehc_gross_income > income_at_least_list[i]) {
            break;
        }
        i++;
    }
    return credit_amount_list[i];
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

let ehcChildCareTaxCredit = function () {
    let base_level = 43000;

    if (ehc_gross_income > 75000) {
        return 0
    } else {
        let difference_points = base_level - ehc_gross_income;
        if (difference_points < 0) {
            return .2;
        }
        else {
            difference_points = Math.floor(difference_points / 2000);
            return difference_points * .01 + .2;
        }
    }
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
    return (ehcStateExemptions+ehcStandardDeduction()) * 0.06;
};

let ehcUtahTaxCredit = function () {
    return (ehcPhaseOutX()>ehcCreditBeforePhaseOut()?0:ehcCreditBeforePhaseOut()-ehcPhaseOutX());
};

// TODO: Make ehcCalcGross function change the actual variables, not local ones.
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

    console.log('INIT gross: ' + gross);
    console.log('INIT tax: ' + tax);
    console.log('INIT net: ' + net(gross, tax));


    for (let i = 0; i < 6; i++) {
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

    console.log('CALC gross: ' + gross);
    console.log('CALC tax: ' + tax);
    console.log('CALC net: ' + net(gross, tax));

    return gross;
};
/**
 * Created by adsal on 2/22/2017.
 */

let ehcQualifyingChildCareExpenses = function(){
    let num_kids = number_of_infants + number_of_preschoolers + number_of_schoolagers;
    return (
        (num_kids)===0?qualifying_child_care_expense_zero:(
            (num_kids)==1?qualifying_child_care_expsnse_one:(
                (num_kids)>1?qualifying_child_care_expense_2ormore:"False")));
};

let ehcFederalPayrollTax = function(){
    return(federal_payroll_tax_multiplier * gross_income);
};

let ehcFederalTaxOwed = function(){
    return fedTaxOwedLessNonRefundableTax() - fedDeductionPlusStateExemption();
};

let ehcUtahTaxesOwed = function(){
    return ((ehcStateTaxBeforeCredits()-utahTaxCredit())<0?utah_taxes_owed_less_than_zero:(ehcStateTaxBeforeCredits()-utahTaxCredit()));
};

//Use CostByAge!B19 formula 'overallCost'
let ehcTotalExpenses = function(){
    return overallCost();
};

let ehcSavings1PercentGross = function() {
    return gross_income * 0.01;
};

let ehcTotalExpensesPlusSavings = function() {
    return ehcSavings1PercentGross() + ehcTotalExpenses();
};

let ehcTotalTax = function() {
    return ehcFederalTaxOwed() + ehcUtahTaxesOwed() + ehcFederalPayrollTax();
};

let ehcNetYearlyIncome = function() {
    return gross_income - ehcTotalTax();
};

//use CostByAge!B9 'familySize' formula
let ehcFamilySize = function() {
    return 'familySize';
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
    return ((gross_income-ehcFederalExemptions()-ehcStandardDeduction()<0)?0:gross_income-ehcFederalExemptions()-ehcStandardDeduction());
};

let ehcUtahStateCreditValueHolder = function() {
    return (number_of_adults===1?(ehcFamilySize()>=2?20707:13805):27610);
};

let ehcStateTaxBeforeCredits = function () {
    return gross_income * 0.05;
};

let ehcGrossTaxFedUtahStateCreditValueHold = function () {
    return (gross_income-ehcUtahStateCreditValueHolder()>0?gross_income-ehcUtahStateCreditValueHolder():0);
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

let ehcChildTaxCredit = function () {
    return ehcNumberOfChildren() * 1000;
};

let ehcAdjustedChildTaxCredit = function () {
    return mhcAdjustedChildTaxCredit();
};
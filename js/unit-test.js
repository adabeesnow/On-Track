/**
 * Created by Adam Salvo on 2/27/2017.
 */



//generated-standard formulas
$(document).ready(function () {

    // -------------------------------------------- GET AJAX DATA ------------------------------------------------------

    // let parsedJSON;
    // $.ajax({
    //     url: 'http://icarus.cs.weber.edu/~tg46219/cottages/api/v1/entry/',
    //     method: 'GET',
    //     success: function (response) {
    //         parsedJSON = $.parseJSON(response);
    //         parsedJSON = parsedJSON.sort(
    //             function (a, b) {
    //                 return alphanum(a.entryName.replace(/\D/g, ''), b.entryName.replace(/\D/g, ''));
    //             }
    //         );
    //         for (let i = 0; i < parsedJSON.length; i++) {
    //             if (parsedJSON[i].entryName.includes("single_no_children")) {
    //                 credit_amount_single_0_children_list.push(parsedJSON[i].entryValue);
    //             }
    //             if (parsedJSON[i].entryName.includes("single_one_child")) {
    //                 credit_amount_single_1_children_list.push(parsedJSON[i].entryValue);
    //             }
    //             if (parsedJSON[i].entryName.includes("single_two_children")) {
    //                 credit_amount_single_2_children_list.push(parsedJSON[i].entryValue);
    //             }
    //             if (parsedJSON[i].entryName.includes("single_three_children")) {
    //                 credit_amount_single_3_children_list.push(parsedJSON[i].entryValue);
    //             }
    //             if (parsedJSON[i].entryName.includes("married_no_children")) {
    //                 credit_amount_married_filing_jointly_0_children_list.push(parsedJSON[i].entryValue);
    //             }
    //             if (parsedJSON[i].entryName.includes("married_one_child")) {
    //                 credit_amount_married_filing_jointly_1_children_list.push(parsedJSON[i].entryValue);
    //             }
    //             if (parsedJSON[i].entryName.includes("married_two_children")) {
    //                 credit_amount_married_filing_jointly_2_children_list.push(parsedJSON[i].entryValue);
    //             }
    //             if (parsedJSON[i].entryName.includes("married_three_children")) {
    //                 credit_amount_married_filing_jointly_3_children_list.push(parsedJSON[i].entryValue);
    //             }
    //             // Applicable Figure table data from 2016. Data from 2015 used below for testing purposes.
    //             // if (parsedJSON[i].entryName.includes("a_f")) {
    //             //     applicable_figure_list.push(parsedJSON[i].entryValue);
    //             // }
    //         }
    //     }
    // });

    // Remove first entry from each credit-amount list. (Only for AJAX-retrieved data)
    // credit_amount_single_0_children_list = credit_amount_single_0_children_list
    //     .slice(1, credit_amount_single_0_children_list.length);
    // credit_amount_single_1_children_list = credit_amount_single_1_children_list
    //     .slice(1, credit_amount_single_1_children_list.length);
    // credit_amount_single_2_children_list = credit_amount_single_2_children_list
    //     .slice(1, credit_amount_single_2_children_list.length);
    // credit_amount_single_3_children_list = credit_amount_single_3_children_list
    //     .slice(1, credit_amount_single_3_children_list.length);
    // credit_amount_married_filing_jointly_0_children_list = credit_amount_married_filing_jointly_0_children_list
    //     .slice(1, credit_amount_married_filing_jointly_0_children_list.length);
    // credit_amount_married_filing_jointly_1_children_list = credit_amount_married_filing_jointly_1_children_list
    //     .slice(1, credit_amount_married_filing_jointly_1_children_list.length);
    // credit_amount_married_filing_jointly_2_children_list = credit_amount_married_filing_jointly_2_children_list
    //     .slice(1, credit_amount_married_filing_jointly_2_children_list.length);
    // credit_amount_married_filing_jointly_3_children_list = credit_amount_married_filing_jointly_3_children_list
    //     .slice(1, credit_amount_married_filing_jointly_3_children_list.length);

    // ------------------------------------------ INITIAL TABLE WRITE --------------------------------------------------

    getUserInputs();            // Get radio button values.
    writeVerificationRows();    // Write verification test rows to page.
    // writeAllCombinations();     // Write all combinations to page.

    // ---------------------------------------------- ON CHANGE --------------------------------------------------------

    $('input[type=radio]').change(function() {

        $('#unit').find('tbody').empty();   // Remove everything in unit table body.

        getUserInputs();            // Get radio button values.
        writeVerificationRows();    // Write verification test rows to page.
        // writeAllCombinations();     // Write all combinations to page.
    });
});

// -------------------------------------------------- FUNCTIONS --------------------------------------------------------

/** getUserInputs:
 * Assigns the input variables to the radio button values on the unit-test page. */
function getUserInputs() {
    // Set MHC/EHC to checked value.
    use_marketplace_health_insurance_bool = $('input[id=radio-mhc]').is(':checked');
    // Set Childcare and Family Care to checked value.
    let childcare_value = $('input[name=radio-childcare]:checked').val();
    if (childcare_value === "childcare-center-care") {
        // If Center Care used: child_care_needed_bool = true, use_family_care_bool = false
        childcare_needed_bool = true;
        use_family_care_bool = false;
    } else if (childcare_value === "childcare-family-care") {
        // If Family Care used: child_care_needed_bool = true, use_family_care_bool = true
        childcare_needed_bool = true;
        use_family_care_bool = true;
    } else if (childcare_value === "childcare-none") {
        // If Childcare not required: child_care_needed_bool = false, use_family_care_bool = false
        childcare_needed_bool = false;
        use_family_care_bool = false;
    }
    // Number of adult bus passes is set to 1.
    number_of_public_transport_passes_adult = 1;
}

/** writeMHCTableData:
 * Calculates all MHC tax functions and appends results to unit table */
function writeMHCTableData() {
    let goal_seek_loop_count = 50; // The number of times to run goalSeek function.
    for (let i = 0; i < goal_seek_loop_count; i++) {
        mhc_gross_income = mhcCalcGross();
    }

    let markup =
        "<tr class='unit-data'>" +
        "<td class='unit-datas'>" + number_of_adults + "</td>" + // Adults
        "<td class='unit-datas'>" + number_of_infants + "</td>" + // Infants
        "<td class='unit-datas'>" + number_of_preschoolers + "</td>" + // Preschoolers
        "<td class='unit-datas'>" + number_of_schoolagers + "</td>" + // Schoolagers
        "<td class='unit-datas'>" + number_of_teenagers + "</td>" + // Teenagers
        "<td class='unit-data'>" + use_family_care_bool + "</td>" + // Family Care
        "<td class='unit-data'>" + use_marketplace_health_insurance_bool + "</td>" + // Marketplace Health Care
        "<td class='unit-data'>" + mhc_gross_income.toFixed(2) + "</td>" + // Gross Annual Income
        "<td class='unit-data'>" + mhcTotalTax().toFixed(2) + "</td>"; // Net Taxes

    // If difference between net income and expenses+savings is > $0.01, our table data are marked with the 'danger' class.
    if (Math.abs(mhcNetYearlyIncome() - mhcTotalExpensesPlusSavings()) > 0.01) {
        markup +=
            "<td class='unit-data'>" + mhcNetYearlyIncome().toFixed(2) + "</td>" +        // Net Annual Income
            "<td class='unit-data'>" + mhcTotalExpensesPlusSavings().toFixed(2) + "</td>";    // Total Expenses + Savings
    } else {
        markup +=
            "<td class='unit-data'>" + mhcNetYearlyIncome().toFixed(2) + "</td>" +       // Net Annual Income
            "<td class='unit-data'>" + mhcTotalExpensesPlusSavings().toFixed(2) + "</td>";   // Total Expenses + Savings
    }

    markup +=
        "<td class='unit-data'>" + annualTotalExpenses().toFixed(2) + "</td>" + // Total Expenses
        "<td class='unit-data'>" + annualHousingCosts().toFixed(2) + "</td>" + // Housing
        "<td class='unit-data'>" + annualChildcareCosts().toFixed(2) + "</td>" + // Childcare
        "<td class='unit-data'>" + annualFoodCosts().toFixed(2) + "</td>" + // Food
        "<td class='unit-data'>" + annualCarInsurance().toFixed(2) + "</td>" + // Car Insurance
        "<td class='unit-data'>" + annualCarOwnership().toFixed(2) + "</td>" + // Car Ownership
        "<td class='unit-data'>" + annualPublicTransportation().toFixed(2) + "</td>" + // Public Transport
        "<td class='unit-data'>" + annualHealthInsurance().toFixed(2) + "</td>" + // Health
        "<td class='unit-data'>" + annualOutOfPocketCosts().toFixed(2) + "</td>" + // Out of Pocket
        "<td class='unit-data'>" + annualEntertainmentCosts().toFixed(2) + "</td>" + // Entertainment
        "<td class='unit-data'>" + annualMiscellaneousCosts().toFixed(2) + "</td>" + // Miscellaneous
        "<td class='unit-data'>" + savingsYearly().toFixed(2) + "</td>" + // Savings
        "</tr>";

    $("table tbody").append(markup);
}

/** writeEHCTableData:
 * Calculates all EHC tax functions and appends results to unit table */
function writeEHCTableData() {
    let goal_seek_loop_count = 50; // The number of times to run goalSeek function.
    for (let i = 0; i < goal_seek_loop_count; i++) {
        ehc_gross_income = ehcCalcGross();
    }

    let markup =
        "<tr class='unit-data'>" +
        "<td class='unit-datas'>" + number_of_adults + "</td>" + // Adults
        "<td class='unit-datas'>" + number_of_infants + "</td>" + // Infants
        "<td class='unit-datas'>" + number_of_preschoolers + "</td>" + // Preschoolers
        "<td class='unit-datas'>" + number_of_schoolagers + "</td>" + // Schoolagers
        "<td class='unit-datas'>" + number_of_teenagers + "</td>" + // Teenagers
        "<td class='unit-data'>" + use_family_care_bool + "</td>" + // Family Care
        "<td class='unit-data'>" + use_marketplace_health_insurance_bool + "</td>" + // Marketplace Health Care
        "<td class='unit-data'>" + ehc_gross_income.toFixed(2) + "</td>" + // Gross Annual Income
        "<td class='unit-data'>" + ehcTotalTax().toFixed(2) + "</td>"; // Net Taxes

    // If difference between net income and expenses+savings is > $0.01, our table data are marked with the 'danger' class.
    if (Math.abs(ehcNetYearlyIncome() - ehcTotalExpensesPlusSavings()) > 0.01) {
        markup +=
            "<td class='unit-data ddanger'>" + ehcNetYearlyIncome().toFixed(2) + "</td>" +        // Net Annual Income
            "<td class='unit-data ddanger'>" + ehcTotalExpensesPlusSavings().toFixed(2) + "</td>";    // Total Expenses + Savings
    } else {
        markup +=
            "<td class='unit-data ssuccess'>" + ehcNetYearlyIncome().toFixed(2) + "</td>" +       // Net Annual Income
            "<td class='unit-data ssuccess'>" + ehcTotalExpensesPlusSavings().toFixed(2) + "</td>";   // Total Expenses + Savings
    }

    markup +=
        "<td class='unit-data'>" + annualTotalExpenses().toFixed(2) + "</td>" + // Total Expenses
        "<td class='unit-data'>" + annualHousingCosts().toFixed(2) + "</td>" + // Housing
        "<td class='unit-data'>" + annualChildcareCosts().toFixed(2) + "</td>" + // Childcare
        "<td class='unit-data'>" + annualFoodCosts().toFixed(2) + "</td>" + // Food
        "<td class='unit-data'>" + annualCarInsurance().toFixed(2) + "</td>" + // Car Insurance
        "<td class='unit-data'>" + annualCarOwnership().toFixed(2) + "</td>" + // Car Ownership
        "<td class='unit-data'>" + annualPublicTransportation().toFixed(2) + "</td>" + // Public Transport
        "<td class='unit-data'>" + annualHealthInsurance().toFixed(2) + "</td>" + // Health
        "<td class='unit-data'>" + annualOutOfPocketCosts().toFixed(2) + "</td>" + // Out of Pocket
        "<td class='unit-data'>" + annualEntertainmentCosts().toFixed(2) + "</td>" + // Entertainment
        "<td class='unit-data'>" + annualMiscellaneousCosts().toFixed(2) + "</td>" + // Miscellaneous
        "<td class='unit-data'>" + savingsYearly().toFixed(2) + "</td>" + // Savings
        "</tr>";

    $("table tbody").append(markup);
}

/** writeAllCombinations:
 * Iterates through every possible family composition and appends all livable wage calculations to unit table. */
function writeAllCombinations() {
    // Calculate values for every accepted family combination.
    for(let i = 1; i < 3; i++) {    // Adults: Min 1, Max 2
        for(let j = 0; j < 6; j++) {    // Infants: Min 0, Max 5
            for(let k = 0; k < 6; k++) {    // Preschoolers: Min 0, Max 5
                for(let t = 0; t < 6; t++) {    // Schoolagers: Min 0, Max 5
                    for(let z = 0; z < 6; z++) {    // Teenagers: Min 0, Max 5
                        if(j + k + t + z < 6) {     // Families may have up to 5 total children
                            number_of_adults = i;
                            number_of_infants = j;
                            number_of_preschoolers = k;
                            number_of_schoolagers = t;
                            number_of_teenagers = z;
                            // Number of child bus passes is set equal to number of schoolagers and teenagers.
                            number_of_public_transport_passes_child = number_of_schoolagers + number_of_teenagers;

                            // MHC
                            if (use_marketplace_health_insurance_bool === true) { writeMHCTableData(); }
                            // EHC
                            else { writeEHCTableData(); }
                        } //end if (combination filter)
                    } // end inner for (number of teenagers)
                } // end for (number of schoolagers)
            } // end for (number of preschoolers)
        } // end for (number of infants)
    } // end outer for (number of adults)
}

/** writeVerificationRows:
 * Writes select family composition rows for verification against Excel sheet. */
function writeVerificationRows() {



    // Verification Test Combinations (top of table)
    let test_combinations_array = [
        {"adults":1,"infants":0,"preschoolers":0,"schoolagers":0,"teenagers":0}, // 1A (1A0K)
        {"adults":2,"infants":0,"preschoolers":0,"schoolagers":1,"teenagers":0}, // 2A 1S (2A1K)
        {"adults":2,"infants":1,"preschoolers":1,"schoolagers":2,"teenagers":1}, // 2A 1I 1P 2S 1T (2A5K)
    ];
    // Loop over each verification-test combination, append calculation results to top of table
    for (let i = 0; i < test_combinations_array.length; i++) {
        number_of_adults = test_combinations_array[i].adults;
        number_of_infants = test_combinations_array[i].infants;
        number_of_preschoolers = test_combinations_array[i].preschoolers;
        number_of_schoolagers = test_combinations_array[i].schoolagers;
        number_of_teenagers = test_combinations_array[i].teenagers;
        number_of_public_transport_passes_child = number_of_schoolagers + number_of_teenagers;

        // MHC
        if (use_marketplace_health_insurance_bool === true) {
            writeMHCTableData();
            log_taxes_mhc(test_combinations_array[i]);
        }
        // EHC
        else {
            writeEHCTableData();
            log_taxes_ehc(test_combinations_array[i]);
        }

    }
    verifyTheStuffAndThings();
}

//verifies the stuff and things
function verifyTheStuffAndThings(){

    //console.log("values:", $('#unit tr:eq(1) td:eq(11)').text());

    if(!use_marketplace_health_insurance_bool && childcare_needed_bool && !use_family_care_bool){
        min_ehc_values();
        med_ehc_childcare_center_values();
        max_ehc_childcare_center_values();
    } else if(!use_marketplace_health_insurance_bool && childcare_needed_bool && use_family_care_bool) {
        min_ehc_values();
        med_ehc_childcare_family_values();
        max_ehc_childcare_family_values();
    } else if(!use_marketplace_health_insurance_bool && !childcare_needed_bool && !use_family_care_bool){
        min_ehc_values();
        med_ehc_childcare_none_values();
        max_ehc_childcare_none_values();
    } else if(use_marketplace_health_insurance_bool && childcare_needed_bool && !use_family_care_bool){
        min_mhc_values();
        med_mhc_childcare_center_values();
        max_mhc_childcare_center_values();
    } else if(use_marketplace_health_insurance_bool && childcare_needed_bool && use_family_care_bool) {
        min_mhc_values();
        med_mhc_childcare_family_values();
        max_mhc_childcare_family_values();
    } else if(use_marketplace_health_insurance_bool && !childcare_needed_bool && !use_family_care_bool){
        min_mhc_values();
        med_mhc_childcare_none_values();
        max_mhc_childcare_none_values();
    }

}

const threshold = 0.03;

function min_ehc_values(){

    if(Math.abs($('#unit tr:eq(1) td:eq(7)').text() - combinationValues.min_ehc.Gross_Income) > threshold) { // threshold used to account for floats
        $('#unit tr:eq(1) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(8)').text() - combinationValues.min_ehc.Taxes) > threshold) {
        $('#unit tr:eq(1) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(9)').text() - combinationValues.min_ehc.Net_Income) > threshold) {
        $('#unit tr:eq(1) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(10)').text() - (combinationValues.min_ehc.Total_Expenses + combinationValues.min_ehc.Savings)) > threshold) {
        $('#unit tr:eq(1) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(11)').text() - combinationValues.min_ehc.Total_Expenses) > threshold) {
        $('#unit tr:eq(1) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(12)').text() - combinationValues.min_ehc.Housing) > threshold) {
        $('#unit tr:eq(1) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(13)').text() - combinationValues.min_ehc.Childcare) > threshold) {
        $('#unit tr:eq(1) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(14)').text() - combinationValues.min_ehc.Food) > threshold) {
        $('#unit tr:eq(1) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(15)').text() - combinationValues.min_ehc.Car_Insurance) > threshold) {
        $('#unit tr:eq(1) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(16)').text() - combinationValues.min_ehc.Car_Ownership) > threshold) {
        $('#unit tr:eq(1) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(17)').text() - combinationValues.min_ehc.Public_Transport) > threshold) {
        $('#unit tr:eq(1) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(18)').text() - combinationValues.min_ehc.Health_Insurance) > threshold) {
        $('#unit tr:eq(1) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(19)').text() - combinationValues.min_ehc.Out_of_Pocket_Costs) > threshold) {
        $('#unit tr:eq(1) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(20)').text() - combinationValues.min_ehc.Entertainment) > threshold) {
        $('#unit tr:eq(1) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(21)').text() - combinationValues.min_ehc.Miscellaneous) > threshold) {
        $('#unit tr:eq(1) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(22)').text() - combinationValues.min_ehc.Savings) > threshold) {
        $('#unit tr:eq(1) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(22)').addClass('match');
    }
}
function min_mhc_values(){

    if(Math.abs($('#unit tr:eq(1) td:eq(7)').text() - combinationValues.min_mhc.Gross_Income) > threshold) { // threshold used to account for floats
        $('#unit tr:eq(1) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(8)').text() - combinationValues.min_mhc.Taxes) > threshold) {
        $('#unit tr:eq(1) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(9)').text() - combinationValues.min_mhc.Net_Income) > threshold) {
        $('#unit tr:eq(1) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(10)').text() - (combinationValues.min_mhc.Total_Expenses + combinationValues.min_mhc.Savings)) > threshold) {
        $('#unit tr:eq(1) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(11)').text() - combinationValues.min_mhc.Total_Expenses) > threshold) {
        $('#unit tr:eq(1) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(12)').text() - combinationValues.min_mhc.Housing) > threshold) {
        $('#unit tr:eq(1) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(13)').text() - combinationValues.min_mhc.Childcare) > threshold) {
        $('#unit tr:eq(1) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(14)').text() - combinationValues.min_mhc.Food) > threshold) {
        $('#unit tr:eq(1) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(15)').text() - combinationValues.min_mhc.Car_Insurance) > threshold) {
        $('#unit tr:eq(1) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(16)').text() - combinationValues.min_mhc.Car_Ownership) > threshold) {
        $('#unit tr:eq(1) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(17)').text() - combinationValues.min_mhc.Public_Transport) > threshold) {
        $('#unit tr:eq(1) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(18)').text() - combinationValues.min_mhc.Health_Insurance) > threshold) {
        $('#unit tr:eq(1) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(19)').text() - combinationValues.min_mhc.Out_of_Pocket_Costs) > threshold) {
        $('#unit tr:eq(1) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(20)').text() - combinationValues.min_mhc.Entertainment) > threshold) {
        $('#unit tr:eq(1) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(21)').text() - combinationValues.min_mhc.Miscellaneous) > threshold) {
        $('#unit tr:eq(1) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(22)').text() - combinationValues.min_mhc.Savings) > threshold) {
        $('#unit tr:eq(1) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(22)').addClass('match');
    }

}
function med_ehc_childcare_family_values(){

    if(Math.abs($('#unit tr:eq(2) td:eq(7)').text() - combinationValues.med_ehc_childcare_family.Gross_Income) > threshold) { // threshold used to account for floats
        $('#unit tr:eq(2) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(8)').text() - combinationValues.med_ehc_childcare_family.Taxes) > threshold) {
        $('#unit tr:eq(2) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(9)').text() - combinationValues.med_ehc_childcare_family.Net_Income) > threshold) {
        $('#unit tr:eq(2) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(10)').text() - (combinationValues.med_ehc_childcare_family.Total_Expenses + combinationValues.med_ehc_childcare_family.Savings)) > threshold) {
        $('#unit tr:eq(2) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(11)').text() - combinationValues.med_ehc_childcare_family.Total_Expenses) > threshold) {
        $('#unit tr:eq(2) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(12)').text() - combinationValues.med_ehc_childcare_family.Housing) > threshold) {
        $('#unit tr:eq(2) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(13)').text() - combinationValues.med_ehc_childcare_family.Childcare) > threshold) {
        $('#unit tr:eq(2) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(14)').text() - combinationValues.med_ehc_childcare_family.Food) > threshold) {
        $('#unit tr:eq(2) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(15)').text() - combinationValues.med_ehc_childcare_family.Car_Insurance) > threshold) {
        $('#unit tr:eq(2) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(16)').text() - combinationValues.med_ehc_childcare_family.Car_Ownership) > threshold) {
        $('#unit tr:eq(2) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(17)').text() - combinationValues.med_ehc_childcare_family.Public_Transport) > threshold) {
        $('#unit tr:eq(2) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(18)').text() - combinationValues.med_ehc_childcare_family.Health_Insurance) > threshold) {
        $('#unit tr:eq(2) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(19)').text() - combinationValues.med_ehc_childcare_family.Out_of_Pocket_Costs) > threshold) {
        $('#unit tr:eq(2) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(20)').text() - combinationValues.med_ehc_childcare_family.Entertainment) > threshold) {
        $('#unit tr:eq(2) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(21)').text() - combinationValues.med_ehc_childcare_family.Miscellaneous) > threshold) {
        $('#unit tr:eq(2) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(22)').text() - combinationValues.med_ehc_childcare_family.Savings) > threshold) {
        $('#unit tr:eq(2) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(22)').addClass('match');
    }

}
function med_ehc_childcare_center_values(){

    if(Math.abs($('#unit tr:eq(2) td:eq(7)').text() - combinationValues.med_ehc_childcare_center.Gross_Income) > threshold) { // threshold used to account for floats
        $('#unit tr:eq(2) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(8)').text() - combinationValues.med_ehc_childcare_center.Taxes) > threshold) {
        $('#unit tr:eq(2) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(9)').text() - combinationValues.med_ehc_childcare_center.Net_Income) > threshold) {
        $('#unit tr:eq(2) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(10)').text() - (combinationValues.med_ehc_childcare_center.Total_Expenses + combinationValues.med_ehc_childcare_center.Savings)) > threshold) {
        $('#unit tr:eq(2) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(11)').text() - combinationValues.med_ehc_childcare_center.Total_Expenses) > threshold) {
        $('#unit tr:eq(2) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(12)').text() - combinationValues.med_ehc_childcare_center.Housing) > threshold) {
        $('#unit tr:eq(2) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(13)').text() - combinationValues.med_ehc_childcare_center.Childcare) > threshold) {
        $('#unit tr:eq(2) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(14)').text() - combinationValues.med_ehc_childcare_center.Food) > threshold) {
        $('#unit tr:eq(2) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(15)').text() - combinationValues.med_ehc_childcare_center.Car_Insurance) > threshold) {
        $('#unit tr:eq(2) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(16)').text() - combinationValues.med_ehc_childcare_center.Car_Ownership) > threshold) {
        $('#unit tr:eq(2) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(17)').text() - combinationValues.med_ehc_childcare_center.Public_Transport) > threshold) {
        $('#unit tr:eq(2) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(18)').text() - combinationValues.med_ehc_childcare_center.Health_Insurance) > threshold) {
        $('#unit tr:eq(2) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(19)').text() - combinationValues.med_ehc_childcare_center.Out_of_Pocket_Costs) > threshold) {
        $('#unit tr:eq(2) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(20)').text() - combinationValues.med_ehc_childcare_center.Entertainment) > threshold) {
        $('#unit tr:eq(2) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(21)').text() - combinationValues.med_ehc_childcare_center.Miscellaneous) > threshold) {
        $('#unit tr:eq(2) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(22)').text() - combinationValues.med_ehc_childcare_center.Savings) > threshold) {
        $('#unit tr:eq(2) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(22)').addClass('match');
    }
}
function med_ehc_childcare_none_values(){

    if(Math.abs($('#unit tr:eq(2) td:eq(7)').text() - combinationValues.med_ehc_childcare_none.Gross_Income) > threshold) { // threshold used to account for floats
        $('#unit tr:eq(2) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(8)').text() - combinationValues.med_ehc_childcare_none.Taxes) > threshold) {
        $('#unit tr:eq(2) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(9)').text() - combinationValues.med_ehc_childcare_none.Net_Income) > threshold) {
        $('#unit tr:eq(2) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(10)').text() - (combinationValues.med_ehc_childcare_none.Total_Expenses + combinationValues.med_ehc_childcare_none.Savings)) > threshold) {
        $('#unit tr:eq(2) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(11)').text() - combinationValues.med_ehc_childcare_none.Total_Expenses) > threshold) {
        $('#unit tr:eq(2) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(12)').text() - combinationValues.med_ehc_childcare_none.Housing) > threshold) {
        $('#unit tr:eq(2) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(13)').text() - combinationValues.med_ehc_childcare_none.Childcare) > threshold) {
        $('#unit tr:eq(2) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(14)').text() - combinationValues.med_ehc_childcare_none.Food) > threshold) {
        $('#unit tr:eq(2) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(15)').text() - combinationValues.med_ehc_childcare_none.Car_Insurance) > threshold) {
        $('#unit tr:eq(2) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(16)').text() - combinationValues.med_ehc_childcare_none.Car_Ownership) > threshold) {
        $('#unit tr:eq(2) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(17)').text() - combinationValues.med_ehc_childcare_none.Public_Transport) > threshold) {
        $('#unit tr:eq(2) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(18)').text() - combinationValues.med_ehc_childcare_none.Health_Insurance) > threshold) {
        $('#unit tr:eq(2) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(19)').text() - combinationValues.med_ehc_childcare_none.Out_of_Pocket_Costs) > threshold) {
        $('#unit tr:eq(2) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(20)').text() - combinationValues.med_ehc_childcare_none.Entertainment) > threshold) {
        $('#unit tr:eq(2) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(21)').text() - combinationValues.med_ehc_childcare_none.Miscellaneous) > threshold) {
        $('#unit tr:eq(2) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(22)').text() - combinationValues.med_ehc_childcare_none.Savings) > threshold) {
        $('#unit tr:eq(2) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(22)').addClass('match');
    }

}
function med_mhc_childcare_family_values(){

    if(Math.abs($('#unit tr:eq(2) td:eq(7)').text() - combinationValues.med_mhc_childcare_family.Gross_Income) > threshold) { // threshold used to account for floats
        $('#unit tr:eq(2) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(8)').text() - combinationValues.med_mhc_childcare_family.Taxes) > threshold) {
        $('#unit tr:eq(2) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(9)').text() - combinationValues.med_mhc_childcare_family.Net_Income) > threshold) {
        $('#unit tr:eq(2) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(10)').text() - (combinationValues.med_mhc_childcare_family.Total_Expenses + combinationValues.med_mhc_childcare_family.Savings)) > threshold) {
        $('#unit tr:eq(2) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(11)').text() - combinationValues.med_mhc_childcare_family.Total_Expenses) > threshold) {
        $('#unit tr:eq(2) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(12)').text() - combinationValues.med_mhc_childcare_family.Housing) > threshold) {
        $('#unit tr:eq(2) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(13)').text() - combinationValues.med_mhc_childcare_family.Childcare) > threshold) {
        $('#unit tr:eq(2) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(14)').text() - combinationValues.med_mhc_childcare_family.Food) > threshold) {
        $('#unit tr:eq(2) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(15)').text() - combinationValues.med_mhc_childcare_family.Car_Insurance) > threshold) {
        $('#unit tr:eq(2) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(16)').text() - combinationValues.med_mhc_childcare_family.Car_Ownership) > threshold) {
        $('#unit tr:eq(2) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(17)').text() - combinationValues.med_mhc_childcare_family.Public_Transport) > threshold) {
        $('#unit tr:eq(2) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(18)').text() - combinationValues.med_mhc_childcare_family.Health_Insurance) > threshold) {
        $('#unit tr:eq(2) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(19)').text() - combinationValues.med_mhc_childcare_family.Out_of_Pocket_Costs) > threshold) {
        $('#unit tr:eq(2) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(20)').text() - combinationValues.med_mhc_childcare_family.Entertainment) > threshold) {
        $('#unit tr:eq(2) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(21)').text() - combinationValues.med_mhc_childcare_family.Miscellaneous) > threshold) {
        $('#unit tr:eq(2) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(22)').text() - combinationValues.med_mhc_childcare_family.Savings) > threshold) {
        $('#unit tr:eq(2) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(22)').addClass('match');
    }

}
function med_mhc_childcare_center_values(){

    if(Math.abs($('#unit tr:eq(2) td:eq(7)').text() - combinationValues.med_mhc_childcare_center.Gross_Income) > threshold) { // threshold used to account for floats
        $('#unit tr:eq(2) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(8)').text() - combinationValues.med_mhc_childcare_center.Taxes) > threshold) {
        $('#unit tr:eq(2) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(9)').text() - combinationValues.med_mhc_childcare_center.Net_Income) > threshold) {
        $('#unit tr:eq(2) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(10)').text() - (combinationValues.med_mhc_childcare_center.Total_Expenses + combinationValues.med_mhc_childcare_center.Savings)) > threshold) {
        $('#unit tr:eq(2) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(11)').text() - combinationValues.med_mhc_childcare_center.Total_Expenses) > threshold) {
        $('#unit tr:eq(2) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(12)').text() - combinationValues.med_mhc_childcare_center.Housing) > threshold) {
        $('#unit tr:eq(2) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(13)').text() - combinationValues.med_mhc_childcare_center.Childcare) > threshold) {
        $('#unit tr:eq(2) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(14)').text() - combinationValues.med_mhc_childcare_center.Food) > threshold) {
        $('#unit tr:eq(2) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(15)').text() - combinationValues.med_mhc_childcare_center.Car_Insurance) > threshold) {
        $('#unit tr:eq(2) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(16)').text() - combinationValues.med_mhc_childcare_center.Car_Ownership) > threshold) {
        $('#unit tr:eq(2) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(17)').text() - combinationValues.med_mhc_childcare_center.Public_Transport) > threshold) {
        $('#unit tr:eq(2) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(18)').text() - combinationValues.med_mhc_childcare_center.Health_Insurance) > threshold) {
        $('#unit tr:eq(2) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(19)').text() - combinationValues.med_mhc_childcare_center.Out_of_Pocket_Costs) > threshold) {
        $('#unit tr:eq(2) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(20)').text() - combinationValues.med_mhc_childcare_center.Entertainment) > threshold) {
        $('#unit tr:eq(2) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(21)').text() - combinationValues.med_mhc_childcare_center.Miscellaneous) > threshold) {
        $('#unit tr:eq(2) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(22)').text() - combinationValues.med_mhc_childcare_center.Savings) > threshold) {
        $('#unit tr:eq(2) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(22)').addClass('match');
    }


}
function med_mhc_childcare_none_values(){

    if(Math.abs($('#unit tr:eq(2) td:eq(7)').text() - combinationValues.med_mhc_childcare_none.Gross_Income) > threshold) { // threshold used to account for floats
        $('#unit tr:eq(2) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(8)').text() - combinationValues.med_mhc_childcare_none.Taxes) > threshold) {
        $('#unit tr:eq(2) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(9)').text() - combinationValues.med_mhc_childcare_none.Net_Income) > threshold) {
        $('#unit tr:eq(2) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(10)').text() - (combinationValues.med_mhc_childcare_none.Total_Expenses + combinationValues.med_mhc_childcare_none.Savings)) > threshold) {
        $('#unit tr:eq(2) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(11)').text() - combinationValues.med_mhc_childcare_none.Total_Expenses) > threshold) {
        $('#unit tr:eq(2) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(12)').text() - combinationValues.med_mhc_childcare_none.Housing) > threshold) {
        $('#unit tr:eq(2) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(13)').text() - combinationValues.med_mhc_childcare_none.Childcare) > threshold) {
        $('#unit tr:eq(2) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(14)').text() - combinationValues.med_mhc_childcare_none.Food) > threshold) {
        $('#unit tr:eq(2) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(15)').text() - combinationValues.med_mhc_childcare_none.Car_Insurance) > threshold) {
        $('#unit tr:eq(2) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(16)').text() - combinationValues.med_mhc_childcare_none.Car_Ownership) > threshold) {
        $('#unit tr:eq(2) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(17)').text() - combinationValues.med_mhc_childcare_none.Public_Transport) > threshold) {
        $('#unit tr:eq(2) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(18)').text() - combinationValues.med_mhc_childcare_none.Health_Insurance) > threshold) {
        $('#unit tr:eq(2) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(19)').text() - combinationValues.med_mhc_childcare_none.Out_of_Pocket_Costs) > threshold) {
        $('#unit tr:eq(2) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(20)').text() - combinationValues.med_mhc_childcare_none.Entertainment) > threshold) {
        $('#unit tr:eq(2) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(21)').text() - combinationValues.med_mhc_childcare_none.Miscellaneous) > threshold) {
        $('#unit tr:eq(2) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(22)').text() - combinationValues.med_mhc_childcare_none.Savings) > threshold) {
        $('#unit tr:eq(2) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(22)').addClass('match');
    }

}
function max_ehc_childcare_family_values(){

    if(Math.abs($('#unit tr:eq(3) td:eq(7)').text() - combinationValues.max_ehc_childcare_family.Gross_Income) > threshold) { // threshold used to account for floats
        $('#unit tr:eq(3) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(8)').text() - combinationValues.max_ehc_childcare_family.Taxes) > threshold) {
        $('#unit tr:eq(3) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(9)').text() - combinationValues.max_ehc_childcare_family.Net_Income) > threshold) {
        $('#unit tr:eq(3) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(10)').text() - (combinationValues.max_ehc_childcare_family.Total_Expenses + combinationValues.max_ehc_childcare_family.Savings)) > threshold) {
        $('#unit tr:eq(3) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(11)').text() - combinationValues.max_ehc_childcare_family.Total_Expenses) > threshold) {
        $('#unit tr:eq(3) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(12)').text() - combinationValues.max_ehc_childcare_family.Housing) > threshold) {
        $('#unit tr:eq(3) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(13)').text() - combinationValues.max_ehc_childcare_family.Childcare) > threshold) {
        $('#unit tr:eq(3) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(14)').text() - combinationValues.max_ehc_childcare_family.Food) > threshold) {
        $('#unit tr:eq(3) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(15)').text() - combinationValues.max_ehc_childcare_family.Car_Insurance) > threshold) {
        $('#unit tr:eq(3) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(16)').text() - combinationValues.max_ehc_childcare_family.Car_Ownership) > threshold) {
        $('#unit tr:eq(3) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(17)').text() - combinationValues.max_ehc_childcare_family.Public_Transport) > threshold) {
        $('#unit tr:eq(3) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(18)').text() - combinationValues.max_ehc_childcare_family.Health_Insurance) > threshold) {
        $('#unit tr:eq(3) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(19)').text() - combinationValues.max_ehc_childcare_family.Out_of_Pocket_Costs) > threshold) {
        $('#unit tr:eq(3) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(20)').text() - combinationValues.max_ehc_childcare_family.Entertainment) > threshold) {
        $('#unit tr:eq(3) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(21)').text() - combinationValues.max_ehc_childcare_family.Miscellaneous) > threshold) {
        $('#unit tr:eq(3) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(22)').text() - combinationValues.max_ehc_childcare_family.Savings) > threshold) {
        $('#unit tr:eq(3) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(22)').addClass('match');
    }


}
function max_ehc_childcare_center_values(){

    if(Math.abs($('#unit tr:eq(3) td:eq(7)').text() - combinationValues.max_ehc_childcare_center.Gross_Income) > threshold) { // threshold used to account for floats
        $('#unit tr:eq(3) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(8)').text() - combinationValues.max_ehc_childcare_center.Taxes) > threshold) {
        $('#unit tr:eq(3) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(9)').text() - combinationValues.max_ehc_childcare_center.Net_Income) > threshold) {
        $('#unit tr:eq(3) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(10)').text() - (combinationValues.max_ehc_childcare_center.Total_Expenses + combinationValues.max_ehc_childcare_center.Savings)) > threshold) {
        $('#unit tr:eq(3) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(11)').text() - combinationValues.max_ehc_childcare_center.Total_Expenses) > threshold) {
        $('#unit tr:eq(3) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(12)').text() - combinationValues.max_ehc_childcare_center.Housing) > threshold) {
        $('#unit tr:eq(3) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(13)').text() - combinationValues.max_ehc_childcare_center.Childcare) > threshold) {
        $('#unit tr:eq(3) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(14)').text() - combinationValues.max_ehc_childcare_center.Food) > threshold) {
        $('#unit tr:eq(3) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(15)').text() - combinationValues.max_ehc_childcare_center.Car_Insurance) > threshold) {
        $('#unit tr:eq(3) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(16)').text() - combinationValues.max_ehc_childcare_center.Car_Ownership) > threshold) {
        $('#unit tr:eq(3) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(17)').text() - combinationValues.max_ehc_childcare_center.Public_Transport) > threshold) {
        $('#unit tr:eq(3) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(18)').text() - combinationValues.max_ehc_childcare_center.Health_Insurance) > threshold) {
        $('#unit tr:eq(3) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(19)').text() - combinationValues.max_ehc_childcare_center.Out_of_Pocket_Costs) > threshold) {
        $('#unit tr:eq(3) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(20)').text() - combinationValues.max_ehc_childcare_center.Entertainment) > threshold) {
        $('#unit tr:eq(3) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(21)').text() - combinationValues.max_ehc_childcare_center.Miscellaneous) > threshold) {
        $('#unit tr:eq(3) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(22)').text() - combinationValues.max_ehc_childcare_center.Savings) > threshold) {
        $('#unit tr:eq(3) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(22)').addClass('match');
    }

}
function max_ehc_childcare_none_values(){

    if(Math.abs($('#unit tr:eq(3) td:eq(7)').text() - combinationValues.max_ehc_childcare_none.Gross_Income) > threshold) { // threshold used to account for floats
        $('#unit tr:eq(3) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(8)').text() - combinationValues.max_ehc_childcare_none.Taxes) > threshold) {
        $('#unit tr:eq(3) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(9)').text() - combinationValues.max_ehc_childcare_none.Net_Income) > threshold) {
        $('#unit tr:eq(3) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(10)').text() - (combinationValues.max_ehc_childcare_none.Total_Expenses + combinationValues.max_ehc_childcare_none.Savings)) > threshold) {
        $('#unit tr:eq(3) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(11)').text() - combinationValues.max_ehc_childcare_none.Total_Expenses) > threshold) {
        $('#unit tr:eq(3) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(12)').text() - combinationValues.max_ehc_childcare_none.Housing) > threshold) {
        $('#unit tr:eq(3) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(13)').text() - combinationValues.max_ehc_childcare_none.Childcare) > threshold) {
        $('#unit tr:eq(3) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(14)').text() - combinationValues.max_ehc_childcare_none.Food) > threshold) {
        $('#unit tr:eq(3) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(15)').text() - combinationValues.max_ehc_childcare_none.Car_Insurance) > threshold) {
        $('#unit tr:eq(3) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(16)').text() - combinationValues.max_ehc_childcare_none.Car_Ownership) > threshold) {
        $('#unit tr:eq(3) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(17)').text() - combinationValues.max_ehc_childcare_none.Public_Transport) > threshold) {
        $('#unit tr:eq(3) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(18)').text() - combinationValues.max_ehc_childcare_none.Health_Insurance) > threshold) {
        $('#unit tr:eq(3) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(19)').text() - combinationValues.max_ehc_childcare_none.Out_of_Pocket_Costs) > threshold) {
        $('#unit tr:eq(3) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(20)').text() - combinationValues.max_ehc_childcare_none.Entertainment) > threshold) {
        $('#unit tr:eq(3) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(21)').text() - combinationValues.max_ehc_childcare_none.Miscellaneous) > threshold) {
        $('#unit tr:eq(3) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(22)').text() - combinationValues.max_ehc_childcare_none.Savings) > threshold) {
        $('#unit tr:eq(3) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(22)').addClass('match');
    }
}
function max_mhc_childcare_family_values(){

    if(Math.abs($('#unit tr:eq(3) td:eq(7)').text() - combinationValues.max_mhc_childcare_family.Gross_Income) > threshold) { // threshold used to account for floats
        $('#unit tr:eq(3) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(8)').text() - combinationValues.max_mhc_childcare_family.Taxes) > threshold) {
        $('#unit tr:eq(3) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(9)').text() - combinationValues.max_mhc_childcare_family.Net_Income) > threshold) {
        $('#unit tr:eq(3) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(10)').text() - (combinationValues.max_mhc_childcare_family.Total_Expenses + combinationValues.max_mhc_childcare_family.Savings)) > threshold) {
        $('#unit tr:eq(3) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(11)').text() - combinationValues.max_mhc_childcare_family.Total_Expenses) > threshold) {
        $('#unit tr:eq(3) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(12)').text() - combinationValues.max_mhc_childcare_family.Housing) > threshold) {
        $('#unit tr:eq(3) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(13)').text() - combinationValues.max_mhc_childcare_family.Childcare) > threshold) {
        $('#unit tr:eq(3) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(14)').text() - combinationValues.max_mhc_childcare_family.Food) > threshold) {
        $('#unit tr:eq(3) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(15)').text() - combinationValues.max_mhc_childcare_family.Car_Insurance) > threshold) {
        $('#unit tr:eq(3) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(16)').text() - combinationValues.max_mhc_childcare_family.Car_Ownership) > threshold) {
        $('#unit tr:eq(3) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(17)').text() - combinationValues.max_mhc_childcare_family.Public_Transport) > threshold) {
        $('#unit tr:eq(3) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(18)').text() - combinationValues.max_mhc_childcare_family.Health_Insurance) > threshold) {
        $('#unit tr:eq(3) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(19)').text() - combinationValues.max_mhc_childcare_family.Out_of_Pocket_Costs) > threshold) {
        $('#unit tr:eq(3) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(20)').text() - combinationValues.max_mhc_childcare_family.Entertainment) > threshold) {
        $('#unit tr:eq(3) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(21)').text() - combinationValues.max_mhc_childcare_family.Miscellaneous) > threshold) {
        $('#unit tr:eq(3) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(22)').text() - combinationValues.max_mhc_childcare_family.Savings) > threshold) {
        $('#unit tr:eq(3) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(22)').addClass('match');
    }


}
function max_mhc_childcare_center_values(){

    if(Math.abs($('#unit tr:eq(3) td:eq(7)').text() - combinationValues.max_mhc_childcare_center.Gross_Income) > threshold) { // threshold used to account for floats
        $('#unit tr:eq(3) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(8)').text() - combinationValues.max_mhc_childcare_center.Taxes) > threshold) {
        $('#unit tr:eq(3) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(9)').text() - combinationValues.max_mhc_childcare_center.Net_Income) > threshold) {
        $('#unit tr:eq(3) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(10)').text() - (combinationValues.max_mhc_childcare_center.Total_Expenses + combinationValues.max_mhc_childcare_center.Savings)) > threshold) {
        $('#unit tr:eq(3) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(11)').text() - combinationValues.max_mhc_childcare_center.Total_Expenses) > threshold) {
        $('#unit tr:eq(3) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(12)').text() - combinationValues.max_mhc_childcare_center.Housing) > threshold) {
        $('#unit tr:eq(3) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(13)').text() - combinationValues.max_mhc_childcare_center.Childcare) > threshold) {
        $('#unit tr:eq(3) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(14)').text() - combinationValues.max_mhc_childcare_center.Food) > threshold) {
        $('#unit tr:eq(3) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(15)').text() - combinationValues.max_mhc_childcare_center.Car_Insurance) > threshold) {
        $('#unit tr:eq(3) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(16)').text() - combinationValues.max_mhc_childcare_center.Car_Ownership) > threshold) {
        $('#unit tr:eq(3) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(17)').text() - combinationValues.max_mhc_childcare_center.Public_Transport) > threshold) {
        $('#unit tr:eq(3) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(18)').text() - combinationValues.max_mhc_childcare_center.Health_Insurance) > threshold) {
        $('#unit tr:eq(3) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(19)').text() - combinationValues.max_mhc_childcare_center.Out_of_Pocket_Costs) > threshold) {
        $('#unit tr:eq(3) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(20)').text() - combinationValues.max_mhc_childcare_center.Entertainment) > threshold) {
        $('#unit tr:eq(3) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(21)').text() - combinationValues.max_mhc_childcare_center.Miscellaneous) > threshold) {
        $('#unit tr:eq(3) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(22)').text() - combinationValues.max_mhc_childcare_center.Savings) > threshold) {
        $('#unit tr:eq(3) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(22)').addClass('match');
    }


}
function max_mhc_childcare_none_values(){

    if(Math.abs($('#unit tr:eq(3) td:eq(7)').text() - combinationValues.max_mhc_childcare_none.Gross_Income) > threshold) { // threshold used to account for floats
        $('#unit tr:eq(3) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(8)').text() - combinationValues.max_mhc_childcare_none.Taxes) > threshold) {
        $('#unit tr:eq(3) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(9)').text() - combinationValues.max_mhc_childcare_none.Net_Income) > threshold) {
        $('#unit tr:eq(3) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(10)').text() - (combinationValues.max_mhc_childcare_none.Total_Expenses + combinationValues.max_mhc_childcare_none.Savings)) > threshold) {
        $('#unit tr:eq(3) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(3) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.max_mhc_childcare_none.Total_Expenses + combinationValues.max_mhc_childcare_none.Savings);
    } else {
        $('#unit tr:eq(3) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(11)').text() - combinationValues.max_mhc_childcare_none.Total_Expenses) > threshold) {
        $('#unit tr:eq(3) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(12)').text() - combinationValues.max_mhc_childcare_none.Housing) > threshold) {
        $('#unit tr:eq(3) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(13)').text() - combinationValues.max_mhc_childcare_none.Childcare) > threshold) {
        $('#unit tr:eq(3) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(14)').text() - combinationValues.max_mhc_childcare_none.Food) > threshold) {
        $('#unit tr:eq(3) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(15)').text() - combinationValues.max_mhc_childcare_none.Car_Insurance) > threshold) {
        $('#unit tr:eq(3) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(16)').text() - combinationValues.max_mhc_childcare_none.Car_Ownership) > threshold) {
        $('#unit tr:eq(3) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(17)').text() - combinationValues.max_mhc_childcare_none.Public_Transport) > threshold) {
        $('#unit tr:eq(3) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(18)').text() - combinationValues.max_mhc_childcare_none.Health_Insurance) > threshold) {
        $('#unit tr:eq(3) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(19)').text() - combinationValues.max_mhc_childcare_none.Out_of_Pocket_Costs) > threshold) {
        $('#unit tr:eq(3) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(20)').text() - combinationValues.max_mhc_childcare_none.Entertainment) > threshold) {
        $('#unit tr:eq(3) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(21)').text() - combinationValues.max_mhc_childcare_none.Miscellaneous) > threshold) {
        $('#unit tr:eq(3) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(22)').text() - combinationValues.max_mhc_childcare_none.Savings) > threshold) {
        $('#unit tr:eq(3) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(22)').addClass('match');
    }

}

function log_taxes_ehc(family_combination) {
    console.log("==========FAMILY COMBINATION==========");
    console.log(family_combination.adults,
    family_combination.infants,
    family_combination.preschoolers,
    family_combination.schoolagers,
    family_combination.teenagers);
    console.log("ehcQualifyingChildCareExpenses",ehcQualifyingChildCareExpenses());
    console.log("ehcFamilySize",ehcFamilySize());
    console.log("ehcStandardDeduction",ehcStandardDeduction());
    console.log("ehcFederalExemptions",ehcFederalExemptions());
    console.log("ehcStateExemptions",ehcStateExemptions());
    console.log("ehcGrossTaxableFederal",ehcGrossTaxableFederal());
    console.log("ehcUtahStateCreditValueHolder",ehcUtahStateCreditValueHolder());
    console.log("ehcStateTaxBeforeCredits",ehcStateTaxBeforeCredits());
    console.log("ehcGrossTaxFedUtahStateCreditValueHold",ehcGrossTaxFedUtahStateCreditValueHold());
    console.log("ehcCreditBeforePhaseOut",ehcCreditBeforePhaseOut());
    console.log("ehcPhaseOutX",ehcPhaseOutX());
    console.log("ehcNumberOfChildren",ehcNumberOfChildren());
    console.log("ehcFederalTaxesOwedBeforeCredits",ehcFederalTaxesOwedBeforeCredits());
    console.log("ehcEITC",ehcEITC());
    console.log("ehcChildTaxCredit",ehcChildTaxCredit());
    console.log("ehcAdjustedChildTaxCredit",ehcAdjustedChildTaxCredit());
    console.log("ehcFederalTaxesLessChildCareTaxCredit",ehcFederalTaxesLessChildCareTaxCredit());
    console.log("ehcAdjustedChildTaxCreditUsed",ehcAdjustedChildTaxCreditUsed());
    console.log("ehcAdditionalChildTaxCredit",ehcAdditionalChildTaxCredit());
    console.log("ehcChildCareTaxCredit",ehcChildCareTaxCredit());
    console.log("ehcSumOfNonRefundableTaxCredits",ehcSumOfNonRefundableTaxCredits());
    console.log("ehcSumOfRefundableTaxCredits",ehcSumOfRefundableTaxCredits());
    console.log("ehcFedTaxOwedLessNonRefundableTax",ehcFedTaxOwedLessNonRefundableTax());
    console.log("ehcFedDeductionPlusStateExemption",ehcFedDeductionPlusStateExemption());
    console.log("ehcUtahTaxCredit",ehcUtahTaxCredit());
    console.log("ehcFederalPayrollTax",ehcFederalPayrollTax());
    console.log("ehcFederalTaxOwed",ehcFederalTaxOwed());
    console.log("ehcUtahTaxesOwed",ehcUtahTaxesOwed());
    console.log("ehcTotalExpenses",ehcTotalExpenses());
    console.log("ehcSavings1PercentGross",ehcSavings1PercentGross());
    console.log("ehcTotalExpensesPlusSavings",ehcTotalExpensesPlusSavings());
    console.log("ehcTotalTax",ehcTotalTax());
    console.log("ehcNetYearlyIncome",ehcNetYearlyIncome());
}
function log_taxes_mhc(family_combination) {
    console.log("==========FAMILY COMBINATION==========");
    console.log(family_combination.adults,
        family_combination.infants,
        family_combination.preschoolers,
        family_combination.schoolagers,
        family_combination.teenagers);
    console.log("mhcQualifyingChildCareExpenses",mhcQualifyingChildCareExpenses());
    console.log("mhcFamilySize",mhcFamilySize());
    console.log("mhcStandardDeduction",mhcStandardDeduction());
    console.log("mhcFederalExemptions",mhcFederalExemptions());
    console.log("mhcStateExemptions",mhcStateExemptions());
    console.log("mhcGrossTaxableFederal",mhcGrossTaxableFederal());
    console.log("mhcUtahStateCreditValueHolder",mhcUtahStateCreditValueHolder());
    console.log("mhcStateTaxBeforeCredits",mhcStateTaxBeforeCredits());
    console.log("mhcGrossTaxFedMinusUtahStateCredValueHolder",mhcGrossTaxFedMinusUtahStateCredValueHolder());
    console.log("mhcCreditBeforePhaseOut",mhcCreditBeforePhaseOut());
    console.log("mhcPhaseOutX13",mhcPhaseOutX13());
    console.log("mhcNumberOfChildren",mhcNumberOfChildren());
    console.log("mhcFedTaxOwedBeforeCredits",mhcFedTaxOwedBeforeCredits());
    console.log("mhcEITC",mhcEITC());
    console.log("mhcChildTaxCredit",mhcChildTaxCredit());
    console.log("mhcAdjustedChildTaxCredit",mhcAdjustedChildTaxCredit());
    console.log("mhcFedTaxLessChildCareTaxCredit",mhcFedTaxLessChildCareTaxCredit());
    console.log("mhcAdjustedChildTaxCreditUsed",mhcAdjustedChildTaxCreditUsed());
    console.log("mhcAdditionalChildTaxCredit",mhcAdditionalChildTaxCredit());
    console.log("mhcChildCareTaxCredit",mhcChildCareTaxCredit());
    console.log("mhcFederalPovertyLine",mhcFederalPovertyLine());
    console.log("mhcGrossIncomeOverFederalPovertyLine",mhcGrossIncomeOverFederalPovertyLine());
    console.log("mhcValueFromApplicableFigureTable",mhcValueFromApplicableFigureTable());
    console.log("mhcApplicableFigureXGrossIncome",mhcApplicableFigureXGrossIncome());
    console.log("mhcBenchmarkSilverPlan",mhcBenchmarkSilverPlan());
    console.log("mhcBenchApplicableFigureXGrossIncome",mhcBenchApplicableFigureXGrossIncome());
    console.log("mhcMarketPlacePlanChosen",mhcMarketPlacePlanChosen());
    console.log("mhcPremiumTaxCredit",mhcPremiumTaxCredit());
    console.log("mhcEligibleExpenses",mhcEligibleExpenses());
    console.log("mhcUtahsHealthBenefitPlanCredit",mhcUtahsHealthBenefitPlanCredit());
    console.log("mhcSumOfNonRefundableTaxCredits",mhcSumOfNonRefundableTaxCredits());
    console.log("mhcSumOfRefundableTaxCredits",mhcSumOfRefundableTaxCredits());
    console.log("mhcFedTaxOwedLessNonRefundTaxCredits",mhcFedTaxOwedLessNonRefundTaxCredits());
    console.log("mhcFedDeductionPlusStateExemptionX6Per",mhcFedDeductionPlusStateExemptionX6Per());
    console.log("mhcUtahTaxCredit",mhcUtahTaxCredit());
    console.log("mhcFederalPayrollTax",mhcFederalPayrollTax());
    console.log("mhcFederalTaxOwed",mhcFederalTaxOwed());
    console.log("mhcUtahTaxesOwed",mhcUtahTaxesOwed());
    console.log("mhcTotalExpenses",mhcTotalExpenses());
    console.log("mhcSavings1PercentGross",mhcSavings1PercentGross());
    console.log("mhcTotalExpensesPlusSavings",mhcTotalExpensesPlusSavings());
    console.log("mhcTotalTax",mhcTotalTax());
    console.log("mhcNetYearlyIncome",mhcNetYearlyIncome());
}
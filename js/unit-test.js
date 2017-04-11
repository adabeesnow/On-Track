/**
 * Created by Adam Salvo on 2/27/2017.
 */

let combinationValues = {
    "min_ehc": {
        "Housing": 7104.00,
        "Childcare": 0,
        "Food": 3028.32,
        "Car_Insurance": 465.64,
        "Car_Ownership": 3289.64,
        "Public_Transport": 1005.00,
        "Health_Insurance": 1406.00,
        "Out_of_Pocket_Costs": 107.62,
        "Entertainment": 1139.00,
        "Miscellaneous": 1614.00,
        "Savings": 234.34,
        "Taxes": 4040.42,
        "Gross_Income": 23433.99,
        "Net_Income": 19393.56,
        "Total_Expenses": 19159.22
    },
    "min_mhc": {
        "Housing": 7104.00,
        "Childcare": 0.00,
        "Food": 3028.32,
        "Car_Insurance": 465.64,
        "Car_Ownership": 3289.64,
        "Public_Transport": 1005.00,
        "Health_Insurance": 2536.00,
        "Out_of_Pocket_Costs": 161.43,
        "Entertainment": 1139.00,
        "Miscellaneous": 1614.00,
        "Savings": 251.24,
        "Taxes": 2035.47,
        "Gross_Income": 22604.55,
        "Net_Income": 20594.27,
        "Total_Expenses": 20343.032
    },
    "med_ehc_childcare_family": {
        "Housing": 9096.00,
        "Childcare": 4813.85,
        "Food": 7736.02,
        "Car_Insurance": 931.28,
        "Car_Ownership": 6579.28,
        "Public_Transport": 1758.00,
        "Health_Insurance": 3412.00,
        "Out_of_Pocket_Costs": 308.48,
        "Entertainment": 1650.00,
        "Miscellaneous": 2541.00,
        "Savings": 440.64,
        "Taxes": 4796.96,
        "Gross_Income": 44063.51,
        "Net_Income": 39266.55,
        "Total_Expenses": 38825.92
    },
    "med_ehc_childcare_center": {
        "Housing": 9096.00,
        "Childcare": 5444.19,
        "Food": 7736.02,
        "Car_Insurance": 931.28,
        "Car_Ownership": 6579.28,
        "Public_Transport": 1758.00,
        "Health_Insurance": 3412.00,
        "Out_of_Pocket_Costs": 308.48,
        "Entertainment": 1650.00,
        "Miscellaneous": 2541.00,
        "Savings": 450.95,
        "Taxes": 5187.48,
        "Gross_Income": 45094.68,
        "Net_Income": 39907.20,
        "Total_Expenses": 39456.25
    },
    "med_ehc_childcare_none": {
        "Housing": 9096.00,
        "Childcare": 0.00,
        "Food": 7736.02,
        "Car_Insurance": 931.28,
        "Car_Ownership": 6579.28,
        "Public_Transport": 1758.00,
        "Health_Insurance": 3412.00,
        "Out_of_Pocket_Costs": 308.48,
        "Entertainment": 1650.00,
        "Miscellaneous": 2541.00,
        "Savings": 356.23,
        "Taxes": 1254.80,
        "Gross_Income": 35623.10,
        "Net_Income": 34368.30,
        "Total_Expenses": 34012.07
    },
    "med_mhc_childcare_family": {
        "Housing": 9096.00,
        "Childcare": 4813.85,
        "Food": 7736.02,
        "Car_Insurance": 931.28,
        "Car_Ownership": 6579.28,
        "Public_Transport": 1758.00,
        "Health_Insurance": 6519.00,
        "Out_of_Pocket_Costs": 462.72,
        "Entertainment": 1650.00,
        "Miscellaneous": 2541.00,
        "Savings": 488.50,
        "Taxes": -437.40,
        "Gross_Income": 42070.46,
        "Net_Income": 42575.66,
        "Total_Expenses": 42087.16
    },
    "med_mhc_childcare_center": {
        "Housing": 9096.00,
        "Childcare": 5444.19,
        "Food": 7736.02,
        "Car_Insurance": 931.28,
        "Car_Ownership": 6579.28,
        "Public_Transport": 1758.00,
        "Health_Insurance": 6519.00,
        "Out_of_Pocket_Costs": 462.72,
        "Entertainment": 1650.00,
        "Miscellaneous": 2541.00,
        "Savings": 497.50,
        "Taxes": -7.48,
        "Gross_Income": 43141.43,
        "Net_Income": 43214.99,
        "Total_Expenses": 42717.49
    },
    "med_mhc_childcare_none": {
        "Housing": 9096.00,
        "Childcare": 0.00,
        "Food": 7736.02,
        "Car_Insurance": 931.28,
        "Car_Ownership": 6579.28,
        "Public_Transport": 1758.00,
        "Health_Insurance": 6519.00,
        "Out_of_Pocket_Costs": 462.72,
        "Entertainment": 1650.00,
        "Miscellaneous": 2541.00,
        "Savings": 412.90,
        "Taxes": -3566.53,
        "Gross_Income": 34047.25,
        "Net_Income": 37686.21,
        "Total_Expenses": 37273.31
    },
    "max_ehc_childcare_family": {
        "Housing": 15000.00,
        "Childcare": 21271.35,
        "Food": 13612.32,
        "Car_Insurance": 931.28,
        "Car_Ownership": 6579.28,
        "Public_Transport": 3264.00,
        "Health_Insurance": 3412.00,
        "Out_of_Pocket_Costs": 557.28,
        "Entertainment": 2429.00,
        "Miscellaneous": 6122.00,
        "Savings": 822.14,
        "Taxes": 8213.59,
        "Gross_Income": 82214.25,
        "Net_Income": 74000.65,
        "Total_Expenses": 73178.51
    },
    "max_ehc_childcare_center": {
        "Housing": 15000.00,
        "Childcare": 24400.77,
        "Food": 13612.32,
        "Car_Insurance": 931.28,
        "Car_Ownership": 6579.28,
        "Public_Transport": 3264.00,
        "Health_Insurance": 3412.00,
        "Out_of_Pocket_Costs": 557.28,
        "Entertainment": 2429.00,
        "Miscellaneous": 6122.00,
        "Savings": 866.82,
        "Taxes": 9506.91,
        "Gross_Income": 86681.66,
        "Net_Income": 77174.75,
        "Total_Expenses": 76307.93
    },
    "max_ehc_childcare_none": {
        "Housing": 15000.00,
        "Childcare": 0.00,
        "Food": 13612.32,
        "Car_Insurance": 931.28,
        "Car_Ownership": 6579.28,
        "Public_Transport": 3264.00,
        "Health_Insurance": 3412.00,
        "Out_of_Pocket_Costs": 557.28,
        "Entertainment": 2429.00,
        "Miscellaneous": 6122.00,
        "Savings": 520.65,
        "Taxes": -362.87,
        "Gross_Income": 52064.94,
        "Net_Income": 52427.81,
        "Total_Expenses": 51907.16
    },
    "max_mhc_childcare_family": {
        "Housing": 15000.00,
        "Childcare": 21271.35,
        "Food": 13612.32,
        "Car_Insurance": 931.28,
        "Car_Ownership": 6579.28,
        "Public_Transport": 3264.00,
        "Health_Insurance": 12307.00,
        "Out_of_Pocket_Costs": 835.92,
        "Entertainment": 2429.00,
        "Miscellaneous": 6122.00,
        "Savings": 953.10,
        "Taxes": 8328.29,
        "Gross_Income": 91596.41,
        "Net_Income": 83305.25,
        "Total_Expenses": 82352.15
    },
    "max_mhc_childcare_center": {
        "Housing": 15000.00,
        "Childcare": 24400.77,
        "Food": 13612.32,
        "Car_Insurance": 931.28,
        "Car_Ownership": 6579.28,
        "Public_Transport": 3264.00,
        "Health_Insurance": 12307.00,
        "Out_of_Pocket_Costs": 835.92,
        "Entertainment": 2429.00,
        "Miscellaneous": 6122.00,
        "Savings": 997.78,
        "Taxes": 10852.88,
        "Gross_Income": 97307.53,
        "Net_Income": 86479.35,
        "Total_Expenses": 85481.57
    },
    "max_mhc_childcare_none": {
        "Housing": 15000.00,
        "Childcare": 0.00,
        "Food": 13612.32,
        "Car_Insurance": 931.28,
        "Car_Ownership": 6579.28,
        "Public_Transport": 3264.00,
        "Health_Insurance": 12307.00,
        "Out_of_Pocket_Costs": 835.92,
        "Entertainment": 2429.00,
        "Miscellaneous": 6122.00,
        "Savings": 649.44,
        "Taxes": -9123.18,
        "Gross_Income": 52482.44,
        "Net_Income": 61730.24,
        "Total_Expenses": 61080.80
    }
};

//generated-standard formulas
$(document).ready(function () {

    // -------------------------------------------- GET AJAX DATA ------------------------------------------------------

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
                // Applicable Figure table data from 2016. Data from 2015 used below for testing purposes.
                // if (parsedJSON[i].entryName.includes("a_f")) {
                //     applicable_figure_list.push(parsedJSON[i].entryValue);
                // }
            }
        }
    });

    // 2015 data for Excel sheet comparison.
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

    // Remove first entry from each credit-amount list.
    credit_amount_single_0_children_list = credit_amount_single_0_children_list
        .slice(1, credit_amount_single_0_children_list.length);
    credit_amount_single_1_children_list = credit_amount_single_1_children_list
        .slice(1, credit_amount_single_1_children_list.length);
    credit_amount_single_2_children_list = credit_amount_single_2_children_list
        .slice(1, credit_amount_single_2_children_list.length);
    credit_amount_single_3_children_list = credit_amount_single_3_children_list
        .slice(1, credit_amount_single_3_children_list.length);
    credit_amount_married_filing_jointly_0_children_list = credit_amount_married_filing_jointly_0_children_list
        .slice(1, credit_amount_married_filing_jointly_0_children_list.length);
    credit_amount_married_filing_jointly_1_children_list = credit_amount_married_filing_jointly_1_children_list
        .slice(1, credit_amount_married_filing_jointly_1_children_list.length);
    credit_amount_married_filing_jointly_2_children_list = credit_amount_married_filing_jointly_2_children_list
        .slice(1, credit_amount_married_filing_jointly_2_children_list.length);
    credit_amount_married_filing_jointly_3_children_list = credit_amount_married_filing_jointly_3_children_list
        .slice(1, credit_amount_married_filing_jointly_3_children_list.length);

    // ------------------------------------------ INITIAL TABLE WRITE --------------------------------------------------

    getUserInputs();            // Get radio button values.
    writeVerificationRows();    // Write verification test rows to page.
    writeAllCombinations();     // Write all combinations to page.

    // ---------------------------------------------- ON CHANGE --------------------------------------------------------

    $('input[type=radio]').change(function() {

        $('#unit').find('tbody').empty();   // Remove everything in unit table body.

        getUserInputs();            // Get radio button values.
        writeVerificationRows();    // Write verification test rows to page.
        writeAllCombinations();     // Write all combinations to page.

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
            "<td class='unit-data danger'>" + mhcNetYearlyIncome().toFixed(2) + "</td>" +        // Net Annual Income
            "<td class='unit-data danger'>" + mhcTotalExpensesPlusSavings().toFixed(2) + "</td>";    // Total Expenses + Savings
    } else {
        markup +=
            "<td class='unit-data success'>" + mhcNetYearlyIncome().toFixed(2) + "</td>" +       // Net Annual Income
            "<td class='unit-data success'>" + mhcTotalExpensesPlusSavings().toFixed(2) + "</td>";   // Total Expenses + Savings
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
            "<td class='unit-data danger'>" + ehcNetYearlyIncome().toFixed(2) + "</td>" +        // Net Annual Income
            "<td class='unit-data danger'>" + ehcTotalExpensesPlusSavings().toFixed(2) + "</td>";    // Total Expenses + Savings
    } else {
        markup +=
            "<td class='unit-data success'>" + ehcNetYearlyIncome().toFixed(2) + "</td>" +       // Net Annual Income
            "<td class='unit-data success'>" + ehcTotalExpensesPlusSavings().toFixed(2) + "</td>";   // Total Expenses + Savings
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
        if (use_marketplace_health_insurance_bool === true) { writeMHCTableData(); }
        // EHC
        else { writeEHCTableData(); }
    }
    verifyTheStuffAndThings();
}

//verifies the stuff and things
function verifyTheStuffAndThings(){
    console.log("values:", $('#unit tr:eq(1) td:eq(11)').text());
    //
    // $.each(combinationValues, function(key, val){
    //     var that = this;
    //     $.each(val, function(i, j){
    //         var
    //     })
    // })

    if(Math.abs($('#unit tr:eq(1) td:eq(7)').val() - combinationValues.min_ehc.Gross_Income) > 0.01) {
        $('#unit tr:eq(1) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(7)').addClass('match');
    }

    if($('#unit tr:eq(1) td:eq(8)').text() != combinationValues.min_ehc.Taxes) {
        $('#unit tr:eq(1) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(8)').addClass('match');
    }

    if($('#unit tr:eq(1) td:eq(9)').text() != combinationValues.min_ehc.Net_Income) {
        $('#unit tr:eq(1) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(9)').addClass('match');
    }

    if($('#unit tr:eq(1) td:eq(10)').text() != combinationValues.min_ehc.Total_Expenses + combinationValues.min_ehc.Savings) {
        $('#unit tr:eq(1) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(10)').addClass('match');
    }

    if($('#unit tr:eq(1) td:eq(11)').text() != combinationValues.min_ehc.Total_Expenses) {
        $('#unit tr:eq(1) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(11)').addClass('match');
    }

    if($('#unit tr:eq(1) td:eq(12)').text() != combinationValues.min_ehc.Housing) {
        $('#unit tr:eq(1) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(12)').addClass('match');
    }

    if($('#unit tr:eq(1) td:eq(13)').text() != combinationValues.min_ehc.Childcare) {
        $('#unit tr:eq(1) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(13)').addClass('match');
    }

    if($('#unit tr:eq(1) td:eq(14)').text() != combinationValues.min_ehc.Food) {
        $('#unit tr:eq(1) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(14)').addClass('match');
    }

    if($('#unit tr:eq(1) td:eq(15)').text() != combinationValues.min_ehc.Car_Insurance) {
        $('#unit tr:eq(1) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(15)').addClass('match');
    }

    if($('#unit tr:eq(1) td:eq(16)').text() != combinationValues.min_ehc.Car_Ownership) {
        $('#unit tr:eq(1) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(16)').addClass('match');
    }

    if($('#unit tr:eq(1) td:eq(17)').text() != combinationValues.min_ehc.Public_Transport) {
        $('#unit tr:eq(1) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(17)').addClass('match');
    }

    if($('#unit tr:eq(1) td:eq(18)').text() != combinationValues.min_ehc.Health_Insurance) {
        $('#unit tr:eq(1) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(18)').addClass('match');
    }

    if($('#unit tr:eq(1) td:eq(19)').text() != combinationValues.min_ehc.Out_of_Pocket_Costs) {
        $('#unit tr:eq(1) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(19)').addClass('match');
    }

    if($('#unit tr:eq(1) td:eq(20)').text() != combinationValues.min_ehc.Entertainment) {
        $('#unit tr:eq(1) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(20)').addClass('match');
    }

    if($('#unit tr:eq(1) td:eq(21)').text() != combinationValues.min_ehc.Miscellaneous) {
        $('#unit tr:eq(1) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(21)').addClass('match');
    }

    if($('#unit tr:eq(1) td:eq(22)').text() != combinationValues.min_ehc.Savings) {
        $('#unit tr:eq(1) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(22)').addClass('match');
    }

}

/**
 * Created by adsal on 2/27/2017.
 */

//generated-standard formulas
$(document).ready(function () {

    use_marketplace_health_insurance_bool = true;

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
                // if (parsedJSON[i].entryName.includes("a_f")) {
                //     applicable_figure_list.push(parsedJSON[i].entryValue);
                // }
            }
        }
    });

            applicable_figure_list = [
                0.0201,
                0.0302,
                0.0308,
                0.0314,
                0.032,
                0.0326,
                0.0331,
                0.0337,
                0.0343,
                0.0349,
                0.0355,
                0.0361,
                0.0367,
                0.0373,
                0.0378,
                0.0384,
                0.039,
                0.0396,
                0.0402,
                0.0407,
                0.0411,
                0.0416,
                0.0421,
                0.0425,
                0.043,
                0.0434,
                0.0439,
                0.0444,
                0.0448,
                0.0453,
                0.0458,
                0.0462,
                0.0467,
                0.0472,
                0.0476,
                0.0481,
                0.0486,
                0.049,
                0.0495,
                0.0499,
                0.0504,
                0.0509,
                0.0513,
                0.0518,
                0.0523,
                0.0527,
                0.0532,
                0.0537,
                0.0541,
                0.0546,
                0.055,
                0.0555,
                0.056,
                0.0564,
                0.0569,
                0.0574,
                0.0578,
                0.0583,
                0.0588,
                0.0592,
                0.0597,
                0.0602,
                0.0606,
                0.0611,
                0.0615,
                0.062,
                0.0625,
                0.0629,
                0.0634,
                0.0638,
                0.0641,
                0.0645,
                0.0648,
                0.0652,
                0.0655,
                0.0659,
                0.0662,
                0.0666,
                0.0669,
                0.0673,
                0.0676,
                0.068,
                0.0683,
                0.0687,
                0.069,
                0.0694,
                0.0697,
                0.0701,
                0.0704,
                0.0708,
                0.0711,
                0.0715,
                0.0718,
                0.0722,
                0.0726,
                0.0729,
                0.0733,
                0.0736,
                0.074,
                0.0743,
                0.0747,
                0.075,
                0.0754,
                0.0757,
                0.0761,
                0.0764,
                0.0768,
                0.0771,
                0.0775,
                0.0778,
                0.0782,
                0.0785,
                0.0789,
                0.0792,
                0.0796,
                0.0799,
                0.0803,
                0.0806,
                0.081,
                0.0813,
                0.0816,
                0.0819,
                0.0822,
                0.0825,
                0.0828,
                0.083,
                0.0833,
                0.0836,
                0.0839,
                0.0842,
                0.0845,
                0.0848,
                0.0851,
                0.0854,
                0.0857,
                0.086,
                0.0863,
                0.0865,
                0.0868,
                0.0871,
                0.0874,
                0.0877,
                0.088,
                0.0883,
                0.0886,
                0.0889,
                0.0892,
                0.0895,
                0.0898,
                0.0901,
                0.0903,
                0.0906,
                0.0909,
                0.0912,
                0.0915,
                0.0918,
                0.0921,
                0.0924,
                0.0927,
                0.093,
                0.0933,
                0.0936,
                0.0938,
                0.0941,
                0.0944,
                0.0947,
                0.095,
                0.0953,
                0.0956

            ];

    credit_amount_single_0_children_list = credit_amount_single_0_children_list.slice(1, credit_amount_single_0_children_list.length);
    credit_amount_single_1_children_list = credit_amount_single_1_children_list.slice(1, credit_amount_single_1_children_list.length);
    credit_amount_single_2_children_list = credit_amount_single_2_children_list.slice(1, credit_amount_single_2_children_list.length);
    credit_amount_single_3_children_list = credit_amount_single_3_children_list.slice(1, credit_amount_single_3_children_list.length);
    credit_amount_married_filing_jointly_0_children_list = credit_amount_married_filing_jointly_0_children_list.slice(1, credit_amount_married_filing_jointly_0_children_list.length);
    credit_amount_married_filing_jointly_1_children_list = credit_amount_married_filing_jointly_1_children_list.slice(1, credit_amount_married_filing_jointly_1_children_list.length);
    credit_amount_married_filing_jointly_2_children_list = credit_amount_married_filing_jointly_2_children_list.slice(1, credit_amount_married_filing_jointly_2_children_list.length);
    credit_amount_married_filing_jointly_3_children_list = credit_amount_married_filing_jointly_3_children_list.slice(1, credit_amount_married_filing_jointly_3_children_list.length);

    // ------------------------------------------- vv INITIAL RUN vv ---------------------------------------------------

    // Set MHC/EHC to checked value.
    use_marketplace_health_insurance_bool   = $('input[id=radio-mhc]').is(':checked');

    // Set Childcare and Family Care to checked value.
    if ($('input[name=radio-childcare]:checked').val()         === "childcare-center-care") {
        // If Center Care used: child_care_needed_bool = true, use_family_care_bool = false
        childcare_needed_bool = true;
        use_family_care_bool = false;
    } else if ($('input[name=radio-childcare]:checked').val()  === "childcare-family-care") {
        // If Family Care used: child_care_needed_bool = true, use_family_care_bool = true
        childcare_needed_bool = true;
        use_family_care_bool = true;
    } else if ($('input[name=radio-childcare]:checked').val()  === "none") {
        // If Childcare not required: child_care_needed_bool = false, use_family_care_bool = false
        childcare_needed_bool = false;
        use_family_care_bool = false;
    }

    // Number of adult bus passes is set to 1.
    number_of_public_transport_passes_adult = 1;

    for(let i = 1; i < 3; i++) {
        for(let j = 0; j < 6; j++) {
            for(let k = 0; k < 6; k++) {
                for(let t = 0; t < 6; t++) {
                    for(let z = 0; z < 6; z++) {
                        if(j + k + t + z < 6) {
                            // console.log("Combination: ", i, j, k, t, z);
                            number_of_adults = i;
                            number_of_infants = j;
                            number_of_preschoolers = k;
                            number_of_schoolagers = t;
                            number_of_teenagers = z;

                            // Number of child bus passes is set equal to number of schoolagers and teenagers.
                            number_of_public_transport_passes_child = number_of_schoolagers + number_of_teenagers;

                            // MHC
                            if (use_marketplace_health_insurance_bool === true) {
                                let goal_seek_loop_count = 50; // The number of times to run goalSeek function.
                                for (let i = 0; i < goal_seek_loop_count; i++) {
                                    mhc_gross_income = mhcCalcGross();
                                }

                                let markup =
                                    "<tr class='unit-data'>" +
                                    "<td class='unit-data'>" + number_of_adults + "</td>" + // Adults
                                    "<td class='unit-data'>" + number_of_infants + "</td>" + // Infants
                                    "<td class='unit-data'>" + number_of_preschoolers + "</td>" + // Preschoolers
                                    "<td class='unit-data'>" + number_of_schoolagers + "</td>" + // Schoolagers
                                    "<td class='unit-data'>" + number_of_teenagers + "</td>" + // Teenagers
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
                            // EHC
                            else {
                                let goal_seek_loop_count = 50; // The number of times to run goalSeek function.
                                for (let i = 0; i < goal_seek_loop_count; i++) {
                                    ehc_gross_income = ehcCalcGross();
                                }

                                let markup =
                                    "<tr class='unit-data'>" +
                                    "<td class='unit-data'>" + number_of_adults + "</td>" + // Adults
                                    "<td class='unit-data'>" + number_of_infants + "</td>" + // Infants
                                    "<td class='unit-data'>" + number_of_preschoolers + "</td>" + // Preschoolers
                                    "<td class='unit-data'>" + number_of_schoolagers + "</td>" + // Schoolagers
                                    "<td class='unit-data'>" + number_of_teenagers + "</td>" + // Teenagers
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
                        } // end if (combination filter)
                    } // end inner for (number of teenagers)
                } // end for (number of schoolagers)
            } // end for (number of preschoolers)
        } // end for (number of infants)
    } // end outer for (number of adults)

    // ------------------------------------------- vv ON-CHANGE vv -----------------------------------------------------

    $('input[type=radio]').change(function() {

        // Set MHC/EHC.
        use_marketplace_health_insurance_bool   = $('input[id=radio-mhc]').is(':checked');

        // Set Childcare and Family Care.
        if ($('input[name=radio-childcare]:checked').val()         === "childcare-center-care") {
            // If Center Care used: child_care_needed_bool = true, use_family_care_bool = false
            childcare_needed_bool = true;
            use_family_care_bool = false;
        } else if ($('input[name=radio-childcare]:checked').val()  === "childcare-family-care") {
            // If Family Care used: child_care_needed_bool = true, use_family_care_bool = true
            childcare_needed_bool = true;
            use_family_care_bool = true;
        } else if ($('input[name=radio-childcare]:checked').val()  === "childcare-none") {
            // If Childcare not required: child_care_needed_bool = false, use_family_care_bool = false
            childcare_needed_bool = false;
            use_family_care_bool = false;
        }

        $('#unit').find('tbody').empty(); // Remove everything in #unit->tbody.

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
                                if (use_marketplace_health_insurance_bool === true) {
                                    let goal_seek_loop_count = 50; // The number of times to run goalSeek function.
                                    for (let i = 0; i < goal_seek_loop_count; i++) {
                                        mhc_gross_income = mhcCalcGross();
                                    }

                                    let markup =
                                        "<tr class='unit-data'>" +
                                        "<td class='unit-data'>" + number_of_adults + "</td>" + // Adults
                                        "<td class='unit-data'>" + number_of_infants + "</td>" + // Infants
                                        "<td class='unit-data'>" + number_of_preschoolers + "</td>" + // Preschoolers
                                        "<td class='unit-data'>" + number_of_schoolagers + "</td>" + // Schoolagers
                                        "<td class='unit-data'>" + number_of_teenagers + "</td>" + // Teenagers
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
                                // EHC
                                else {
                                    let goal_seek_loop_count = 50; // The number of times to run goalSeek function.
                                    for (let i = 0; i < goal_seek_loop_count; i++) {
                                        ehc_gross_income = ehcCalcGross();
                                    }

                                    let markup =
                                        "<tr class='unit-data'>" +
                                        "<td class='unit-data'>" + number_of_adults + "</td>" + // Adults
                                        "<td class='unit-data'>" + number_of_infants + "</td>" + // Infants
                                        "<td class='unit-data'>" + number_of_preschoolers + "</td>" + // Preschoolers
                                        "<td class='unit-data'>" + number_of_schoolagers + "</td>" + // Schoolagers
                                        "<td class='unit-data'>" + number_of_teenagers + "</td>" + // Teenagers
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

                            } //end if (combination filter)

                        } // end inner for (number of teenagers)
                    } // end for (number of schoolagers)
                } // end for (number of preschoolers)
            } // end for (number of infants)
        } // end outer for (number of adults)
    }); // end change event

});



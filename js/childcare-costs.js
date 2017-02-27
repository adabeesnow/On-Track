/**
 * Created by doebo on 2/22/2017.
 */

let familyCareMonthlyAvgSchoolager = function () {
    return (familyCareMonthlyAvgSchoolagerIn() * .75 + familyCareMonthlyAvgSchoolagerOut() * .25) * number_of_schoolagers;
};

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

let familyCareAnnualInfant = function () {
    return familyCareMonthlyAvgInfant() * 12;
};

let familyCareAnnualPreschooler = function () {
    return familyCareMonthlyAvgPreschooler() * 12;
};

let familyCareAnnualSchoolager = function () {
    return familyCareMonthlyAvgSchoolager() * 12;
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

let centerCareAnnualInfant = function () {
    return centerCareMonthlyAvgInfant() * 12;
};

let centerCareAnnualPreschooler = function () {
    return centerCareMonthlyAvgPreschooler() * 12;
};

let centerCareAnnualSchoolager = function () {
    return centerCareMonthlyAvgSchoolager() * 12;
};


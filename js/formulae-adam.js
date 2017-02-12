/**
 * Created by adsal on 2/1/2017.
 */
/*
 =IF(
    ChangeHousing!E15="Standard",C16, // ChangeHousing!E15 is number of rooms dropdown. Standard, 1, 2, 3, or 4
                                      // C16 is housing cost
    IF(
        ChangeHousing!E15=1,Housing!K8, // K8 is one-bedroom annual average
        IF(
            ChangeHousing!E15=2,Housing!L8, // L8 is two-bedroom annual average
            IF(
                ChangeHousing!E15=3,Housing!M8, // M8 is three-bedroom annual average
                IF(
                    ChangeHousing!E15=4,Housing!N8,0 // N8 is four-bedroom annual average
                  )
              )
          )
      )
   )
   +IF(
       ChangeChildcare!E13>0,ChangeChildcare!E13, // ChangeChildcare!E13 is estimated annual babysitting costs
       IF(
          ChangeChildcare!I13="Yes",'Cost By Age'!P16,'Cost By Age'!D16 // I13 is family care yes/no
                                                                        // 'Cost By Age'!P16 is sum of family child care costs
                                                                        // 'Cost By Age'!D16 is sum of regular child care costs
          )
      )

  +F16 // Car insurance cost
  +G16 // Car ownership cost
  +IF(
      MarketplaceHealthcare!F16="No",'Cost By Age'!I17,'Cost By Age'!V17 // !F16 is Marketplace Healthcare instead of employer-sponsored health care
                                                                         // I17 is out-of-pocket healthcare costs
                                                                         // V17 is marketplace cost
      )
  +J16 is entertainment cost
  +K16 is miscellaneous cost
  +L16 is excessive children
  +M16 is excessive adult
  +R16 is public transportation cost
  +E16 is food cost

 */
/**
 * Created by tannergriffin on 2/5/2017.
 */
// CONSTANTS

let center_care_avg_0_to_12_mo = 653.65;
let center_care_avg_1_yr = 663.05;
let center_care_avg_2_yr = 535.23;
let center_care_avg_3_yr = 511.42;
let center_care_avg_4_yr = 503.42;
let center_care_avg_5_yr = 511.33;
let center_care_avg_kindergarten_in = 466.12;
let center_care_avg_kindergarten_out = 489.09;
let center_care_avg_schoolage_in = 442.00;
let center_care_avg_schoolage_out = 476.89;
let family_care_avg_0_to_12_mo = 514.77;
let family_care_avg_1_yr = 521.68;
let family_care_avg_2_yr = 482.32;
let family_care_avg_3_yr = 467.64;
let family_care_avg_4_yr = 457.12;
let family_care_avg_5_yr = 467.38;
let family_care_avg_kindergarten_in = 412.79;
let family_care_avg_kindergarten_out = 437.43;
let family_care_avg_schoolage_in = 384.65;
let family_care_avg_schoolage_out = 439.08;
let household_income_as_percentage_of_federal_poverty_line_list = {};
let applicable_figure_list = {};
let gross_income = 21999.30;
let family_size_list = {};
let poverty_level_list = {};
let housing_1_bed_84401 = 550.00;
let housing_1_bed_84403 = 560.00;
let housing_1_bed_84404 = 620.00;
let housing_1_bed_84405 = 620.00;
let housing_1_bed_84408 = 610.00;
let housing_2_bed_84401 = 710.00;
let housing_2_bed_84403 = 720.00;
let housing_2_bed_84404 = 790.00;
let housing_2_bed_84405 = 790.00;
let housing_2_bed_84408 = 780.00;
let housing_3_bed_84401 = 1020.00;
let housing_3_bed_84403 = 1030.00;
let housing_3_bed_84404 = 1130.00;
let housing_3_bed_84405 = 1130.00;
let housing_3_bed_84408 = 1120.00;
let housing_4_bed_84401 = 1170.00;
let housing_4_bed_84403 = 1190.00;
let housing_4_bed_84404 = 1300.00;
let housing_4_bed_84405 = 1300.00;
let housing_4_bed_84408 = 1290.00;
let low_cost_food_plan_price_per_mo_weber_county_infant = 118.84;
let low_cost_food_plan_price_per_mo_weber_county_preschooler = 124.92;
let low_cost_food_plan_price_per_mo_weber_county_schoolager = 193.37;
let low_cost_food_plan_price_per_mo_weber_county_teenager = 209.30;
let low_cost_food_plan_price_per_mo_weber_county_adult = 210.30;
let car_insurance_avg_per_mo_single = 465.64;
let car_insurance_avg_per_mo_married = 466.00;
let car_price = 5341.00;
let car_miles_per_gallon = 26.00;
let car_finance_cost = 373.64;
let car_monthly_payment = 158.74;
let car_gas_price = 2.75;
let car_miles = 4716.00;
let car_registration = 110.50;
let car_emissions = 27.00;
let car_maintenance = 580.00;
let employer_health_premium_in_avg_single = 1406.00;
let employer_health_premium_in_avg_couple = 2592.00;
let employer_health_premium_in_avg_family = 3412.00;
let out_of_pocket_infant = 31.16;
let out_of_pocket_preschooler = 31.16;
let out_of_pocket_schoolager = 93.24;
let out_of_pocket_teen = 93.24;
let out_of_pocket_adult = 107.62;
let entertainment_household_of_1 = 1139.00;
let entertainment_household_of_2 = 1496.00;
let entertainment_household_of_3 = 1650.00;
let entertainment_household_of_4 = 2379.00;
let entertainment_household_of_5_or_more = 2429.00;
let misc_for_1_15000_to_19999 = 403.00;
let personal_products_for_1_15000_to_19999 = 311.00;
let housekeeping_supplies_for_1_15000_to_19999 = 307.00;
let apparel_for_1_15000_to_19999 = 593.00;
let misc_for_2_20000_to_29999 = 275.00;
let personal_products_for_2_20000_to_29999 = 487.00;
let housekeeping_supplies_for_2_20000_to_29999 = 520.00;
let apparel_for_2_20000_to_29999 = 709.00;
let misc_for_3_30000_to_39999 = 389.00;
let personal_products_for_3_30000_to_39999 = 522.00;
let housekeeping_supplies_for_3_30000_to_39999 = 400.00;
let apparel_for_3_30000_to_39999 = 1230.00;
let misc_for_4_50000_to_69999 = 512.00;
let personal_products_for_4_50000_to_69999 = 730.00;
let housekeeping_supplies_for_4_50000_to_69999 = 598.00;
let apparel_for_4_50000_to_69999 = 1676.00;
let misc_for_5_or_more_50000_to_69999 = 610.00;
let personal_products_for_5_or_more_50000_to_69999 = 582.00;
let housekeeping_supplies_for_5_or_more_50000_to_69999 = 752.00;
let apparel_for_5_or_more_50000_to_69999 = 2271.00;
let misc_for_5_or_more_70000_and_up = 932.00;
let personal_products_for_5_or_more_70000_and_up = 980.00;
let housekeeping_supplies_for_5_or_more_70000_and_up = 1115.00;
let apparel_for_5_or_more_70000_and_up = 3095.00;
let income_at_least_list = [];
let income_less_than_list = [];
let credit_amount_single_0_children_list = [];
let credit_amount_single_1_children_list = [];
let credit_amount_single_2_children_list = [];
let credit_amount_single_3_children_list = [];
let credit_amount_married_filing_jointly_0_children_list = [];
let credit_amount_married_filing_jointly_1_children_list = [];
let credit_amount_married_filing_jointly_2_children_list = [];
let credit_amount_married_filing_jointly_3_children_list = [];

// ashton vars
let federal_payroll_tax_multiplier = 0.0765;
let qualifying_child_care_expense_zero = 0;
let qualifying_child_care_expsnse_one = 3000;
let qualifying_child_care_expense_2ormore = 6000;
let utah_taxes_owed_less_than_zero = 0;


// Out of Pocket marketplace costs
let marketplace_oop_infant = 46.74;
let marketplace_oop_preschooler = 46.74;
let marketplace_oop_schoolager = 139.86;
let marketplace_oop_teenager = 139.86;
let marketplace_oop_adult = 161.43;

let employer_oop_infant = 31.16;
let employer_oop_preschooler = 31.16;
let employer_oop_schoolager = 93.24;
let employer_oop_teenager = 93.24;
let employer_oop_adult = 107.62;


// Marketplace health insurance costs
let adult_marketplace_cost = 2536;
let child_marketplace_cost = 2536;

// User input variables

let number_of_adults = null;
let number_of_infants = null;
let number_of_preschoolers = null;
let number_of_schoolagers = null;
let number_of_teenagers = null;
let estimated_babysitting_cost = null;
let childcare_needed_bool = true;
let use_family_care_bool = false;
let number_of_bedrooms = null;
let use_marketplace_health_insurance_bool = false;
let number_of_cars = -1;
let number_of_public_transport_passes_adult = null;
let number_of_public_transport_passes_child = null;

// Taxes!O9
let eitc_2 = function () {
    let credit_amount_list = [];
    if (numberOfChildren() == 1) {
        credit_amount_list = credit_amount_married_filing_jointly_1_children_list;
    } else
    if (numberOfChildren() == 2) {
        credit_amount_list = credit_amount_married_filing_jointly_2_children_list;
    } else
    if (numberOfChildren() == 0) {
        credit_amount_list = credit_amount_married_filing_jointly_0_children_list;
    } else
    if (numberOfChildren() >= 3) {
        credit_amount_list = credit_amount_married_filing_jointly_3_children_list;
    }
    else {
        credit_amount_list = false;
    }

    let income_at_least = 0;
    let income_less_than = 0;
    let i = 0;
    while (i < income_at_least_list.length-1) {
        if (gross_income > income_at_least_list[i]) {
            income_at_least_index = i;
            break;
        }
        i++;
    }
    // TODO: The rest of eitc_2
    // if (gross_income > 0) {
    //     if (gross_income )
    // }

};
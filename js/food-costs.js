/**
 * Created by bpalm_000 on 2/22/2017.
 */
let foodFamilyType = function() {
    let multiplier = 0;

    if (numAdults() == 1 && numChildren() == 0){
        multiplier = 1.20;
    }
    else if (numAdults() == 1 && numChildren() == 1){
        multiplier = 1.10;
    }
    else if (numAdults() == 1 && numChildren() == 2){
        multiplier = 1.05;
    }
    else if (numAdults() == 1 && numChildren() == 3) {
        multiplier = 1.0;
    }
    else if (numAdults() == 1 && (numChildren() == 4 || numChildren() >= 5)){
        multiplier = 0.95;
    }
    else if (numAdults() == 2 && numChildren() == 0){
        multiplier = 1.10;
    }
    else if (numAdults() == 2 && numChildren() == 1){
        multiplier = 1.05;
    }
    else if (numAdults() == 2 && numChildren() == 2){
        multiplier = 1.0;
    }
    else if (numAdults() == 2 && numChildren() == 3 || numChildren() == 4) {
        multiplier = 0.95;
    }
    else if (numAdults() == 2 && (numChildren() >= 5)){
        multiplier = 0.90;
    }
    else {
        return 0;
    }

    return multiplier * (   numAdults() * low_cost_food_plan_price_per_mo_weber_county_adult +
            numInfants() * low_cost_food_plan_price_per_mo_weber_county_infant +
            numPreschoolers() * low_cost_food_plan_price_per_mo_weber_county_preschooler +
            numSchoolagers() * low_cost_food_plan_price_per_mo_weber_county_schoolager +
            numTeenagers() * low_cost_food_plan_price_per_mo_weber_county_teenager
        );
};

let annualFoodCostFamilyType = function() {
    return foodFamilyType() * 12;
};
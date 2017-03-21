/**
 * Created by adsal on 2/27/2017.
 */
// User input variables

let number_of_adults = null;
let number_of_infants = null;
let number_of_preschoolers = null;
let number_of_schoolagers = null;
let number_of_teenagers = null;
let estimated_babysitting_cost = null;
let childcare_needed_bool = true;
let use_family_care_bool = false;
let number_of_bedrooms = -1;
let use_marketplace_health_insurance_bool = false;
let number_of_cars = -1;
let number_of_public_transport_passes_adult = 0;
let number_of_public_transport_passes_child = 0;

function get_user_inputs_from_local_storage(){
    if (localStorage.getItem("number_of_adults")){
        number_of_adults = parseInt(localStorage.getItem("number_of_adults"));
        number_of_infants = parseInt(localStorage.getItem("number_of_infants"));
        number_of_preschoolers = parseInt(localStorage.getItem("number_of_preschoolers"));
        number_of_schoolagers = parseInt(localStorage.getItem("number_of_schoolagers"));
        number_of_teenagers = parseInt(localStorage.getItem("number_of_teenagers"));
        estimated_babysitting_cost = parseFloat(localStorage.getItem("estimated_babysitting_cost"));
        childcare_needed_bool = localStorage.getItem("childcare_needed_bool");
        use_family_care_bool = localStorage.getItem("use_family_care_bool");
        number_of_bedrooms = localStorage.getItem("number_of_bedrooms");
        if (number_of_bedrooms == -1){
            let children = numChildren();
            let adults = numAdults();
            number_of_bedrooms = Math.ceil(adults / 2) + Math.ceil(children / 2);
        }
        use_marketplace_health_insurance_bool = localStorage.getItem("use_marketplace_health_insurance_bool");
        number_of_cars = localStorage.getItem("number_of_cars");
        number_of_public_transport_passes_adult = localStorage.getItem("number_of_public_transport_passes_adult");
        number_of_public_transport_passes_child = localStorage.getItem("number_of_public_transport_passes_child");
    }
    else{
        console.log("Form not filled out. Please return to the form page to fill it out.")
    }
}
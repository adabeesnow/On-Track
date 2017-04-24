// Family Composition --------------------------------------------------------------------------------------------------
// Total of these cannot be > 8.
let num_adults        = 0; // 'Family Composition'!G4
let num_infants       = 0; // 'Family Composition'!G7
let num_preschoolers  = 0; // 'Family Composition'!G10
let num_schoolagers   = 0; // 'Family Composition'!G13
let num_teenagers     = 0; // 'Family Composition'!G16

// ChangeChildcare  ----------------------------------------------------------------------------------------------------
let estimated_baby_sitting_annual   = 0;    // 'ChangeChildcare'!E13
let use_childcare                   = "No"; // 'ChangeChildcare'!F17 - "No"/"Yes"
let use_family_care                 = "No"; // 'ChangeChildcare'!I13 - "No"/"Yes"

// ChangeHousing  ------------------------------------------------------------------------------------------------------
let rooms = "Standard"; // 'ChangeHousing'!E15 - "Standard"/1/2/3/4

// MarketplaceHealthcare -----------------------------------------------------------------------------------------------
let marketplace_healthcare = "No";  // 'MarketplaceHealthcare'!F16 - "No"/"Yes"

// Number of Cars ------------------------------------------------------------------------------------------------------
let cars = "Standard";  // 'Number of Cars'H13 - "Standard"/0/1/2/3/4/5/6

// PublicTransportation ------------------------------------------------------------------------------------------------
let bus_passes_adult = 0;   // 'PublicTransportation'!G16 - 0/1/2/3/4/5
let bus_passes_child = 0;   // 'PublicTransportation'!K16 - 0/1/2/3/4/5/6/7/8

function get_user_inputs_from_local_storage(){
    if (localStorage.getItem("num_adults")){
        num_adults = parseInt(localStorage.getItem("num_adults"));
        num_infants = parseInt(localStorage.getItem("num_infants"));
        num_preschoolers = parseInt(localStorage.getItem("num_preschoolers"));
        num_schoolagers = parseInt(localStorage.getItem("num_schoolagers"));
        num_teenagers = parseInt(localStorage.getItem("num_teenagers"));
        estimated_baby_sitting_annual = parseFloat(localStorage.getItem("estimated_baby_sitting_annual"));
        use_childcare = localStorage.getItem("use_childcare");
        use_family_care = localStorage.getItem("use_family_care");
        rooms = localStorage.getItem("rooms");
        if (rooms === "Standard"){
            let children = numKids();
            let adults = numAdults();
            rooms = Math.ceil(adults / 2) + Math.ceil(children / 2);
        }
        marketplace_healthcare = localStorage.getItem("marketplace_healthcare");
        cars = localStorage.getItem("cars");
        bus_passes_adult = localStorage.getItem("bus_passes_adult");
        bus_passes_child = localStorage.getItem("bus_passes_child");
    }
    else{
        console.log("Form not filled out. Please return to the form page to fill it out.")
    }
}
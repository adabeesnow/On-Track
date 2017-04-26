let wizard;
let qs;

$(document).ready(function () {

    let multiphase = $("#wizard");
    wizard = multiphase.steps({
        bodyTag: "fieldset",
        actionContainerTag: "button",
        transitionEffect: "slideLeft",
        onStepChanging: function (e, currentIndex, newIndex) {
            console.log("Indices", currentIndex, newIndex);
            if (currentIndex == 0) {
                let adults = parseInt($("#number-of-adults").val());
                let infants = parseInt($("#number-of-infants").val());
                let preschoolers = parseInt($("#number-of-preschoolers").val());
                let schoolagers = parseInt($("#number-of-schoolagers").val());
                let teenagers = parseInt($("#number-of-teenagers").val());
                if ((adults + infants + preschoolers + schoolagers + teenagers) > 8) {
                    alert("This form is only accurate for families of up to 8 members.");
                    return false;
                }
            }
            return true;
        }
    });

    let fv = multiphase.validate({
        rules: {},
        messages: {},
        errorLabelContainer: "#error-messages",
        errorElement: "div",
        errorClass: "alert alert-danger"

    });
    console.log(fv);

    const ACTIVE_COLOR = '#64BA89';
    let active_images;

    qs = (function (a) {
        if (a == "") return {};
        let b = {};
        for (let i = 0; i < a.length; ++i) {
            let p = a[i].split('=', 2);
            if (p.length == 1)
                b[p[0]] = "";
            else
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'));


    if (qs['page']) {
        wizard.steps("setStep", parseInt(qs['page']));
    }


    if (localStorage.getItem('num_adults')) {
        $("#page-one-next").removeClass("hidden");
    }


    fill_inputs();
});

const getParams = query => {
    if (!query) {
        return {};
    }

    return (/^[?#]/.test(query) ? query.slice(1) : query)
        .split('&')
        .reduce((params, param) => {
            let [key, value] = param.split('=');
            params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
            return params;
        }, {});
};

console.log("form.js loaded.");

let adults;
let infants;
let preschoolers;
let schoolagers;
let teenagers;

function verifyInputs(){
    if ($("#number-of-adults").val() == "") {
        adults = 1;
    } else {
        adults = parseInt($("#number-of-adults").val());
    }
    if ($("#number-of-infants").val() == "") {
        infants = 0;
    } else {
        infants = parseInt($("#number-of-infants").val());
    }
    if ($("#number-of-preschoolers").val() == "") {
        preschoolers = 0;
    } else {
        preschoolers = parseInt($("#number-of-preschoolers").val());
    }
    if ($("#number-of-schoolagers").val() == "") {
        schoolagers = 0;
    } else {
        schoolagers = parseInt($("#number-of-schoolagers").val());
    }
    if ($("#number-of-teenagers").val() == "") {
        teenagers = 0;
    } else {
        teenagers = parseInt($("#number-of-teenagers").val());
    }
    // let adults = parseInt($("#number-of-adults").val());
    // let infants = parseInt($("#number-of-infants").val());
    // let preschoolers = parseInt($("#number-of-preschoolers").val());
    // let schoolagers = parseInt($("#number-of-schoolagers").val());
    // let teenagers = parseInt($("#number-of-teenagers").val());

    localStorage.num_adults = adults;
    localStorage.num_infants = infants;
    localStorage.num_preschoolers = preschoolers;
    localStorage.num_schoolagers = schoolagers;
    localStorage.num_teenagers = teenagers;

    // standard = 1 car per adult
    localStorage.cars = localStorage.num_adults;

    // standard = 1 room for all adults, and 1 room per 2 kids
    let num_kids = parseInt(localStorage.num_infants)
        + parseInt(localStorage.num_preschoolers)
        + parseInt(localStorage.num_schoolagers)
        + parseInt(localStorage.num_teenagers);
    console.log("num kidsSSSSS", num_kids);
    let num_kid_rooms;
    // up to 2 kids per room
    if (num_kids <= 6) { // excel app only takes up to 8 family members
        num_kid_rooms = Math.ceil(num_kids / 2);
    } else {
        num_kid_rooms = 3
    } // excel app only goes up to 4 rooms
    console.log("num kid rooms", num_kid_rooms);
    // adult bedrooms is always 1 in the excel app
    localStorage.rooms = (1 + num_kid_rooms);
    localStorage.estimated_baby_sitting_annual = estimated_baby_sitting_annual;
    if (infants + preschoolers + schoolagers + teenagers > 0) {
        localStorage.use_childcare = "Yes";
    } else {
        localStorage.use_childcare = "No";
    }

    localStorage.use_family_care = use_family_care;
    localStorage.marketplace_healthcare = marketplace_healthcare;
    localStorage.bus_passes_adult = bus_passes_adult;
    localStorage.bus_passes_child = bus_passes_child;

}
function verifyInputsAndStepNext() {
    if ((adults + infants + preschoolers + schoolagers + teenagers ) > 8) {
        alert("This form is only accurate for families of up to 8 members.");
        return false;
    }
    else {
        wizard.steps('next');
    }

}

function calculate_input_data() {
    let adults;
    let infants;
    let preschoolers;
    let schoolagers;
    let teenagers;
    if ($("#number-of-adults").val() == "") {
        adults = 1;
    } else {
        adults = parseInt($("#number-of-adults").val());
    }
    if ($("#number-of-infants").val() == "") {
        infants = 0;
    } else {
        infants = parseInt($("#number-of-infants").val());
    }
    if ($("#number-of-preschoolers").val() == "") {
        preschoolers = 0;
    } else {
        preschoolers = parseInt($("#number-of-preschoolers").val());
    }
    if ($("#number-of-schoolagers").val() == "") {
        schoolagers = 0;
    } else {
        schoolagers = parseInt($("#number-of-schoolagers").val());
    }
    if ($("#number-of-teenagers").val() == "") {
        teenagers = 0;
    } else {
        teenagers = parseInt($("#number-of-teenagers").val());
    }
    // let adults = parseInt($("#number-of-adults").val());
    // let infants = parseInt($("#number-of-infants").val());
    // let preschoolers = parseInt($("#number-of-preschoolers").val());
    // let schoolagers = parseInt($("#number-of-schoolagers").val());
    // let teenagers = parseInt($("#number-of-teenagers").val());

    localStorage.num_adults = adults;
    localStorage.num_infants = infants;
    localStorage.num_preschoolers = preschoolers;
    localStorage.num_schoolagers = schoolagers;
    localStorage.num_teenagers = teenagers;

    // standard = 1 car per adult
    localStorage.cars = localStorage.num_adults;

    // standard = 1 room for all adults, and 1 room per 2 kids
    let num_kids = parseInt(localStorage.num_infants)
        + parseInt(localStorage.num_preschoolers)
        + parseInt(localStorage.num_schoolagers)
        + parseInt(localStorage.num_teenagers);
    console.log("num kidsSSSSS", num_kids);
    let num_kid_rooms;
    // up to 2 kids per room
    if (num_kids <= 6) { // excel app only takes up to 8 family members
        num_kid_rooms = Math.ceil(num_kids / 2);
    } else {
        num_kid_rooms = 3
    } // excel app only goes up to 4 rooms
    console.log("num kid rooms", num_kid_rooms);
    // adult bedrooms is always 1 in the excel app
    localStorage.rooms = (1 + num_kid_rooms);
    localStorage.estimated_baby_sitting_annual = estimated_baby_sitting_annual;
    if (infants + preschoolers + schoolagers + teenagers > 0) {
        localStorage.use_childcare = "Yes";
    } else {
        localStorage.use_childcare = "No";
    }

    localStorage.use_family_care = use_family_care;
    localStorage.marketplace_healthcare = marketplace_healthcare;
    localStorage.bus_passes_adult = bus_passes_adult;
    localStorage.bus_passes_child = bus_passes_child;
    if ((adults + infants + preschoolers + schoolagers + teenagers ) > 8) {
        alert("This form is only accurate for families of up to 8 members.");
        return false;
    } else {
        window.location.href = 'results.html';
    }
}

function store_input_data() {
    verifyInputs();
    window.location.href = 'results.html';
}

fill_inputs = function () {
    if (localStorage.getItem("num_adults")) {
        $("#number-of-adults").val(parseInt(localStorage.getItem("num_adults")));
        console.log("number of adults", localStorage.getItem("num_adults"));
    }
    if (localStorage.getItem("num_infants")) {
        $("#number-of-infants").val(parseInt(localStorage.getItem("num_infants")));
    }
    if (localStorage.getItem("num_preschoolers")) {
        $("#number-of-preschoolers").val(parseInt(localStorage.getItem("num_preschoolers")));
    }
    if (localStorage.getItem("num_schoolagers")) {
        $("#number-of-schoolagers").val(parseInt(localStorage.getItem("num_schoolagers")));
    }
    if (localStorage.getItem("num_teenagers")) {
        $("#number-of-teenagers").val(parseInt(localStorage.getItem("num_teenagers")));
    }
    if (localStorage.getItem("estimated_baby_sitting_annual")) {
        $("#babysitting-costs").val(localStorage.getItem("estimated_baby_sitting_annual"));
    }
    if (localStorage.getItem("use_childcare")) {
        $("#child-care-needed").val(localStorage.getItem("use_childcare"));
    }
    if (localStorage.getItem("use_family_care")) {
        $("#family-care").val(localStorage.getItem("use_family_care"));
    }
    if (localStorage.getItem("rooms")) {
        $("#number-of-rooms").val(parseInt(localStorage.getItem("rooms")));
        console.log("num rooms", localStorage.getItem("rooms"));
    }
    if (localStorage.getItem("marketplace_healthcare")) {
        $("#marketplace-healthcare").find("option[value='" + localStorage.getItem("marketplace_healthcare") + "']").attr("selected", true);
        // $("#marketplace-healthcare").val(localStorage.getItem("marketplace_healthcare"));
    }
    if (localStorage.getItem("cars")) {
        $("#cars").val(parseInt(localStorage.getItem("cars")));
    }
    if (localStorage.getItem("bus_passes_adult")) {
        $("#adult-passes").val(parseInt(localStorage.getItem("bus_passes_adult")));
    }
    if (localStorage.getItem("bus_passes_child")) {
        $("#child-passes").val(parseInt(localStorage.getItem("bus_passes_child")));
    }
};


// function _goToStep(wizard, options, state, index)
// {
//     return paginationClick(wizard, options, state, index);
// }
//
// $.fn.steps.setStep = function (step)
// {
//
//     var options = getOptions(this),
//         state = getState(this);
//
//     return _goToStep(this, options, state, step);
//
// };
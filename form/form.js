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
            if (currentIndex == 0){
                let adults = parseInt($("#number-of-adults").val());
                let infants = parseInt($("#number-of-infants").val());
                let preschoolers = parseInt($("#number-of-preschoolers").val());
                let schoolagers = parseInt($("#number-of-schoolagers").val());
                let teenagers = parseInt($("#number-of-teenagers").val());
                console.log(infants + preschoolers + schoolagers + teenagers);
                if (adults > 2 || infants + preschoolers + schoolagers + teenagers > 5){
                    alert("This form is only accurate for families of up to 2 adults and 5 children.");
                    return false;
                }
            }
            return true;
        }
    });

    let fv = multiphase.validate({
        rules: {

        },
        messages: {

        },
        errorLabelContainer: "#error-messages",
        errorElement: "div",
        errorClass: "alert alert-danger"

    });
    console.log(fv);

    const ACTIVE_COLOR = '#64BA89';
    let active_images;

    active_images = document.getElementsByClassName("active-img");
    for (let i = 0; i < active_images.length; i++) {
        active_images[i].addEventListener("load", function () {
            console.log("loaded");
            let svg = active_images[i].getSVGDocument();
            console.log(svg);
            let paths = svg.getElementsByTagName("path");
            console.log(paths);
            console.log(paths.length);
            for (let j = 0; j < paths.length; j++) {
                paths[j].setAttribute("fill", ACTIVE_COLOR);
            }
        });
    }

    qs = (function(a) {
        if (a == "") return {};
        let b = {};
        for (let i = 0; i < a.length; ++i)
        {
            let p=a[i].split('=', 2);
            if (p.length == 1)
                b[p[0]] = "";
            else
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'));


    if(qs['page']){
        wizard.steps("setStep", parseInt(qs['page']));
    }




    fill_inputs();
});

const getParams = query => {
    if (!query) {
        return { };
    }

    return (/^[?#]/.test(query) ? query.slice(1) : query)
        .split('&')
        .reduce((params, param) => {
            let [ key, value ] = param.split('=');
            params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
            return params;
        }, { });
};

console.log("form.js loaded.");

function calculate_input_data(){
    localStorage.num_adults = $("#number-of-adults").val();
    localStorage.num_infants = $("#number-of-infants").val();
    localStorage.num_preschoolers = $("#number-of-preschoolers").val();
    localStorage.num_schoolagers = $("#number-of-schoolagers").val();
    localStorage.num_teenagers = $("#number-of-teenagers").val();

    // standard = 1 car per adult
    localStorage.cars = localStorage.num_adults;

    // standard = 1 room per adult, and 1 room per 2 kids
    let num_kids = localStorage.num_infants
        + localStorage.num_preschoolers
        + localStorage.num_schoolagers
        + localStorage.num_teenagers;
    let num_kid_rooms;
    // up to 2 kids per room
    if (num_kids <= 7) { // excel app only takes up to 8 family members
        num_kid_rooms = Math.ceil(num_kids / 2);
    } else {num_kid_rooms = 4} // excel app only goes up to 4 rooms
    // adult bedrooms is always 1 in the excel app
    localStorage.rooms = (1 + num_kid_rooms);
}

function store_input_data() {
    localStorage.num_adults = $("#number-of-adults").val();
    localStorage.num_infants = $("#number-of-infants").val();
    localStorage.num_preschoolers = $("#number-of-preschoolers").val();
    localStorage.num_schoolagers = $("#number-of-schoolagers").val();
    localStorage.num_teenagers = $("#number-of-teenagers").val();
    localStorage.estimated_baby_sitting_annual = (parseFloat($("#babysitting-costs").val()) * 12);
    localStorage.use_childcare = $("#child-care-needed").val();
    localStorage.use_family_care = $("#family-care").val();
    localStorage.rooms = $("#number-of-rooms").val();
    localStorage.marketplace_healthcare = $("#marketplace-healthcare").val();
    localStorage.cars = $("#cars").val();
    localStorage.bus_passes_adult = $("#adult-passes").val();
    localStorage.bus_passes_child = $("#child-passes").val();
    window.location.href = 'results.html';
}

fill_inputs = function(){
    if(localStorage.getItem("num_adults")){
        $("#number-of-adults").val(parseInt(localStorage.getItem("num_adults")));
    }
    if(localStorage.getItem("num_infants")){
        $("#number-of-infants").val(parseInt(localStorage.getItem("num_infants")));
    }
    if(localStorage.getItem("num_preschoolers")){
        $("#number-of-preschoolers").val(parseInt(localStorage.getItem("num_preschoolers")));
    }
    if(localStorage.getItem("num_schoolagers")){
        $("#number-of-schoolagers").val(parseInt(localStorage.getItem("num_schoolagers")));
    }
    if(localStorage.getItem("num_teenagers")){
        $("#number-of-teenagers").val(parseInt(localStorage.getItem("num_teenagers")));
    }
    if(localStorage.getItem("estimated_baby_sitting_annual")){
        $("#babysitting-costs").val(localStorage.getItem("estimated_baby_sitting_annual"));
    }
    if(localStorage.getItem("use_childcare")){
        $("#child-care-needed").val(localStorage.getItem("use_childcare"));
    }
    if(localStorage.getItem("use_family_care")){
        $("#family-care").val(localStorage.getItem("use_family_care"));
    }
    if(localStorage.getItem("rooms")){
        $("#number-of-rooms").val(parseInt(localStorage.getItem("rooms")));
    }
    if(localStorage.getItem("marketplace_healthcare")){
        $("#marketplace-healthcare").val(parseInt(localStorage.getItem("marketplace_healthcare")));
    }
    if(localStorage.getItem("cars")){
        $("#cars").val(parseInt(localStorage.getItem("cars")));
    }
    if(localStorage.getItem("bus_passes_adult")){
        $("#adult-passes").val(parseInt(localStorage.getItem("bus_passes_adult")));
    }
    if(localStorage.getItem("bus_passes_child")){
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
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
                    alert("This form is only accurate for families of up to 2 adults and 5 children.")
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

function store_input_data() {
    localStorage.number_of_adults = $("#number-of-adults").val();
    localStorage.number_of_infants = $("#number-of-infants").val();
    localStorage.number_of_preschoolers = $("#number-of-preschoolers").val();
    localStorage.number_of_schoolagers = $("#number-of-schoolagers").val();
    localStorage.number_of_teenagers = $("#number-of-teenagers").val();
    localStorage.estimated_babysitting_cost = parseFloat($("#babysitting-costs").val()) * 12;
    localStorage.childcare_needed_bool = $("#child-care-needed").val();
    localStorage.use_family_care_bool = $("#family-care").val();
    localStorage.number_of_bedrooms = $("#number-of-rooms").val();
    localStorage.use_marketplace_health_insurance_bool = $("#marketplace-healthcare").val();
    localStorage.number_of_cars = $("#cars").val();
    localStorage.number_of_public_transport_passes_adult = $("#adult-passes").val();
    localStorage.number_of_public_transport_passes_child = $("#child-passes").val();
    window.location.href = 'results.html';
}

fill_inputs = function(){
    if(localStorage.getItem("number_of_adults")){
        $("#number-of-adults").val(parseInt(localStorage.getItem("number_of_adults")));
    }
    if(localStorage.getItem("number_of_infants")){
        $("#number-of-infants").val(parseInt(localStorage.getItem("number_of_infants")));
    }
    if(localStorage.getItem("number_of_preschoolers")){
        $("#number-of-preschoolers").val(parseInt(localStorage.getItem("number_of_preschoolers")));
    }
    if(localStorage.getItem("number_of_schoolagers")){
        $("#number-of-schoolagers").val(parseInt(localStorage.getItem("number_of_schoolagers")));
    }
    if(localStorage.getItem("number_of_teenagers")){
        $("#number-of-teenagers").val(parseInt(localStorage.getItem("number_of_teenagers")));
    }
    if(localStorage.getItem("estimated_babysitting_cost")){
        $("#babysitting-costs").val(localStorage.getItem("estimated_babysitting_cost"));
    }
    if(localStorage.getItem("childcare_needed_bool")){
        $("#child-care-needed").val(parseInt(localStorage.getItem("childcare_needed_bool")));
    }
    if(localStorage.getItem("use_family_care_bool")){
        $("#family-care").val(parseInt(localStorage.getItem("use_family_care_bool")));
    }
    if(localStorage.getItem("number_of_bedrooms")){
        $("#number-of-rooms").val(parseInt(localStorage.getItem("number_of_bedrooms")));
    }
    if(localStorage.getItem("use_marketplace_health_insurance_bool")){
        $("#marketplace-healthcare").val(parseInt(localStorage.getItem("use_marketplace_health_insurance_bool")));
    }
    if(localStorage.getItem("number_of_cars")){
        $("#cars").val(parseInt(localStorage.getItem("number_of_cars")));
    }
    if(localStorage.getItem("number_of_public_transport_passes_adult")){
        $("#adult-passes").val(parseInt(localStorage.getItem("number_of_public_transport_passes_adult")));
    }
    if(localStorage.getItem("number_of_public_transport_passes_child")){
        $("#child-passes").val(parseInt(localStorage.getItem("number_of_public_transport_passes_child")));
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
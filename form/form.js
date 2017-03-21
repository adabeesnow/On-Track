let wizard;

$(document).ready(function () {
    wizard = $("#wizard").steps({
        bodyTag: "fieldset",
        actionContainerTag: "button",
        transitionEffect: "slideLeft",
        onStepChanging: function (e, currentIndex, newIndex) {
            return true;
        }
    });

    wizard.validate({
        // rules:{
        //     "number-of-adults":{
        //         required: true,
        //         min:1
        //     }
        // }

    });

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


    /*

     $(".page-title-img").ready(function(){
     paths = document.getElementsByClassName("page-title-img");
     console.log(paths);
     for (let i = 0; i < paths.length; i++){
     console.log(paths[i]);
     console.log(paths[i].getSVGDocument());
     let svg = paths[i].getSVGDocument();
     }
     });*/


});

function store_input_data() {
    localStorage.number_of_adults = $("#number-of-adults").val();
    localStorage.number_of_infants = $("#number-of-infants").val();
    localStorage.number_of_preschoolers = $("#number-of-preschoolers").val();
    localStorage.number_of_schoolagers = $("#number-of-schoolagers").val();
    localStorage.number_of_teenagers = $("#number-of-teenagers").val();
    localStorage.estimated_babysitting_cost = $("#babysitting-costs").val();
    localStorage.childcare_needed_bool = $("#child-care-needed").val();
    localStorage.use_family_care_bool = $("#family-care").val();
    localStorage.number_of_bedrooms = $("#number-of-rooms").val();
    localStorage.use_marketplace_health_insurance_bool = $("#marketplace-healthcare").val();
    localStorage.number_of_cars = $("#cars").val();
    localStorage.number_of_public_transport_passes_adult = $("#adult-passes").val();
    localStorage.number_of_public_transport_passes_child = $("#child-passes").val();
    window.location.href = 'result.html';
}

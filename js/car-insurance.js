let carInsurance6Mo = function() {
    return (numCars() === 1 ? car_insurance_avg_per_mo_single : car_insurance_avg_per_mo_married * 2);
    // TODO: Make this handle adult numbers other than 1 or 2.
};

let numberOfCars = function () {
    return numCars();
};
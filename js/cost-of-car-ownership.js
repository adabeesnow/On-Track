/**
 * Created by bpalm_000 on 2/22/2017.
 */
let taxOnCarPurchase = function() {
    return car_price * 0.071;
};

let carPaymentMonthly = function() {
    return car_monthly_payment / 2;
};

let taxOnCarPurchaseYearly = function() {
    return taxOnCarPurchase() / 6;
};

let carPaymentYearly = function() {
    return  carPaymentMonthly() * 12;
};

let gasYearly = function() {
    return car_gas_price * (car_miles / car_miles_per_gallon);
};

let totalCostPerCar = function() {
    return car_registration +
        car_emissions +
        car_maintenance +
        taxOnCarPurchase() +
        carPaymentYearly() +
        gasYearly();
};

let totalCostTwoCars = function() {
    return totalCostPerCar() * 2;
};




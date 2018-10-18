angular.module('angular1', [])
.controller('InvoiceController', function InvoiceController() {
    this.qty = 1;
    this.cost = 2;
    this.inCurr = 'MMK';
    this.currencies = ['USD', 'MMK', 'THB'];
    this.usdToForeignRates = {
        USD: 1,
        MMK: 1000,
        THB: 34
    };
    this.total = function total(outCurr) {
        return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
    };
    this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
        return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
    };
    this.pay = function pay() {
        window.alert('Thanks!');
    };
});
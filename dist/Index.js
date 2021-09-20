"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var UI = /** @class */ (function () {
    function UI() {
        // Add stock elements
        this.productCodeInput = document.querySelector('#productCode');
        this.itemReceivedInput = document.querySelector('#ItemsRecived');
        this.unitePriceInput = document.querySelector('#unitePrice');
        // remove stocks elements
        this.removeProductCodeInput = document.querySelector('#removeProductCode');
        this.emailInput = document.querySelector('#email');
        this.itemsBoughtInput = document.querySelector('#itemsBought');
        //stock levels
        this.Product_counter_1 = document.querySelector('#Product_counter_1');
        this.product1_Amount = document.querySelector('#product1_Amount');
        this.Product_counter_2 = document.querySelector('#Product_counter_2');
        this.product2_Amount = document.querySelector('#product2_Amount');
        this.Product_counter_3 = document.querySelector('#Product_counter_3');
        this.product3_Amount = document.querySelector('#product3_Amount');
        this.stockList = {
            email: null,
            items: []
        };
        this.stockID = 0;
    }
    UI.prototype.clearAddStock = function () {
        this.productCodeInput.value = '';
        this.itemReceivedInput.value = '';
        this.unitePriceInput.value = '';
    };
    UI.prototype.clearRemoveFields = function () {
        this.removeProductCodeInput.value = '';
        this.emailInput.value = '';
        this.itemsBoughtInput.value = '';
    };
    UI.prototype.submitStockForm = function () {
        var inputValue = this.productCodeInput.value;
        var itemReceived = parseInt(this.itemReceivedInput.value);
        var unitePrice = parseFloat(this.unitePriceInput.value);
        if (inputValue === '' || inputValue === '---Select---') {
            alert("Please Select product");
        }
        else if (itemReceived === 0 || unitePrice === 0) {
            alert("Please fill in the inputs");
        }
        else {
            var stockItems = {
                email: null,
                items: {
                    id: this.stockID,
                    productType: inputValue,
                    itemsReceived: itemReceived,
                    pricePerItem: unitePrice,
                    totalStockPrices: 0,
                    amountOfItems: 0
                }
            };
            this.stockID++;
            this.stockList.items.push(stockItems.items);
            this.stockLevelContent();
            console.log(stockItems);
        }
    };
    UI.prototype.removeStock = function () {
        var _this = this;
        var inputValue = this.removeProductCodeInput.value;
        var stockEmail = this.emailInput.value;
        var itemBought = parseInt(this.itemsBoughtInput.value);
        // variables 
        var average = 0;
        var average_2 = 0;
        var average_3 = 0;
        var amount = 0;
        var amount_2 = 0;
        var amount_3 = 0;
        var result;
        var result_2 = 0;
        var result_3 = 0;
        if (inputValue === '' || inputValue === '---Select---' || stockEmail === '' || itemBought === 0) {
            alert("Please select product type or fill in all required fields ");
        }
        else {
            var new_obj_1 = __assign(__assign({}, this.stockList), { email: stockEmail });
            // logic
            new_obj_1.items.map(function (item) {
                if (inputValue === "Product1") {
                    if (new_obj_1.email !== null || new_obj_1.email != stockEmail || itemBought > item.amountOfItems) {
                        average = item.totalStockPrices / item.amountOfItems;
                        amount = itemBought * average;
                        result = item.totalStockPrices - amount;
                        _this.product1_Amount.textContent = result.toFixed(2);
                        _this.Product_counter_1.textContent = item.amountOfItems - itemBought;
                    }
                    else {
                        alert('You have already bought once');
                    }
                }
                else if (inputValue === 'Product2') {
                    if (new_obj_1.email !== null || new_obj_1.email != stockEmail || itemBought > item.amountOfItems) {
                        // logic
                        average_2 = item.totalStockPrices / item.amountOfItems;
                        amount_2 = itemBought * average_2;
                        result_2 = item.totalStockPrices - amount_2;
                        _this.product2_Amount.textContent = (result_2).toFixed(2);
                        _this.Product_counter_2.textContent = item.amountOfItems - itemBought;
                    }
                    else {
                        alert('You have already bought once');
                    }
                }
                else {
                    if (new_obj_1.email !== null || new_obj_1.email != stockEmail || itemBought > item.amountOfItems) {
                        average_3 = item.totalStockPrices / item.amountOfItems;
                        amount_3 = itemBought * average_3;
                        result_3 = item.totalStockPrices - amount_3;
                        _this.product3_Amount.textContent = (result_3).toFixed(2);
                        _this.Product_counter_3.textContent = item.amountOfItems - itemBought;
                    }
                    else {
                        alert('You have already bought once');
                    }
                }
            });
        }
    };
    // display content Stock Level
    UI.prototype.stockLevelContent = function () {
        var _this = this;
        var productLen = 0;
        var productLen2 = 0;
        var productLen3 = 0;
        var sum;
        var sum_2;
        var sum_3;
        this.stockList.items.map(function (stock) {
            var totalStock = stock.pricePerItem * stock.itemsReceived;
            if (stock.productType === 'Product1') {
                stock.totalStockPrices = totalStock;
                sum += stock.totalStockPrices;
                productLen += stock.itemsReceived;
                _this.product1_Amount.textContent = (sum).toFixed(2);
                stock.amountOfItems = productLen;
                _this.Product_counter_1.textContent = stock.amountOfItems;
            }
            else if (stock.productType === 'Product2') {
                stock.totalStockPrices = totalStock;
                sum_2 += stock.totalStockPrices;
                productLen2 += stock.itemsReceived;
                _this.product2_Amount.textContent = (sum_2).toFixed(2);
                stock.amountOfItems = productLen = productLen2;
                _this.Product_counter_2.textContent = stock.amountOfItems;
            }
            else {
                stock.totalStockPrices = totalStock;
                sum_3 += stock.totalStockPrices;
                productLen3 += stock.itemsReceived;
                _this.product3_Amount.textContent = (sum_3).toFixed(2);
                stock.amountOfItems = productLen = productLen3;
                _this.Product_counter_3.textContent = stock.amountOfItems;
            }
        });
    };
    return UI;
}());
function eventListeners() {
    var addStockForm = document.querySelector('#addStockForm');
    var removeStockForm = document.querySelector('#removeStockForm');
    var ui = new UI();
    // add stock form
    addStockForm === null || addStockForm === void 0 ? void 0 : addStockForm.addEventListener('submit', function (event) {
        event.preventDefault();
        ui.submitStockForm();
        ui.clearAddStock();
    });
    // remove stock form
    removeStockForm === null || removeStockForm === void 0 ? void 0 : removeStockForm.addEventListener('submit', function (event) {
        event.preventDefault();
        ui.removeStock();
        ui.clearRemoveFields();
    });
}
document.addEventListener('DOMContentLoaded', function () {
    eventListeners();
});

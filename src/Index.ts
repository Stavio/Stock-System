class UI {
    productCodeInput: any;
    itemReceivedInput: any
    unitePriceInput: any


    removeProductCodeInput: any
    emailInput: any
    itemsBoughtInput: any


    Product_counter_1: any
    product1_Amount: any

    Product_counter_2: any
    product2_Amount: any

    Product_counter_3: any
    product3_Amount: any
    stockList: any

    stockID
    constructor() {
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
    clearAddStock() {
        this.productCodeInput.value = '';
        this.itemReceivedInput.value = '';
        this.unitePriceInput.value = ''

    }

    clearRemoveFields() {
        this.removeProductCodeInput.value = '';
        this.emailInput.value = '';
        this.itemsBoughtInput.value = ''
    }


    submitStockForm() {
        const inputValue = this.productCodeInput.value;
        const itemReceived = parseInt(this.itemReceivedInput.value);
        const unitePrice = parseFloat(this.unitePriceInput.value);

        if (inputValue === '' || inputValue === '---Select---') {
            alert("Please Select product")
        } else if (itemReceived === 0 || unitePrice === 0) {
            alert("Please fill in the inputs")
        } else {
            let stockItems = {
                email: null,
                items: {
                    id: this.stockID,
                    productType: inputValue,
                    itemsReceived: itemReceived,
                    pricePerItem: unitePrice,
                    totalStockPrices: 0,
                    amountOfItems: 0
                }

            }

            this.stockID++;
            this.stockList.items.push(stockItems.items);
            this.stockLevelContent();
            console.log(stockItems);

        }
    }

    removeStock() {
        const inputValue = this.removeProductCodeInput.value;
        const stockEmail = this.emailInput.value;
        const itemBought: number = parseInt(this.itemsBoughtInput.value);


        // variables 
        let average: number = 0;
        let average_2: number = 0;
        let average_3: number = 0;

        let amount: number = 0;
        let amount_2: number = 0;
        let amount_3: number = 0;


        let result: number;
        let result_2: number = 0;
        let result_3: number = 0;


        if (inputValue === '' || inputValue === '---Select---' || stockEmail === '' || itemBought === 0) {
            alert("Please select product type or fill in all required fields ");
        } else {
            let new_obj = { ...this.stockList, email: stockEmail };
            // logic


            new_obj.items.map((item: any) => {

                if (inputValue === "Product1") {
                    if (new_obj.email !== null || new_obj.email != stockEmail || itemBought > item.amountOfItems) {


                        average = item.totalStockPrices / item.amountOfItems;

                        amount = itemBought * average;
                        result = item.totalStockPrices - amount;

                        this.product1_Amount.textContent = result.toFixed(2);
                        this.Product_counter_1.textContent = item.amountOfItems - itemBought;


                    } else {
                        alert('You have already bought once');

                    }
                } else if (inputValue === 'Product2') {
                    if (new_obj.email !== null || new_obj.email != stockEmail || itemBought > item.amountOfItems) {

                        // logic
                        average_2 = item.totalStockPrices / item.amountOfItems;

                        amount_2 = itemBought * average_2;
                        result_2 = item.totalStockPrices - amount_2;
                        this.product2_Amount.textContent = (result_2).toFixed(2);
                        this.Product_counter_2.textContent = item.amountOfItems - itemBought;


                    } else {
                        alert('You have already bought once');

                    }
                } else {
                    if (new_obj.email !== null || new_obj.email != stockEmail || itemBought > item.amountOfItems) {

                        average_3 = item.totalStockPrices / item.amountOfItems;

                        amount_3 = itemBought * average_3;
                        result_3 = item.totalStockPrices - amount_3;
                        this.product3_Amount.textContent = (result_3).toFixed(2);
                        this.Product_counter_3.textContent = item.amountOfItems - itemBought;

                    } else {
                        alert('You have already bought once');

                    }
                }

            });


        }
    }


    // display content Stock Level
    stockLevelContent() {

        let productLen = 0;
        let productLen2 = 0;
        let productLen3 = 0;

        let sum: number;
        let sum_2: number
        let sum_3: number;

        this.stockList.items.map((stock: any) => {
            let totalStock = stock.pricePerItem * stock.itemsReceived;

            if (stock.productType === 'Product1') {
                stock.totalStockPrices = totalStock;
                sum += stock.totalStockPrices;
                productLen += stock.itemsReceived;
                this.product1_Amount.textContent = (sum).toFixed(2);
                stock.amountOfItems = productLen;
                this.Product_counter_1.textContent = stock.amountOfItems;

            } else if (stock.productType === 'Product2') {

                stock.totalStockPrices = totalStock;
                sum_2 += stock.totalStockPrices;
                productLen2 += stock.itemsReceived;
                this.product2_Amount.textContent = (sum_2).toFixed(2);
                stock.amountOfItems = productLen = productLen2;
                this.Product_counter_2.textContent = stock.amountOfItems;

            } else {

                stock.totalStockPrices = totalStock;
                sum_3 += stock.totalStockPrices;
                productLen3 += stock.itemsReceived;
                this.product3_Amount.textContent = (sum_3).toFixed(2);
                stock.amountOfItems = productLen = productLen3;
                this.Product_counter_3.textContent = stock.amountOfItems;
            }

        })

    }

}

function eventListeners() {
    const addStockForm = document.querySelector('#addStockForm');
    const removeStockForm = document.querySelector('#removeStockForm');


    const ui = new UI();

    // add stock form
    addStockForm?.addEventListener('submit', function (event) {
        event.preventDefault();

        ui.submitStockForm();
        ui.clearAddStock();
    })

    // remove stock form
    removeStockForm?.addEventListener('submit', function (event) {
        event.preventDefault();

        ui.removeStock();
        ui.clearRemoveFields();
    })

}

document.addEventListener('DOMContentLoaded', function () {
    eventListeners();
})
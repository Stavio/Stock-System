class UI {
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

        this.stockList = [];
        this.stockID = 0;


    }
    clearAddStock() {
        this.productCodeInput.value = '';
        this.itemReceivedInput.value = '';
        this.unitePriceInput.value = ''

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
                id: this.stockID,
                productType: inputValue,
                itemsReceived: itemReceived,
                pricePerItem: unitePrice,
                email: null,
                itemBought: 0,
                totalStockPrices: 0
            }

            this.stockID++;
            this.stockList.push(stockItems);
            this.stockLevelContent(stockItems);
        }
    }


    // display content Stock Level
    stockLevelContent() {

        let productLen = 0;
        let productLen2 = 0;
        let productLen3 = 0;

        let sum = 0;
        let sum_2 = 0;
        let sum_3 = 0;

        this.stockList.map((stock) => {
            let totalStock = stock.pricePerItem * stock.itemsReceived;

            if (stock.productType === 'Product1') {
                stock.totalStockPrices = totalStock;
                sum += stock.totalStockPrices;
                productLen += stock.itemsReceived;
                this.product1_Amount.textContent = parseFloat(sum).toFixed(2);
                this.Product_counter_1.textContent = productLen;

            } else if (stock.productType === 'Product2') {

                stock.totalStockPrices = totalStock;
                sum_2 += stock.totalStockPrices;
                productLen2 += stock.itemsReceived;
                this.product2_Amount.textContent = parseFloat(sum_2).toFixed(2);
                this.Product_counter_2.textContent = productLen2;

            } else {

                stock.totalStockPrices = totalStock;
                sum_3 += stock.totalStockPrices;
                productLen3 += stock.itemsReceived;
                this.product3_Amount.textContent = parseFloat(sum_3).toFixed(2);
                this.Product_counter_3.textContent = productLen3;
            }

        })

    }

}

function eventListeners() {
    const addStockForm = document.querySelector('#addStockForm');
    const removeStockForm = document.querySelector('#removeStockForm');


    const ui = new UI();

    // add stock form
    addStockForm.addEventListener('submit', function (event) {
        event.preventDefault();

        ui.submitStockForm();
        ui.clearAddStock();
    })

    // remove stock form
    removeStockForm.addEventListener('submit', function (event) {
        event.preventDefault();
    })




}

document.addEventListener('DOMContentLoaded', function () {
    eventListeners();
})

var product = [
    { id: 1, brand: "Hundai", model: "i20", fuel: "petrol", price: "5k" },
    { id: 2, brand: "Honda", model: "city", fuel: "petrol", price: "11k" },
    { id: 3, brand: "Tata", model: "altros", fuel: "petrol", price: "9k" },
    { id: 4, brand: "Susuki", model: "i20", fuel: "petrol", price: "8k" },
    { id: 5, brand: "BMW", model: "gt", fuel: "petrol", price: "5k" },
];
var cartItems = [];

var addButton = document.getElementById('btn'),
    Btn1 = document.getElementById('del'),
    Btn2 = document.getElementById('plus'),
    Btn3 = document.getElementById('minus');


function stage1() {
    var ans = parseInt(prompt(""));
    if (ans) {
        var result = product.find(function (item) {
            return item.id === ans;
        });
        result.qty = 1;
        cartItems.push(result);
        console.log(cartItems);
    }

}

function stage2() {
    var x = parseInt(prompt("inc"));

    cartItems.map((item) => {
        if (item.id == x) {
            item.qty += 1;
        }
    })
    console.log(cartItems);
}

function stage3() {
    var y = parseInt(prompt("dec"));

    cartItems.map((item) => {
        if (item.id == y) {
            item.qty -= 1;
            console.log(cartItems);
            cartItems.map((item) => {
                if (item.qty == 0) {
                    cartItems.splice(0);
                    console.log(cartItems);
                }
            })

        }
    })
}


addButton.addEventListener("click", stage1);
Btn2.addEventListener("click", stage2);
Btn3.addEventListener("click", stage3);





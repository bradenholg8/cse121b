let api = 'https://v6.exchangerate-api.com/v6/2ab8d01e3331bf16dc6c2135/latest/USD';
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});

fromDropDown.value = "USD";

let convertCurrency = (obj) => {
    const jsamount = document.querySelector("#amount").value;
    jsamount.textContent = obj.conversion_rates
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    if (jsamount.length != 0) {
        
    } else {
        alert("Please fill in the amount");
    }
    const somethingElse = obj.conversion_rates; 
    console.log(somethingElse)
    
};
fetch(api).then((response) => response.json()).then((jsobject) => {console.log(jsobject)});
document
    .querySelector("#convert-button")
    .addEventListener("load", convertCurrency);
{
    const formElement = document.querySelector(".js-form");
    const currencyElement = document.querySelector(".js-currency");
    const valueElement = document.querySelector(".js-value");
    const resultElement = document.querySelector(".js-result");

    const RateUSD = 0.229
    const RateEUR = 0.215
    const RateJPY = 30.433
    const RateGBP = 0.188

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const value = +valueElement.value;
        const currency = currencyElement.value;

        let result;

        switch (currency) {
            case "USD":
                result = value * RateUSD;
                break;

            case "EUR":
                result = value * RateEUR;
                break;

            case "JPY":
                result = value * RateJPY;
                break;

            case "GBP":
                result = value * RateGBP;
        }

        resultElement.innerText = `${result.toFixed(2)}`

    });
}
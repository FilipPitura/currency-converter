{
    const calculateResult = (currency, value) => {
        const RateUSD = 0.229
        const RateEUR = 0.215
        const RateJPY = 30.433
        const RateGBP = 0.188

        switch (currency) {
            case "USD":
                return value * RateUSD;

            case "EUR":
                return value * RateEUR;

            case "JPY":
                return value * RateJPY;

            case "GBP":
                return value * RateGBP;
        }
    };

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `<strong>${result.toFixed(2)}</strong> ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const valueElement = document.querySelector(".js-value");

        const value = +valueElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(currency, value);

        updateResultText(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
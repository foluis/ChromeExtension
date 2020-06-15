$(function () {

    $("#requestClientInfo").click(function () {
        let url = 'https://my-json-server.typicode.com/foluis/my-json-serve/clientCreditCard/5345346';
        //         // $('#requestClientInfo').attr('value', 'Si jala')
        alert("This button will send a notification to the customer. So he can open an app in his device (mobile, tablet or pc) and enter his credit card information");
    });

    $("#getClientInfo").click(function () {
        let params = {
            active: true,
            currentWindow: true
        }

        chrome.tabs.query(params, gotTabs);

        function gotTabs(tabs) {

            let message = {
                nameOnCard: "Luis Forero",
                cardNumber: "3141592653589793",
                cvs: "321",
                expirationMonth: "12",
                expirationYear: "24"
            };

            console.log(message);

            chrome.tabs.sendMessage(tabs[0].id, message);
        }
    });

});
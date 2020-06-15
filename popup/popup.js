$(function () {

    let url = 'https://my-json-server.typicode.com/foluis/my-json-serve/clientCreditCard/5345346';

    $("#requestClientInfo").click(function () {

        // $.get(url, function(data, status){
        //     console.log("\nStatus: " + status);
        //     console.log(data);
        //     //alert("Data: " + data + "\nStatus: " + status);
        //   });

        alert("This button will send a notification to the customer. So he can open an app in his device (mobile, tablet or pc) and enter his credit card information");
    });

    $("#getClientInfo").click(function () {

        // let message = {
        //     nameOnCard: "",
        //     cardNumber: "",
        //     cvs: "",
        //     expirationMonth: "",
        //     expirationYear: ""
        // };

        $.getJSON(url, function (result) {
            //console.log(result);

            // message.nameOnCard = "Luis Forero",
            // message.cardNumber = "3141592653589793",
            // message.cvs = "321",
            // message.expirationMont = "12",
            // message.expirationYear = "24"

            // message.nameOnCard = result.cardNumber;
            // message.cardNumber = result.cardNumber;
            // message.cvs = result.cvs;
            // message.expirationMont = result.expirationMont;
            // message.expirationYear = result.expirationYear;
        });

        //console.log(message);

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
            console.log("From Pop up");
            console.log(message);

            chrome.tabs.sendMessage(tabs[0].id, message);
        }
    });

});
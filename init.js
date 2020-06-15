console.log("Found page2 !");

chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) { 
    
    console.log(request);

    document.getElementById("nameOnCard").value = request.nameOnCard;
    
    let cardNumberInput = document.getElementById("cardNumber")
    cardNumberInput.type = 'password';
    cardNumberInput.value = request.cardNumber;

    let cvsInput = document.getElementById("cvs")
    cvsInput.type = 'password';
    cvsInput.value = request.cvs;

    document.getElementById("expirationMonth").value = request.expirationMonth;
    
    document.getElementById("expirationYear").value = request.expirationYear;
  }
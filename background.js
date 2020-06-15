console.log("Background runing yea!");

// Add a listener for the browser action
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log("Background heard button extencion clicked");
    var msg = {
        message: "user clicked!"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}
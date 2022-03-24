chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });
  
var clickHandler = function (e) {
    var trackingNumber = e.selectionText;
    var trackerURL = "https://applens.azurewebsites.net/sites/";
	 
    chrome.tabs.create({
        url: trackerURL + e.selectionText
    });
    
}
chrome.contextMenus.create({
    "title": "Applens '%s'",
    "id": "id",
    "contexts": ["selection"]
},
    function(){
    console.log(chrome.runtime.lastError);
});
chrome.contextMenus.onClicked.addListener(clickHandler)

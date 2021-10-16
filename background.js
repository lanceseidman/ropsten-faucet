var theURL = "https://faucet.ropsten.be/";
var onSite = false;

function changeIt() {
  const ips = document.querySelector('input' + '[type="text"]' + '[placeholder="Enter your testnet account address"]').value = 'WalletAddress';
  document.querySelector('button').innerHTML = 'WalletAddress';
  buttons = document.getElementsByTagName('button');
  document.getElementsByTagName('button')[0].click();

}
function goTimer() {
    const times = new Date();
    console.log(times.toLocaleTimeString());
    letsGo();
}
function checkOpen() {
  setTimeout(() => {
  chrome.tabs.query({active: true, lastFocusedWindow: true, currentWindow: true}, function(tabs) {
    let tab = tabs[0];
    let url = tabs[0].url;
   
    if(url == theURL) {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: changeIt
      });
    }
    
  }); }, 2000);
}
function letsGo (){
  chrome.tabs.query({active: true, lastFocusedWindow: true, currentWindow: true}, function(tabs) {
    let tab = tabs[0];
    let url = tabs[0].url;

    if(url != theURL) {
      chrome.tabs.create({ url: theURL });
      checkOpen();
    } else {

      checkOpen();
    }
    
  });
}
setInterval(goTimer,86400000);
letsGo();
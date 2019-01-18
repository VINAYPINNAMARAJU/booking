
function showLiesureTabs() {
  var creating = browser.tabs.create({
    url:"https://www.makemytrip.com/railways/"
  });
}
function showLearnTabs() {
  var creating = browser.tabs.create({
    url:"https://www.makemytrip.com/bus-tickets/"
  });
}
function showWorkTabs() {
    var creating = browser.tabs.create({
    url:"https://www.makemytrip.com/flights/"
  });
    var creating = browser.tabs.create({
    url:"https://www.goibibo.com/flights/"
  });
}
function showHappyTabs() {
  var creating = browser.tabs.create({
    url:"https://www.makemytrip.com/cabs/"
  });
}
function showSadTabs() {
  var creating = browser.tabs.create({
    url:"https://www.makemytrip.com/hotels/"
  });

  var creating = browser.tabs.create({
    url:"https://www.goibibo.com/hotels/"
  });
}
function showCustomisedTabs() {
  url:"f1.html"
}

browser.runtime.onMessage.addListener(function(receivedMessage){
  if(receivedMessage.action=="showLiesureTabs")
  showLiesureTabs();
  else if(receivedMessage.action=="showLearnTabs")
  showLearnTabs();
  else if(receivedMessage.action=="showWorkTabs")
  showWorkTabs();
  else if(receivedMessage.action=="showHappyTabs")
  showHappyTabs();
  else if(receivedMessage.action=="showSadTabs")
  showSadTabs();
});





document.getElementById('click').addEventListener('click', function(){
  const sending = browser.runtime.sendMessage({
    action: "showLiesureTabs",
  });
})
document.getElementById('click1').addEventListener('click', function(){
  const sending = browser.runtime.sendMessage({
    action: "showLearnTabs",
  });
})
document.getElementById('click2').addEventListener('click', function(){
  const sending = browser.runtime.sendMessage({
    action: "showWorkTabs",
  });
})
document.getElementById('click3').addEventListener('click', function(){
  const sending = browser.runtime.sendMessage({
    action: "showHappyTabs",
  });
});
document.getElementById('click4').addEventListener('click', function(){
  const sending = browser.runtime.sendMessage({
    action: "showSadTabs",
  });
});
document.getElementById('click5').addEventListener('click', function(){
  const sending = browser.runtime.sendMessage({
    action: "showCustomisedTabs",
  });
});


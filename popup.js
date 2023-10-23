document.addEventListener("DOMContentLoaded", function () {
  console.log("Popup script loaded");
  const clearLocalStorageButton = document.getElementById("clearLocalStorage");

  clearLocalStorageButton.addEventListener("click", function () {
    console.log("Button clicked");
    // Query for information about the currently active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: currentTab.id },
        function: () => {
          localStorage.clear();
          console.log("Local storage cleared. 1");
        },
      });
      console.log("Local storage cleared.");
    });
  });
});

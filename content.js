// Check if the URL matches the website you want to clear local storage for
if (window.location.href.startsWith("https://www.cyclingnews.com/")) {
  // Clear the local storage
  localStorage.clear();
  console.log("Local storage cleared.");
} else {
  console.log("This is not the target website.");
}

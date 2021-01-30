// Listen to button presses
function addClickHandlers() {
	document.getElementById("start").addEventListener("click", function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.executeScript(null, {file: "src/content/getList.js"});
		});
	});
}

document.addEventListener("DOMContentLoaded", function() {
	addClickHandlers();
});

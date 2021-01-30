    (function() {
		alert("Copied list to clipboard!")
		var texts = "";
		var i = 0;
		while(document.getElementById('brCollectedList').childNodes.item(i).textContent){
			var currentText = document.getElementById('brCollectedList').childNodes.item(i).textContent;
			texts = texts.concat(currentText + "\n");
			i++;
		}
		copyToClipboard(texts);
	})();

	function copyToClipboard(text) {
		var dummy = document.createElement("textarea");
		// to avoid breaking orgain page when copying more words
		// cant copy when adding below this code
		// dummy.style.display = 'none'
		document.body.appendChild(dummy);
		//Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
		dummy.textContent = text;
		dummy.select();
		document.execCommand("copy");
		document.body.removeChild(dummy);
	}
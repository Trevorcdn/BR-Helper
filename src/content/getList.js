    (function() {
		var texts = "";
		var mySet = new Set();//Make List Unique
		var aniList = [];//Add unique titles to sort
		var itr = 0;
		while(document.getElementById('brCollectedList').childNodes.item(i).textContent){
			var currentText = document.getElementById('brCollectedList').childNodes.item(i).textContent;
			if (!mySet.has(currentText)){
				mySet.add(currentText);
				aniList.push(currentText);
			}
			itr++;
		}

		aniList.sort();
		for (itr = 0; itr < aniList.length; itr++) {
			texts = texts.concat(aniList[i] + "\n");
		}

		copyToClipboard(texts);
		alert("Copied list to clipboard!")
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
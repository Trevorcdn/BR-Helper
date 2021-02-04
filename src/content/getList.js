    (function() {
		var mySet = new Set();//Make List Unique
		var aniList = [];//Add unique titles to sort
		var itr = 0;
		while (document.getElementById('brCollectedList').childNodes.item(itr).textContent){
			var currentAnime = document.getElementById('brCollectedList').childNodes.item(itr).textContent;
			//Each anime has a delimiter of 'x' before the title
			//Needs the regex to take only entries with the delimiter as there can be empty strings
			if (currentAnime.match(/^×/i) && !mySet.has(currentAnime)){
				mySet.add(currentAnime);
				aniList.push(currentAnime);
			}
			itr++;
		}
		aniList.sort();
		copyToClipboard(aniList.join("\n"));
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
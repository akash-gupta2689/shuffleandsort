window.onload = function(){
	document.getElementById("shuffle").onclick = shuffleList;
	document.getElementById("sort").onclick = sortList;
	var list = document.getElementById("shuffleAndSort");

	function shuffle(items) {
		var cachedList = items.slice(0), temp, i = cachedList.length, randomIndexex;
		while(--i) {
			randomIndex = Math.floor(i * Math.random());
			temp = cachedList[randomIndex];
			cachedList[randomIndex] = cachedList[i];
			cachedList[i] = temp;
		}
		return cachedList;
	}

	function shuffleList() {
		var liNodes = list.children, i = 0;
		liNodes = Array.prototype.slice.call(liNodes);
		liNodes = shuffle(liNodes);
		while(i < liNodes.length)
		{
			list.appendChild(liNodes[i]);
			++i;
		}
	}

	function sortList() {
	  var i, ifSwitchNode, liNode, switchTheList;
	  
	  ifSwitchNode = true;
	  while (ifSwitchNode) {
		ifSwitchNode = false;
		liNode = list.getElementsByTagName("li");
		for (i = 0; i < (liNode.length - 1); i++) {
		  switchTheList = false;
		  if (liNode[i].innerHTML.toLowerCase() > liNode[i + 1].innerHTML.toLowerCase()) {
			switchTheList = true;
			break;
		  }
		}
		if (switchTheList) {
		  liNode[i].parentNode.insertBefore(liNode[i + 1], liNode[i]);
		  ifSwitchNode = true;
		}
	  }
	}
} 
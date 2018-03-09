import createLandingpage from './onLoad'

//Look into being able to load content from a csv or a word file. It'd be great to basically have a modular
//website builder with standard pages that you could load copy into easily.
var blurb = "Welcome to Milliways, the Restaurant at the End of the Universe. Unwind, and take in the Gnib Gnab with a cocktail!";

function createTabs() {
	var tabs = document.getElementsByClassName('tab');
	for (var i = 0; i < tabs.length; i++) {
	var tab = tabs[i];
	tab.addEventListener("click", function(){changeTabs(this.id)}, false);
	tab.className = "tab btn btn-primary";
	}
	/*
	var contactButton = document.createElement("button");
	var menuButton = document.createElement("button");
	var homeButton = document.createElement("button");
	*/
}

window.onLoad = createLandingpage("Milliways", "banner.jpg", blurb);
createTabs();




function changeTabs(tab) {
	//Erase everything and then call the appropriate function.
	var content = document.getElementById("content");
	while (content.firstChild) {
    content.removeChild(content.firstChild);
}

//content.innerHTML = " ";
console.log("Tab changed to " + tab);

switch (tab) {
	case 'home':
	createLandingpage("Milliways", "banner.jpg", blurb);
default: console.log("Function not set up yet.");
	}
}




/*
function header() {
  var element = document.createElement('h1');
  element.innerHTML = title('Milliways');
  return element;
}

function banner() {
	var element = document.createElement('img');
	element.setAttribute("src","src/banner.jpg");
	return element;
}

function copy() {
	var
}


function testLog() {
	console.log("Getting started.");
}

testLog();

document.body.appendChild(header());
*/
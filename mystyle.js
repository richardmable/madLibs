window.onload = function() {
	//function to generate madlibs from user input
	document.getElementById("lib-button").onclick = function makeMadLib(){
		//storing user input as vars using .value to get the string
		var noun = document.getElementById("noun").value;
		var adjective = document.getElementById("adjective").value;
		var person = document.getElementById("person").value;
		//check if user inputted any text in all boxes, return error message if not
		if (noun == "" || adjective == "" || person == ""){
			alert("Hey, you have to enter some text!")
		//only allows program to add text if there is some input (at least one char per box) in the text box
		}else if (noun.length > 1 && adjective.length > 1 && person.length > 1){
		//creates a new p element in which to place the madlibs
		var madLibStory = document.createElement("p");
		//creates a text node with the story in it
		var node = document.createTextNode(person + " likes to eat " + noun + " " + "and some delcious yummy " + adjective + " " + noun + ".");
		//apend the text node to the new p element
		madLibStory.appendChild(node);
		//finds the existing element to put the madlibs in
		var element = document.getElementById("story");
		//append new element p to existing element
		element.appendChild(madLibStory);
	}
	};





};
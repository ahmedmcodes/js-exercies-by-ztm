var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul"); 
var li = document.querySelectorAll('li')

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	let button = document.createElement('button');
	button.append(document.createTextNode('x'));
	li.append(button);
	button.addEventListener('click', function(){
		li.remove();
	})
	li.addEventListener('click', function(){
		li.classList.toggle('done')
	})
}

console.log(button)


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


//toggle .done class using event listener
li.forEach( function(item){
	let button = document.createElement('button');
	button.append(document.createTextNode('x'));
	item.append(button);
	button.addEventListener('click', function(){
		item.remove();
	} )
	item.addEventListener('click', function(){
		item.classList.toggle('done')
	})

}
)

// 



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

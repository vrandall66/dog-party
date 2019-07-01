

var nameDogBtn = document.querySelector(".dog-name-button");
nameDogBtn.addEventListener("click",updateText);

function updateText(e) {
	e.preventDefault();
	var dogName = document.querySelector(".dog-name-input").value;
	var someDogsText = document.querySelector(".some-dogs");
	someDogsText.textContent = dogName;
}
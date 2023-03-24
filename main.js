// a function that saves the text of a field with the id of 'textArea' to local storage
function saveText() {
	localStorage.setItem('text', document.getElementById('textArea').value);
}

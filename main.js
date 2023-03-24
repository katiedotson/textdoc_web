// a function that saves the text of a field with the id of 'textArea' to local storage
function saveText() {
	localStorage.setItem('text', document.getElementById('textArea').value);
}

// a function that listens for cmd + s and calls saveText() without jquery
document.addEventListener(
	'keydown',
	function (e) {
		if (
			e.keyCode == 83 &&
			(navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)
		) {
			e.preventDefault();
			saveText();
		}
	},
	false
);

// a function that listens for the document to load and sets the text of the field with the id of 'textArea' to the text in local storage
document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('textArea').value = localStorage.getItem('text');
	document.getElementById('saveButton').addEventListener('click', saveText);
	window.addEventListener('beforeunload', function () {
		saveText();
	});
});

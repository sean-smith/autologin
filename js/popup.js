$(function() {

	get("username");
	get("password");
	
	$("#credentials").submit(function(event) {
		set(event.target.username.value, event.target.password.value);
		$('.success').show();
		return false;
	});

});

function set(username, password) {
	chrome.storage.sync.set({username: username}, function() {
		console.log("saved username");
	});
	chrome.storage.sync.set({password: password}, function() {
		console.log("saved password");
	});
}

function get(field) {
	chrome.storage.sync.get(field, function(obj) {
		$(`input[name='${field}']`).val(obj[field]);
	});
}
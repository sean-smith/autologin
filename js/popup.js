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

// Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-91482366-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
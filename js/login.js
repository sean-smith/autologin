
$(function() {
	// Login sequence
	loading();
	chrome.storage.sync.get("username", function(obj) {
		console.log(obj["username"]);
		$("#username").val(obj["username"]);
	});
	chrome.storage.sync.get("password", function(obj) {
		$("#password").focus();
		$("#password").val(obj["password"]);
		$('[name="pw"]').val(obj["password"]);
		$('[name="theform"]').submit();
	});
});

function loading() {
	$('[name="theform"]').hide();
	var path = chrome.extension.getURL('/img/loading.svg');
	$('[name="theform"]').after(`<h2>Logging you in...</h2><div style='margin: auto;'><img src='${path}'></img></div>`);
}
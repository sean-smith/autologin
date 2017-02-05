
$(function() {
	// Login sequence
	loading();
	$("#username").val("username");
	$("#password").focus();
	$("#password").val("password");
	$('[name="pw"]').val('password');
	$('[name="theform"]').submit();

});

function loading() {
	$('[name="theform"]').hide();
	var path = chrome.extension.getURL('/img/loading.svg');
	$('[name="theform"]').after(`<h2>Logging you in...</h2><div style='margin: auto;'><img src='${path}'></img></div>`);
}


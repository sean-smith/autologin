
$(function() {
    chrome.storage.sync.get(["username", "password"], function(credentials) {
        fill_and_submit(credentials["username"], credentials["password"]);
    });
});

function fill_and_submit(username, password) {
    if (window.location.hostname === "shib.bu.edu") {
        loading("form");
        $('#j_username').val(username);
        $('#j_password').val(password);
        $("button").click();
    }
    else if (window.location.hostname === "shib2.bu.edu") {
        loading("form");
        $('#j_username').val(username);
        $('#j_password').val(password);
        $(".input-submit").click();
    }
    else if (window.location.hostname === "weblogin.bu.edu") {
        loading('[name="theform"]');
        $("#username").val(username);
        $("#password").val(password);
        $('[name="pw"]').val(password);
        $('[name="theform"]').submit();
    }
}

function loading(selector) {
    $(selector).hide();
    var path = chrome.extension.getURL('/img/loading.svg');
    $(selector).after(`<h2>Logging you in...</h2><div style='margin: auto;'><img src='${path}'></img></div>`);
}

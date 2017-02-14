
$(function() {
    // Login sequence [shib.bu.edu, shib2.bu.edu]
    if (["shib.bu.edu", "shib2.bu.edu"].includes(window.location.hostname)) {
        loading("form");
        chrome.storage.sync.get("username", function(obj) {
            document.getElementById('j_username').value = obj["username"];
        });
        chrome.storage.sync.get("password", function(obj) {
            document.getElementById('j_password').value = obj["password"];
            if (window.location.hostname === "shib2.bu.edu") {
                $(".input-submit").click();
            } else {
                $("button").click();
            }
        });
        return;
    }
    // Login sequence [weblogin.bu.edu]
    loading('[name="theform"]');
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

function loading(selector) {
    $(selector).hide();
    var path = chrome.extension.getURL('/img/loading.svg');
    $(selector).after(`<h2>Logging you in...</h2><div style='margin: auto;'><img src='${path}'></img></div>`);
}

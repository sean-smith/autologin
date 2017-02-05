chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: ["https://weblogin.bu.edu/lib/scripts/BUweblogin.js"]
    },
    ["blocking"]
);
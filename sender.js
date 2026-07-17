document.querySelector('.send-button').closest('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Put your actual Telegram details here
    const BOT_TOKEN = 'YOUR_BOT_TOKEN';
    const CHAT_ID = 'YOUR_CHAT_ID';

    // 2. Grabs the values from your HTML inputs using their IDs
    const nickname = document.getElementById('nickname').value;
    const age = document.getElementById('age').value;

    // 3. Creates the message layout
    const text = `📩 New Entry\n👤 Nickname: ${nickname}\n🎂 Age: ${age}`;

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
        alert('Sent successfully!');
        this.reset(); // Clears the form fields after sending
    })
    .catch(err => {
        console.error(err);
        alert('Error sending message.');
    });
});

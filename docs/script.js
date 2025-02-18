document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;

    // Ganti dengan URL Web App Anda
    const url = 'https://script.google.com/macros/s/AKfycbwhuOD_LXa9Zjvp7CM58uuo1nDj-Xfo0lvwqvZtWEgZ9RlanvhiNd5c1mbUUxdSGWsJVw/exec';

    // Kirim data ke Google Sheets
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${encodeURIComponent(name)}&date=${encodeURIComponent(date)}`,
    })
    .then(response => response.json())
    .then(data => {
        alert(data.result);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
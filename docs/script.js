document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;

    // Kirim data ke server
    fetch('https://your-server-url.com/api/attendance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, date }),
    })
    .then(response => response.json())
    .then(data => {
        alert(`Absensi berhasil untuk ${name} pada tanggal ${date}`);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
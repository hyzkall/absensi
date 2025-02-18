document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;

    alert(`Absensi berhasil untuk ${name} pada tanggal ${date}`);
});
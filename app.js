function clock() {
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = 'AM';

    if (h === 0) {
        h = 12; // Mengubah 0 jam menjadi 12 AM
    } else if (h === 12) {
        am = 'PM'; // Tetap 12 PM
    } else if (h > 12) {
        h = h - 12;
        am = 'PM';
    }

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    
    hour.innerHTML = h;
    minute.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
}

let interval = setInterval(clock, 1000);

document.getElementById('card2').style.display = 'none';

function updateCountdown() {
    const currentDate = new Date();
    const targetDate = new Date('December 25, 2023');

    if (currentDate < targetDate) {
        const timeDiff = targetDate - currentDate;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `Contagem regressiva: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById('card2').style.display = 'block';
        document.querySelector('.collDown').style.display = 'none';
        document.getElementById('surprise').style.display = 'none';
        document.getElementById('countdown').innerHTML = '';
        document.getElementById('question').style.display = 'block';
        document.getElementById('yesBtn').style.display = 'inline-block';
        document.getElementById('noBtn').style.display = 'inline-block';
    }
}




setInterval(updateCountdown, 1000);

updateCountdown();
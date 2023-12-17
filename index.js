document.getElementById('card4').style.display = 'none';
document.getElementById('card3').style.display = 'none';
document.getElementById('card5').style.display = 'none';

var t = 0;
function updateCountdown() {
    const currentDate = new Date();
    const targetDate = new Date('December 25, 2023');

    if (currentDate < targetDate) {
        document.getElementById('card2').style.display = 'none';
        const timeDiff = targetDate - currentDate;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `Contagem regressiva: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        if (t = 0) {
            document.getElementById('card2').style.display = 'flex';
        }
        document.querySelector('.collDown').style.display = 'none';
        document.getElementById('surprise').style.display = 'none';
        document.getElementById('countdown').innerHTML = '';
        document.getElementById('question').style.display = 'block';
        document.getElementById('yesBtn').style.display = 'inline-block';
        document.getElementById('noBtn').style.display = 'inline-block';
        clearInterval(this)
    }
}

function next(page){
    var name = page
    if (name == '1') {
        t = 1
        document.getElementById('card3').style.display = 'block';
        document.getElementById('card2').style.display = 'none';
    } else {
        if (name == '2') {
            document.getElementById('card3').style.display = 'none';
            document.getElementById('card4').style.display = 'block';
        } else{
            if (name == '3') {
                document.getElementById('card4').style.display = 'none';
                document.getElementById('card5').style.display = 'block';
            }
        }
    }
}

function sim() {
    var novoTexto = document.getElementById('novoTexto').value;

      // Criar um objeto Blob (Binary Large Object) contendo o novo texto
    var blob = new Blob([novoTexto], { type: 'text/plain' });

      // Criar um objeto URL para o Blob
    var blobURL = window.URL.createObjectURL(blob);

      // Criar um link para fazer o download do Blob
    var link = document.createElement('a');
    link.href = blobURL;
    link.download = 'resultado.txt';

      // Clicar no link programaticamente para baixar o arquivo
    link.click();

      // Limpar o objeto URL
    window.URL.revokeObjectURL(blobURL);
}

/*setInterval( updateCountdown,
    function clear() {
            clearInterval(this) 
       return clear;
    }()
, 1000)*/

setInterval(updateCountdown, 1000);

updateCountdown();
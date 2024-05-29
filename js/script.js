let toastBox = document.getElementById('toastBox');

let sucessMsg = '<i class="fa-solid fa-circle-check"></i> Pedido foi enviado!';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Erro, Arrume o erro!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Input inválido, tente novamente!';

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('Erro')) {
        toast.classList.add('error');
    }
    if (msg.includes('Input')) {
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },5000);
}



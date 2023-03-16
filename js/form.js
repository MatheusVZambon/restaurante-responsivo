function submitForm(){
    var name = document.getElementById('bk-name').value;

    const labels = document.getElementsByClassName('bk-label');
    const inputs = document.getElementsByClassName('bk-input');
    const buttons = document.getElementsByClassName('bk-btn');

    let arrLabels = Array.from(labels);
    let arrInputs = Array.from(inputs);
    let arrButtons = Array.from(buttons);

    const formItens = arrLabels.concat(arrInputs, arrButtons);

    for (var i = 0; i < formItens.length; i++){
        formItens[i].className = 'bk-display-none';
    }

    document.getElementById('form-message').className = 'form-message-show';

    document.getElementById('form-message').innerHTML = 'Obrigado ' + name + ' , fique de olho no seu e-mail para confirmarmos a reserva!';
}

function submitCttForm(){
    var cName = document.getElementById('ct-name').value;

    const cInputs = document.getElementsByClassName('ct-input');
    const cButton = document.getElementById('ct-button');

    let arrcInputs = Array.from(cInputs);

    const cFormItens = arrcInputs.concat(cButton);

    for (var x = 0; x < cFormItens.length; x++){
        cFormItens[x].className = 'ctt-display-none';
    }

    document.getElementById('contact-message').className = 'contact-message-show';

    document.getElementById('contact-message').innerHTML = 'Obrigado ' + cName + ' , sua experiência será levada em consideração em todas as decisões que a Rede Spettacolo tomará no futuro próximo.'
}
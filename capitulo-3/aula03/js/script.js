window.addEventListener('load', start);

function start(){
    console.log("pagina carregada")
    
    var nameInput = document.querySelector('#nameInput');
    nameInput.addEventListener('keyup', contName)

    var form = document.querySelector('form');
    form.addEventListener('submit', preventSubmit)
}

function contName(event) {
    console.log(event)
    var count = event.target.value;
    var span = document.querySelector('#nameLength');
    span.textContent = count.length;
}

function preventSubmit(event){
    event.preventDefault();

    var nameInput = document.querySelector('#nameInput');
    alert(nameInput.value + 'Cadastrado com sucesso!');
}
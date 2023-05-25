var form = document.getElementById("Contact-form");

function handlesubmit(event) {
    event.preventDefault();

    var name = form.elements [ "Nome"].value;
    var Email = form.elements [ "Email"].value;
    var Mensagem = form.elements [ "Mensagem"].value;

    var resultado = "\nNome: " + name + "\nEmail: " + Email + "\nMensagem: " + Mensagem;
    alert(resultado);

}


 form.addEventListener("submit",handlesubmit);
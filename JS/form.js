function VerifyFormulary(){
    var inputValor = document.getElementById("field-text-email").value;
    if(isValidEmail(inputValor)){
        alert("Email válido!");
        return true;
    } else {
        alert("Por favor, insira um nome ou email válido.");
        return false;
    }
}

function isValidEmail(email){
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.text(email);
}
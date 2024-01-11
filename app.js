let login1 = "Lucas";
let login2 = "João";
let senha1 = "12defevereiro";
let senha2 = "12demarço";
let inserirLogin;
let inserirSenha;

while(inserirLogin != login1 || inserirLogin != login2){
    inserirLogin = prompt("Insira seu login:");
    if(inserirLogin == login1){
        alert(`Olá, ${login1}!`);
        break;
    }else if(inserirLogin == login2){
        alert(`Olá, ${login2}!`);
        break;
    }else{
        alert("Login não encontrado!");
    }
}

while(inserirSenha != senha1 || inserirSenha != senha2){
    inserirSenha = prompt("Agora digite sua senha:");
    if(inserirLogin == login1){
        if(inserirSenha == senha1){
            alert(`Seja bem vindo, ${login1}!`);
            break;
        }else{
            alert("Senha incorreta, tente novamente...");
        }
    }
    if(inserirLogin == login2){
        if(inserirSenha == senha2){
            alert(`Seja bem vindo, ${login2}!`);
            break;
        }else{
            alert("Senha incorreta, tente novamente...");
        }
    }
}
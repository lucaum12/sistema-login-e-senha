let login1 = "Lucas";
let login2 = "João";
let login3 = "Maria";
let senha1 = "12defevereiro";
let senha2 = "12demarço";
let senha3 = "14deabril";
let inserirLogin;
let inserirSenha;

while(inserirLogin != login1 || inserirLogin != login2 || inserirLogin != login3){
    inserirLogin = prompt("Insira seu login:");
    if(inserirLogin == login1){
        alert(`Olá, ${login1}!`);
        break;
    }else if(inserirLogin == login2){
        alert(`Olá, ${login2}!`);
        break;
    }else if(inserirLogin == login3){
        alert(`Olá, ${login3}!`);
        break;
    }else{
        alert("Usuário não encontrado, tente novamente!")
    }
}

while(inserirSenha != senha1 || inserirSenha != senha2 || inserirSenha != senha3){
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
    if(inserirLogin == login3){
        if(inserirSenha == senha3){
            alert(`Seja bem vinda, ${login3}!`)
            break;
        }else{
            alert("Senha incorreta, tente novamente...")
        }
    }
}
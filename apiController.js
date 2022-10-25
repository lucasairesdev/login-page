

function checkUserDB(email, senha){
    if(email != 'teste@gmail.com'){
        alert('Usuário não existe');
        return false;
    }
    if(senha != '123123'){
        alert('Senha incorreta')
        return false;
    }
    return true;
}


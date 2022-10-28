var tentativasLogin = 3;

function checkLogin(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(checkUserDB(email, senha) == true){
        document.location.href = 'indexJogoDaVelha.html';
    }else{
        tentativasLogin --;
        
    }
}

function loginButtonOnClick(){
    if(tentativasLogin > 0){
        checkLogin();
    }else{
        alert('Você excedeu o número de tentativas!')
    }
}


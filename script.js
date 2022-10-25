var tentativasLogin = 3;

function checkLogin(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(checkUserDB(email, senha) == true){
        document.location.href = 'loginVerificado.html';
    }else{
        tentativasLogin --;
        alert('Você tem mais ' + tentativasLogin + ' chances');
    }
}

function loginButtonOnClick(){
    if(tentativasLogin > 0){
        checkLogin();
    }else{
        alert('Você excedeu o número de tentativas!')
    }
}


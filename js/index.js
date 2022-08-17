document.getElementById('submit-btn').addEventListener('click',function(){

    const emailField = document.getElementById('user-info');
    const email = emailField.value;
    console.log(email);


    //passworld field area//

    const passworldField = document.getElementById('user-password');
    const password = passworldField.value;
    console.log(password);


    if(email === 'bank12@gmail.com' && password === '1245'){
        window.location.href = 'js/bank.html';
    }

    else{
        alert('please type your valid email or password')
    }
})
let bar=document.getElementById('bar');
let login=document.getElementById('login');
let signUp=document.getElementById('signUp');
let signUp2=document.getElementById('signUp2');
let login2=document.getElementById('login2');
let loginBox=document.getElementById('loginBox');
let signUpBox=document.getElementById('signUpBox');

signUp.addEventListener('click',()=>{
    bar.style.left='57%';
    loginBox.style.left='-60%';
    signUpBox.style.left='50%';
})

signUp2.addEventListener('click',()=>{
    bar.style.left='57%';
    loginBox.style.left='-60%';
    signUpBox.style.left='50%';
})

login.addEventListener('click',()=>{
    bar.style.left='8%';
    loginBox.style.left='50%';
    signUpBox.style.left='-60%';
})

login2.addEventListener('click',()=>{
    bar.style.left='8%';
    loginBox.style.left='50%';
    signUpBox.style.left='-60%';
})


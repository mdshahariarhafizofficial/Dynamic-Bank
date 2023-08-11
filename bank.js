const loginBtn = document.getElementById("login-btn")
loginBtn.addEventListener("click", function(){
    const loginContainer = document.getElementById('login-container');
    loginContainer.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

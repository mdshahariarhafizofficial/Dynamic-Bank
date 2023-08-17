const loginBtn = document.getElementById("login-btn")
loginBtn.addEventListener("click", function(){
    const loginContainer = document.getElementById('login-container');
    loginContainer.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})


// Deposit Section

const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-amount').value;
    const depositNumber = parseInt(depositAmount);


    const currentDeposit = document.getElementById('current-deposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber+currentDepositNumber;
    document.getElementById('current-deposit').innerText = totalDeposit;


    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber+depositNumber;
    document.getElementById('current-balance').innerText = totalBalance;


    document.getElementById('deposit-amount').value = "";

})


// /Withdraw Section


const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-amount').value;
    const withdrawNumber = parseFloat(withdrawAmount);


    const currentWithdraw = document.getElementById('current-withdraw').innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const totalWithdraw = withdrawNumber+currentWithdrawNumber;
    document.getElementById('current-withdraw').innerText = totalWithdraw;

    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber-withdrawNumber;
    document.getElementById('current-balance').innerText = totalBalance;

    document.getElementById('withdraw-amount').value = '';
})
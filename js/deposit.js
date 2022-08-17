document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositArea = document.getElementById('deposit-form');
    const NewdepositAmountString = depositArea.value;
    const NewdepositAmount = parseFloat(NewdepositAmountString);
    const depositTotal = document.getElementById('deposit-balance');
    const PreviousTotalAmountString = depositTotal.innerText;
    const PreviousTotalAmount = parseFloat(PreviousTotalAmountString);
    console.log(PreviousTotalAmount);

    const CurrentTotalBalance = PreviousTotalAmount + NewdepositAmount;
    depositTotal.innerText = CurrentTotalBalance;
    depositArea.value = '';


    const balanceTotalElements = document.getElementById('Balance-total'); 
    const PreviousBalanceTotalString = balanceTotalElements.innerText;
    const PreviousBalanceTotal = parseFloat(PreviousBalanceTotalString);
    
    const CurrentTotalAmmount = PreviousBalanceTotal + NewdepositAmount;
    balanceTotalElements.innerText = CurrentTotalAmmount;

    
})
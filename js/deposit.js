// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    const depositField =document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step-3: get the current deposit total
    // for non-input use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // Step-4 add numbers to total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // Set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5 get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-6 calculate current total blance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    // Clear the deposit field
    depositField.value= '';

})
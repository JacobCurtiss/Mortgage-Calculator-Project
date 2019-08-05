//Mortgage Calculator
/* Steps:
1. -> annual interest rate, /12, -> monthly interest rate

2. -> monthly interest rate, +1, -> monthly interest rate plus one

3. -> # of loan years, *12, -> # of loan months

4. -> monthly interest rate plus one, raise to negative pow of monthly payments, -> monthlyplusone^# of loan months

5. -> result of 4, subtract resule from 1, 1-result

6. -> monthly interest rate, divide by result of 5, monthlyrate/result of 5

7. ->6 result & borrowed amount, mult 6 result and borrowed amount, -> monthly payment
*/
(function () {
    //CALCULATOR MODEL FOR CALCULATIONS
    const annualInterest = document.getElementById("interestrateinput").value;

    const monthlyInterest = (annualInterest / 12);
    
    const monthlyInterestPlusOne = monthlyInterest + 1;
    
    const loanYears = document.getElementById("loanterminput").value;
    
    const loanMonths = (loanYears * 12);
    
    const monthlyNegativePow = Math.pow(monthlyInterestPlusOne*(loanMonths * (-1)));
    
    const monthlyNegPowFromOne = 1 - monthlyNegativePow;
    
    const monthlyInterestDiv = monthlyInterest / monthlyNegPowFromOne;
    
    const homeValue = document.getElementById("homevalueinput").value;

    const downPayment = document.getElementById("downpaymentinput").value;

    const borrowedAmount = homeValue - downPayment;
    
    const monthlyPayment = borrowedAmount * monthlyInterestDiv;
})();



(function () {
    //CALCULATOR VIEW FOR QUERY SELECTORS


})();



(function () {
    //CALCULATOR CONTROLLER TO COMBINE MODEL AND VIEW



})();






 




























































































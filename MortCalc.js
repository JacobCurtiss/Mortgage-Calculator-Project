//Mortgage Calculator
//FUNCTIONS

/* Steps:
1. -> annual interest rate, /12, -> monthly interest rate

2. -> monthly interest rate, +1, -> monthly interest rate plus one

3. -> # of loan years, *12, -> # of loan months

4. -> monthly interest rate plus one, raise to negative pow of monthly payments, -> monthlyplusone^# of loan months

5. -> result of 4, subtract resule from 1, 1-result

6. -> monthly interest rate, divide by result of 5, monthlyrate/result of 5

7. ->6 result & borrowed amount, mult 6 result and borrowed amount, -> monthly payment
*/

//VARIABLE DECLARATIONS

const homeValue = document.getElementById("homevalueinput").value;

const downPayment = document.getElementById("downpaymentinput").value;

const interestRate = document.getElementById("interestrateinput").value;

const loanLength = document.getElementById("loanlengthinput").value;

const loanStart = document.getElementById("loandateinput").value;

const monthlyHoa = document.getElementById("hoainput").value;

const monthlyInsurance = document.getElementById("insuranceinput").value;

const monthlyPropertyTax = document.getElementById("propertytaxinput").value;

const results = document.getElementById("results");

const resultsBtn = document.getElementById("calculatebutton");

const monthlyInterestRate = interestRate / 12;

const monthlyPlusOne = monthlyInterestRate + 1;

const loanLengthInMonths = loanLength * 12;

const negPowInterestRate = Math.pow(monthlyPlusOne, loanLengthInMonths);

const negPowSubtracted = 1 - negPowInterestRate;

const monthlyInterestDivided = monthlyInterestRate / negPowSubtracted;

const mortgageResult = (homeValue - downPayment) * monthlyInterestDivided;


//functionoutput
const mortgageResultOutput = function() {
 
    results.textContent = mortgageResult;
}

resultsBtn.addEventListener("onclick", mortgageResultOutput);





















































































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

const homeValue = parseInt(document.getElementById("homevalueinput").value);
console.log(homeValue);

const downPayment = parseInt(document.getElementById("downpaymentinput").value);
console.log(downPayment);

const interestRate = parseInt(document.getElementById("interestrateinput").value);
console.log(interestRate);

const loanLength = parseInt(document.getElementById("loanlengthinput").value);
console.log(loanLength);

const loanStart = parseInt(document.getElementById("loandateinput").value);
console.log(loanStart);

const monthlyHoa = parseInt(document.getElementById("hoainput").value);
console.log(monthlyHoa);

const monthlyInsurance = parseInt(document.getElementById("insuranceinput").value);
console.log(monthlyInsurance);

const monthlyPropertyTax = parseInt(document.getElementById("propertytaxinput").value);
console.log(monthlyPropertyTax);

const resultsBtn = document.getElementById("calculatebutton");

const monthlyInterestRateBeforeRound = (interestRate / 12)
console.log(monthlyInterestRateBeforeRound);

const monthlyInterestRate = Math.round(100 * monthlyInterestRateBeforeRound) / 100;
console.log(monthlyInterestRate);

const monthlyPlusOne = monthlyInterestRate + 1;
console.log(monthlyPlusOne);

const loanLengthInMonths = loanLength * 12;
console.log(loanLengthInMonths);

const negPowInterestRate = Math.pow(monthlyPlusOne, (-1 * loanLengthInMonths));
console.log(negPowInterestRate);

const negPowSubtracted = 1 - negPowInterestRate;
console.log(negPowSubtracted);

const monthlyInterestDivided = monthlyInterestRate / negPowSubtracted;
console.log(monthlyInterestDivided);

const mortgageResult = (homeValue - downPayment) * monthlyInterestDivided;
console.log(mortgageResult);

const output = document.getElementById("output")
//functionoutput
function mortgage() {
    
    output.firstChild.data = `Your monthly mortgage payment is ${mortgageResult}`;
    

}

resultsBtn.addEventListener("click", mortgage);





















































































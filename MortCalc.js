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
const resultsBtn = document.getElementById("calculatebutton");

function mortgage() {

    let homeValue = parseInt(document.getElementById("homevalueinput").value.split(",").join(""));

    let downPayment = parseInt(document.getElementById("downpaymentinput").value.split(",").join(""));

    let interestRate = parseInt(document.getElementById("interestrateinput").value.split(",").join(""));

    let loanLength = parseInt(document.getElementById("loanlengthinput").value.split(",").join(""));

    let loanStart = parseInt(document.getElementById("loandateinput").value.split(",").join(""));

    let yearlyHoa = parseInt(document.getElementById("hoainput").value.split(",").join(""));

    let yearlyInsurance = parseInt(document.getElementById("insuranceinput").value.split(",").join(""));

    let yearlyPropertyTax = parseInt(document.getElementById("propertytaxinput").value.split(",").join(""));

    const resultsBtn = document.getElementById("calculatebutton");

    const monthlyInterestRateBeforeRound = (interestRate / 12)

    const preDecimalMonthlyInterestRate = Math.round(100 * monthlyInterestRateBeforeRound) / 100;

    const monthlyInterestRate = preDecimalMonthlyInterestRate / 100;

    const monthlyPlusOne = monthlyInterestRate + 1;

    const loanLengthInMonths = loanLength * 12;

    const negPowInterestRate = Math.pow(monthlyPlusOne, (-1 * loanLengthInMonths));

    const negPowSubtracted = 1 - negPowInterestRate;

    const monthlyInterestDivided = monthlyInterestRate / negPowSubtracted;

    const mortgageResult = (homeValue - downPayment) * monthlyInterestDivided + (yearlyHoa / 12) + (yearlyInsurance / 12) + (yearlyPropertyTax / 12);

    const output = document.getElementById("output")
    if (isNaN(mortgageResult)) {
        return output.firstChild.data = "You have to enter values to receive a mortgage"
    } else return output.firstChild.data = `Your monthly mortgage payment is ${Math.round(mortgageResult)}`;
}

resultsBtn.addEventListener("click", mortgage);
















































































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

    let homeValue = document.getElementById("homevalueinput").value;

    let downPayment = document.getElementById("downpaymentinput").value;

    let interestRate = document.getElementById("interestrateinput").value;

    const loanLength = document.getElementById("loanlengthinput").value;

    const loanStart = document.getElementById("loandateinput").value;

    const monthlyHoa = document.getElementById("hoainput").value;

    const monthlyInsurance = document.getElementById("insuranceinput").value;

    const monthlyPropertyTax = document.getElementById("propertytaxinput").value;

    function replaceAndParseInt(string) {
        string = string.replace(",", "");
        parseInt(string);
    }

    replaceAndParseInt(homeValue);
    replaceAndParseInt(downPayment);
    replaceAndParseInt(interestRate);
    replaceAndParseInt(loanLength);
    replaceAndParseInt(loanStart);
    replaceAndParseInt(monthlyHoa);
    replaceAndParseInt(monthlyInsurance);
    replaceAndParseInt(monthlyPropertyTax);
    console.log(homeValue);

    const resultsBtn = document.getElementById("calculatebutton");

    const monthlyInterestRateBeforeRound = (interestRate / 12)

    const preDecimalMonthlyInterestRate = Math.round(100 * monthlyInterestRateBeforeRound) / 100;

    const monthlyInterestRate = preDecimalMonthlyInterestRate / 100;

    const monthlyPlusOne = monthlyInterestRate + 1;

    const loanLengthInMonths = loanLength * 12;

    const negPowInterestRate = Math.pow(monthlyPlusOne, (-1 * loanLengthInMonths));

    const negPowSubtracted = 1 - negPowInterestRate;

    const monthlyInterestDivided = monthlyInterestRate / negPowSubtracted;

    const mortgageResult = (homeValue - downPayment) * monthlyInterestDivided;
    console.log(mortgageResult);
    const output = document.getElementById("output")
    if (isNaN(mortgageResult)) {
        return output.firstChild.data = "You have to enter values to receive a mortgage"
    } else return output.firstChild.data = `Your monthly mortgage payment is ${Math.round(mortgageResult)}`;
}

resultsBtn.addEventListener("click", mortgage);





















































































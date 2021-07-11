// const loginButton = document.getElementById('login__button');

// loginButton.addEventListener('click', function () {
// 	const loginArea = document.getElementById('login__area');
// 	loginArea.style.display = 'none';
// 	const transactionArea = document.getElementById('transaction__area');
// 	transactionArea.style.display = 'block';
// });

// login validation
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	if (username == 'a' && password == 'a') {
		// alert('Login successfully');
		// window.location = 'transaction.html'; // Redirecting to other page.
		const loginArea = document.getElementById('login__area');
		loginArea.style.display = 'none';
		const transactionArea = document.getElementById('transaction__area');
		transactionArea.style.display = 'block';

		return false;
	} else {
		attempt--; // Decrementing by one.

		if (attempt >= 1) {
			alert('You have left ' + attempt + ' attempt;');
		}

		// Disabling fields after 3 attempts.
		if (attempt == 0) {
			alert('try again! username and password fields are disabled');
			document.getElementById('username').disabled = true;
			document.getElementById('password').disabled = true;
			document.getElementById('submit').disabled = true;

			return false;
		}
	}
}

const loginButton = document.getElementById('login__button');

loginButton.addEventListener('click', validate);

// Deposit section
const depositButton = document.getElementById('deposit__button');
depositButton.addEventListener('click', function () {
	const depositAmount = document.getElementById('deposit__amount').value;

	if (isNaN(depositAmount) || depositAmount.length == 0 || depositAmount < 0) {
		alert('Enter Valid Amount');
	} else {
		const depositAmountInNumber = parseFloat(depositAmount);

		updateSpanText('current__deposit', depositAmountInNumber);
		// Update in balance section
		updateSpanText('current__balance', depositAmountInNumber);

		document.getElementById('deposit__amount').value = '';
	}
});

function updateSpanText(id, depositNumber) {
	const current = document.getElementById(id).innerText;
	const currentInNumber = parseFloat(current);
	const totalamount = currentInNumber + depositNumber;

	document.getElementById(id).innerText = totalamount;
	return totalamount;
}

// withdraw section
const withdrawButton = document.getElementById('withdraw__button');
withdrawButton.addEventListener('click', function () {
	const givenWithdrawInNumber = getInputNumber('withdraw__amount');

	if (isNaN(givenWithdrawInNumber) || givenWithdrawInNumber.length == 0) {
		alert('Enter Valid Amount');
	} else {
		// update Balance section for withdraw
		let currentBalance = updateSpanText(
			'current__balance',
			-1 * givenWithdrawInNumber
		);

		if (currentBalance < 10) {
			alert(
				`You can't Withdraw money any more. your current balance is ` +
					currentBalance
			);
			document.getElementById('withdraw__amount').value = '';
			document.getElementById('withdraw__button').disabled = true;
			document.getElementById('withdraw__amount').disabled = true;

			return false;
		} else {
			updateSpanText('current__withdraw', givenWithdrawInNumber);
		}

		document.getElementById('withdraw__amount').value = '';
	}
});

// function for what user gives
function getInputNumber(id) {
	const amount = document.getElementById(id).value;
	const amountInNumber = parseFloat(amount);
	return amountInNumber;
}

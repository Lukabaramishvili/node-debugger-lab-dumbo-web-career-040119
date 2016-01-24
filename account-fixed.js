var customerAccount = {
  balance: 0,
  name: 'Azat Mardan',
  checking: '1'
}

function setAccountType () {
  if (customerAccount.checking == 1) {
    customerAccount.type = 'checking'
  } else {
    customerAccount.type = 'savings'
  }
}

var signupBonus = 250,
  deposit = 1000

var openAccount = function(account, deposit) {
  account.balance += signupBonus
  console.log('New balance after signup bonus is %s', account.balance)
  account.balance += deposit
}

console.log('Account before opening: ', customerAccount)

openAccount(customerAccount, deposit)
setAccountType()
console.log('Account after opening: ', customerAccount)

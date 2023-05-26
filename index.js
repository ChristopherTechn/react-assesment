


///Bank account and its properties.
class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
      this._accountNumber =accountNumber;
      this._accountHolder = accountHolder;
      this._balance = balance;
    }
  
    getAccountNumber() {
      return this._accountNumber;
    }
  
    getAccountHolder() {
      return this._accountHolder;
    }
  
    getBalance() {
      return this._balance;
    }
  
    deposit(amount) {
      this._balance += amount;
      console.log(`Deposited ${amount} into account ${this._accountNumber}`);
    }
  
    withdraw(amount) {
      if (amount <= this._balance) {
        this._balance -= amount;
        console.log(`Withdrew ${amount} from account ${this._accountNumber}`);
      } else {
        console.log(`Insufficient funds in account ${this._accountNumber}`);
      }
    }
  }
  
  //SavingsAccount and its properties.
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, interestRate) {
     
     //here this super keyword is the one used as an inheritance to show
     //that class SavingsAccount has inherited some properties of 
     //class BankAccount.
        super(accountNumber, accountHolder, balance);
      this._interestRate = interestRate;
    }
  //claculates the interest
    calculateInterest() {
      const interest = this._balance * this._interestRate;
      console.log(`Interest for account ${this._accountNumber}: ${interest}`);
      return interest;
    }
  }

  class CheckingAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, overdraftLimit) {
      super(accountNumber, accountHolder, balance);
      this._overdraftLimit = overdraftLimit;
    }
  
    withdraw(amount) {
      if (amount <= this._balance) {
        this._balance -= amount;
        console.log(`Withdrew ${amount} from account ${this._accountNumber}`);
      } else if (amount <= this._balance + this._overdraftLimit) {
        this._balance -= amount;
        console.log(`Withdrew ${amount} from account ${this._accountNumber} (including overdraft)`);
      } else {
        console.log(`Withdrawal amount exceeds overdraft limit for account ${this._accountNumber}`);
      }
    }
  }
  
  // Create instances of bank accounts
  const savingsAccount = new SavingsAccount('SA001', 'John Doe', 5000,);
  const checkingAccount = new CheckingAccount('CA001', 'Jane Smith', 2000, 1000);
  
  // Retrieve account information
    const SavingsAccount.accountNumber=(prompt("Enter your account number"))
  const SavingsAcccount.accountHolder=(prompt("Enter your account name"))
  const SavingsAcccount.balance=(prompt("Enter your account name"))

  console.log(savingsAccount.getAccountNumber()); // SA001
  console.log(savingsAccount.getAccountHolder()); // John Doe
  console.log(savingsAccount.getBalance()); // 5000
  
  console.log(checkingAccount.getAccountNumber()); // CA001
  console.log(checkingAccount.getAccountHolder()); // Jane Smith
  console.log(checkingAccount.getBalance()); // 2000
  
  // Deposit an amount
  savingsAccount.deposit(1000); // Deposited 1000 into account SA001
  checkingAccount.deposit(500); // Deposited 500 into account CA001
  
  // Withdraw an amount
  savingsAccount.withdraw(2000); // Withdrew 2000 from account SA001
  checkingAccount.withdraw(3000); // Withdrew 3000 from account CA001 (including overdraft)
  
  // Calculate and display interest amount for SavingsAccount
  savingsAccount.calculateInterest(); // Interest for account SA001: 250
  
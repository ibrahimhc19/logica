export class BankAccount {
  constructor() {
    this.accountOpened = false;
    this.accBalance = 0;
  }

  open() {
    if (this.accountOpened) {
      throw new ValueError();
    } else {
      this.accountOpened = true;
      this.accBalance = 0;
    };
  }

  close() {
    if (this.accountOpened) {
      this.accountOpened = false
    } else {
      throw new ValueError();
    };
  }

  deposit(ammount) {
    if (this.accountOpened && ammount > 0) {
      this.accBalance += ammount;
    } else {
      throw new ValueError();
    };
  }

  withdraw(ammount) {
    if (this.accountOpened && ammount > 0 && ammount <= this.accBalance) {
      this.accBalance -= ammount;
    } else {
      throw new ValueError();
    };
  }

  get balance() {
    if (this.accountOpened) {
    return this.accBalance;
    } else {
      throw new ValueError();
    }
  }

  // set balance(ammount){
  // this.balance += ammount
  // }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

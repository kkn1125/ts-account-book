import Account, { AccountType } from "./Account";
import Renderer from "./Renderer";

export default class AccountBook {
  name: string;
  list: Account[] = [];
  renderer: Renderer = new Renderer();

  constructor(name: string) {
    this.name = name;

    window.addEventListener("click", (e) => {
      const target = e.target as HTMLInputElement & HTMLButtonElement;
      if (!target) return;

      if (target.id === "insert") {
        console.log(1);
      }

      if (target.id === "fixed") {
        console.log(target.checked);
      }
    });
  }

  find(id: string) {
    return this.list.find((account) => account.id === id);
  }

  add(account: AccountType) {
    const newAccount = new Account(account);
    this.list.push(newAccount);
    return newAccount;
  }

  update(id: string, newAccount: AccountType) {
    const account = this.find(id);
    if (account) {
      Object.assign(account, newAccount);
    }
    return account;
  }

  delete(accountId: string) {
    const index = this.list.findIndex((account) => account.id === accountId);
    if (index > -1) {
      return this.list.splice(index, 1)[0];
    }
    return null;
  }

  render() {
    const contents = this.list.map((account) => {
      return `
				<div class="row">
					<span>${account.id}</span>
					<span>${account.category}</span>
					<span>${account.cost.toLocaleString("ko")}원</span>
					<span>${account.desc}</span>
				</div>
			`;
    });

    this.renderer.render(`
    <div class="wrapper">
      <div class="table">
        ${contents}
      </div>
      <form action="">
        <select class="input" name="currency">
          <option value="credit" selected>credit</option>
          <option value="cash">cash</option>
        </select>
        <input class="input" type="text" name="category" />
        <input class="input" type="text" name="cost" />
        <input class="input" type="text" name="from" />
        <input class="input" type="text" name="to" />
        <label class="fixed">
          <input type="checkbox" id="fixed" />
        </label>
        <button class="btn" id="insert">등록</button>
      </form>
    </div>
		`);
  }
}

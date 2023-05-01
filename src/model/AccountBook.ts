import Account, { AccountType } from "./Account";
import Renderer from "./Renderer";

export default class AccountBook {
  name: string;
  list: Account[] = [];
  renderer: Renderer = new Renderer();

  constructor(name: string) {
    this.name = name;
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
		<div class="table">
			${contents}
		</div>
		`);
  }
}

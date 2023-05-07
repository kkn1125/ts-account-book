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
    const contents = this.list.map((account, i) => {
      return `
				<div class="${["row", "body"]
          .concat(...(account.fixed ? ["fixed"] : []))
          .join(" ")}">
          <span class="cell">${i + 1}.</span>
					${"" && account.render("id")}
					${account.render("category")}
					${account.render("from")}
					${account.render("to")}
					${account.render("cost")}
					${account.render("currency")}
					${account.render("fixed")}
					${account.render("desc")}
					${account.render("createdAt")}
					${account.render("updatedAt")}
				</div>
			`;
    });

    this.renderer.render(`
		<div class="table">
      <div class="row head">
        <span class="cell">id</span>
        <span class="cell">category</span>
        <span class="cell">from</span>
        <span class="cell">to</span>
        <span class="cell">cost</span>
        <span class="cell">currency</span>
        <span class="cell">fixed</span>
        <span class="cell">desc</span>
        <span class="cell">createdAt</span>
        <span class="cell">updatedAt</span>
      </div>
			${contents.join("")}
		</div>
		`);
  }
}

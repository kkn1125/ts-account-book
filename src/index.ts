import AccountBook from "./model/AccountBook";

const kimsonAccount = new AccountBook("kimson");

console.log(kimsonAccount);

kimsonAccount.add({
  category: "test",
  cost: 1300,
  fixed: true,
  // from: "낑낑",
  // to: "낑낑",
  // // desc: "test account",
  // fixed: false,
  // currency: "credit",
});
kimsonAccount.add({
  category: "test",
  cost: 5000,
  // from: "낑낑",
  // to: "낑낑",
  // // desc: "test account",
  // fixed: false,
  // currency: "credit",
});

kimsonAccount.render();

export {};

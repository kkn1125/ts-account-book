import AccountBook from "./model/AccountBook";

const kimsonAccount = new AccountBook("kimson");

console.log(kimsonAccount);

kimsonAccount.add({
  category: "test",
  cost: 1300,
  // from: "me",
  // to: "naver",
  // desc: "test account",
  fixed: false,
  currency: "credit",
});

kimsonAccount.render();

export {};

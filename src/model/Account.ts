import { v4 } from "uuid";

export type AccountType = {
  id?: string;
  category?: string;
  from?: string;
  to?: string;
  cost?: number;
  currency?: "cash" | "credit";
  fixed?: boolean;
  desc?: string;
  createdAt?: number;
  updatedAt?: number;
};

export default class Account {
  id: string;
  category: string = "basic";
  from: string = "";
  to: string = "";
  cost: number = 0;
  currency: "cash" | "credit" = "credit";
  fixed: boolean = false;
  desc: string = "";
  createdAt: number = +new Date();
  updatedAt: number = +new Date();

  constructor({
    category,
    from,
    to,
    cost,
    currency,
    fixed,
    desc,
  }: AccountType) {
    this.id = v4();
    category && (this.category = category);
    from && (this.from = from);
    to && (this.to = to);
    cost && (this.cost = cost);
    currency && (this.currency = currency);
    fixed && (this.fixed = fixed);
    desc && (this.desc = desc);
    this.createdAt = +new Date();
    this.updatedAt = +new Date();
  }

  setCategory() {}

  createElement(
    el: string,
    idOrClass: {
      id?: string;
      classes?: string[];
    }
  ) {
    const newElement = document.createElement(el);
    if (idOrClass.id) {
      newElement.id = idOrClass.id;
    } else if (idOrClass.classes && idOrClass.classes.length > 0) {
      newElement.classList.add(...idOrClass.classes);
    }
    return newElement;
  }

  render() {
    const id = this.createElement("span", {
      classes: ["id"],
    });
    const category = this.createElement("span", {
      classes: ["category"],
    });
    const from = this.createElement("span", {
      classes: ["from"],
    });
    const to = this.createElement("span", {
      classes: ["to"],
    });
    const cost = this.createElement("span", {
      classes: ["cost"],
    });
    const currency = this.createElement("span", {
      classes: ["currency"],
    });
    const fixed = this.createElement("span", {
      classes: ["fixed"],
    });
    const desc = this.createElement("span", {
      classes: ["desc"],
    });
    const createdAt = this.createElement("span", {
      classes: ["createdAt"],
    });
    const updatedAt = this.createElement("span", {
      classes: ["updatedAt"],
    });
  }
}

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
    newElement.classList.add("cell");
    return newElement;
  }

  render(field: keyof AccountType) {
    const span = this.createElement("span", { classes: [field] });
    let content = "";
    if (field === "cost") {
      content = this[field].toLocaleString("ko");
    } else if (field === "createdAt" || field === "updatedAt") {
      content = new Date(this[field]).toLocaleString("ko");
    } else if (field === "fixed") {
      content = this[field] ? "fixed" : "";
    } else {
      content = this[field];
    }
    span.innerHTML = String(content) || "";
    // return this[field] ? span.outerHTML : "";
    return span.outerHTML;
  }
}

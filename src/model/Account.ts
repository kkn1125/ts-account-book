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
  id: string = "";
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

  fieldToHtml = {
    id: () => this.id,
    category: () => this.category,
    from: () => this.from,
    to: () => this.to,
    currency: () => this.currency,
    desc: () => this.desc,
    cost: () => this.cost.toLocaleString("ko"),
    fixed: () => (this.fixed ? "fixed" : "non-fixed"),
    createdAt: () => new Date(this.createdAt).toLocaleString("ko"),
    updatedAt: () => new Date(this.updatedAt).toLocaleString("ko"),
  };

  render(field: keyof AccountType) {
    const span = this.createElement("span", { classes: [field] });
    const content = this.fieldToHtml[field]();
    span.innerHTML = String(content) || "";
    // return this[field] ? span.outerHTML : "";
    return span.outerHTML;
  }
}

import { APP } from "../util/global";

export default class Renderer {
  render(content: any): void;
  render(el: HTMLElement, content: any): void;
  render(a: any, b?: any) {
    if (a instanceof HTMLElement) {
      a.innerHTML = b;
    } else {
      APP.innerHTML = a;
    }
  }
}

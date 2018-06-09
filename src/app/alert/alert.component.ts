import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-alert",
  template: `
    <p>
      alert component
    </p>
  `,
  styles: [
    `
    p {
      color: red;
    }
  `
  ],
  encapsulation: ViewEncapsulation.Native
})
export class AlertComponent {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

import { createCustomElement } from "@angular/elements";

import { AppComponent } from "./app.component";
import { AlertComponent } from "./alert/alert.component";

@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customAlert = createCustomElement(AlertComponent, { injector });
    customElements.define("custom-alert", customAlert);
  }

  ngDoBootstrap() {}
}

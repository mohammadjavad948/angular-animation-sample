import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("test", [
      state(
        "open",
        style({
          background: "cyan",
          "border-radius": "5rem"
        })
      ),
      state(
        "close",
        style({
          background: "blue",
          "border-radius": "0.25rem"
        })
      ),
      transition("open => close", [animate("0.5s ease-in")]),
      transition("close => open", [animate("0.5s ease-out")])
    ])
  ]
})
export class AppComponent {
  stat = false;
}

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "comunev-app";
  user = {
    Fname: "",
    Lname: "",
    Uname: "",
    Pass: "",
    Dob: "",
    Country: "",
  };
  onSubmit(e) {
    console.log(this.user.Fname);
    location.reload();
  }
}

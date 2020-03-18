import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-cpassword",
  templateUrl: "./cpassword.component.html",
  styleUrls: ["./cpassword.component.css"]
})
export class CpasswordComponent implements OnInit {
  changePasswordModel: FormGroup;
  constructor() {}

  ngOnInit() {
    this.changePasswordModel = new FormGroup(
      {
        oldpassword: new FormControl("", Validators.required),
        newPassword: new FormControl("", Validators.required),
        confirmPassword: new FormControl("", Validators.required)
      },
      { validators: this.passwordMatchValidator }
    );
  }
  postdata = () => {};

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls["newPassword"].value ===
      frm.controls["confirmPassword"].value
      ? null
      : { mismatch: true };
  }
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, NgForm, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { User } from "src/app/user/user.model";
import { UserService } from "src/app/user/user.service";
import { SnackbarService } from "src/app/utility/snackbar.service";
import { VolunteerService } from "../volunteer.service";

@Component({
  selector: "app-volunteer-signup",
  templateUrl: "./volunteer-signup.component.html",
  styleUrls: ["./volunteer-signup.component.css"],
})
export class VolunteerSignupComponent implements OnInit {
  alertType = '';
  subscription = new Subscription();
  isLoading = false;
  isSuccess = false;
  user: User = null;
  userForm: FormGroup;
  @ViewChild("userSubmitForm") userSubmitForm: NgForm;

  constructor(
    private volunteerService: VolunteerService,
    private snack: SnackbarService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required]),
      jobTitle: new FormControl("", [Validators.required]),
      industry: new FormControl("", [Validators.required]),
      areaOfInterest: new FormControl("", [Validators.required]),
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    const user = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
      jobTitle: this.userForm.value.jobTitle,
      industry: this.userForm.value.industry,
      areaOfInterest: this.userForm.value.areaOfInterest,
    };

    this.isLoading = true;
    this.subscription.add(
      this.volunteerService.createVolunteer(user).subscribe(
        (data) => {
          this.isLoading = false;
          this.isSuccess = true;
          this.alertType = "SUCCESS";
        },
        (error) => {
          console.log(error.message);
          this.isLoading = false;
          this.isSuccess = false;
          this.alertType = "ERROR";
        }
      )
    );

    this.userForm.reset();
    this.userSubmitForm.resetForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

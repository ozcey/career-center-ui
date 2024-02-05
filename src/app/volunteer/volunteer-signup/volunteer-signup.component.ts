import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/user/user.model';
import { UserService } from 'src/app/user/user.service';
import { SnackbarService } from 'src/app/utility/snackbar.service';

@Component({
  selector: 'app-volunteer-signup',
  templateUrl: './volunteer-signup.component.html',
  styleUrls: ['./volunteer-signup.component.css']
})
export class VolunteerSignupComponent implements OnInit {

  subscription = new Subscription();
  isLoading = false;
  user: User = null;
  userForm: FormGroup;
  @ViewChild("userSubmitForm") userSubmitForm: NgForm;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private snack: SnackbarService
  ) {}

  ngOnInit() {
    // this.route.data.subscribe((data) => {
    //   this.user = data["userResolver"];
    // });
    this.initForm();
  }

  initForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required
      ]),
      jobTitle: new FormControl('', [Validators.required, Validators.minLength(3)]),
      industry: new FormControl('', [Validators.required, Validators.minLength(3)]),

    });
  }

  onSubmit() {
    console.log('received')
    if (this.userForm.invalid) {
      return;
    }

    const user = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
      jobTitle: this.userForm.value.jobTitle,
      industry: this.userForm.value.industry
    };

    console.log(user);
    // this.isLoading = true;
    // TODO: write backend code and UI code for volunteer signup
    // this.subscription.add(
    //   this.authService.signUp(user).subscribe(
    //     (data) => {
    //       console.log(user);
    //       this.isLoading = false;
    //       this.snack.showSnackbar(
    //         "User created successfully.",
    //         null,
    //         4500,
    //         "bottom"
    //       );
    //     },
    //     (error) => {
    //       console.log(error.message);
    //       this.isLoading = false;
    //       this.snack.errorMessage();
    //     }
    //   )
    // );

    this.userForm.reset();
    this.userSubmitForm.resetForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

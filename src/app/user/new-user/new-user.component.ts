import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/utility/snackbar.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  timer: any;
  isLoading = false;

  constructor(
    // private authService: AuthService,
    private router: Router,
    private snack: SnackbarService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const user = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      username: form.value.username,
      email: form.value.email,
      password: form.value.password,
      role: ['ROLE_USER']
    };
    this.isLoading = true;
    // this.subscription = this.authService.signUp(user).subscribe(data => {
    //   // console.log(user);
    //   this.isLoading = false;
    //   this.snack.showSnackbar('User created successfully! You will be redirected to login page.', null, 4500, 'bottom');
    // }, error => {
    //   console.log(error.message);
    //   this.isLoading = false;
    //   this.snack.errorMessage();
    // });
  }

  ngOnDestroy() {
    clearInterval(this.timer);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  hide = true;
  alertType = '';
  subscription = new Subscription();
  

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const authUser = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    this.authService.login(authUser);
    this.subscription.add(
      this.authService.authChange.subscribe(isAuth => {
        if(!isAuth){
          this.alertType = 'ERROR';
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}

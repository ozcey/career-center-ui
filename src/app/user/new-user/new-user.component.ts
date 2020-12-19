import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { SnackbarService } from 'src/app/utility/snackbar.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  isLoading = false;
  user: User = null;
  isEdit = false;
  userForm: FormGroup;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private snack: SnackbarService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['userResolver'];
      this.isEdit = data['userResolver'] != null;
    })
    this.initForm();
  }

  initForm() {
    let name = '';
    let email = '';
    let username = '';
    let password = '';
    let roles = [];

    if (this.isEdit) {
      name = this.user.name;
      email = this.user.email;
      username = this.user.username;
      password = this.user.password;
      roles = this.user.roles;
    }

    this.userForm = new FormGroup({
      name: new FormControl(name, [Validators.required, Validators.minLength(2)]),
      username: new FormControl(username, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(email, [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      roles: new FormControl(roles, Validators.required)
    });

  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    const user = {
      name: this.userForm.value.name,
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      roles: [this.userForm.value.roles]
    };

    if (this.isEdit) {
      const updatedUser = {
        id: this.user.id,
        ...user
      }
      console.log(updatedUser);
      this.isLoading = true;
      this.subscription.add(this.userService.updateUser(updatedUser).subscribe(data => {
        console.log(user);
        this.isLoading = false;
        this.snack.showSnackbar('User updated successfully.', null, 4500, 'bottom');
      }, error => {
        console.log(error.message);
        this.isLoading = false;
        this.snack.errorMessage();
      }));

    } else {
      console.log(user);
      this.isLoading = true;
      this.subscription.add(this.authService.signUp(user).subscribe(data => {
        console.log(user);
        this.isLoading = false;
        this.snack.showSnackbar('User created successfully.', null, 4500, 'bottom');
      }, error => {
        console.log(error.message);
        this.isLoading = false;
        this.snack.errorMessage();
      }));
    }
    this.userForm.reset();
  }

  OnGoBack() {
    this.router.navigate(['user']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

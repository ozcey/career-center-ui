import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  isAuth = false;
  username: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription.add(this.authService.authChange.subscribe(auth => {
      this.isAuth = auth;
    }));
    this.subscription.add(this.authService.$username.subscribe(uName => {
      this.username = uName;
    }));
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

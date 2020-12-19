import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  isAuth = false;
  subscription = new Subscription();

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    this.subscription.add(this.authService.authChange.subscribe(auth => {
      this.isAuth = auth;
    }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar ) {}

  showSnackbar(message, action, time, postion){
    this.snackbar.open(message, action, {duration: time, verticalPosition: postion})
  }

  errorMessage(){
    this.showSnackbar('Something went wrong!', null, 5000, 'bottom');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="container">
      <div class="alert alert-info" role="alert">
        Page not found.
      </div>
    </div>
  `
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-user-modal',
    template: `<h2 mat-dialog-title > Delete {{data.firstName}} {{data.lastName}}</h2>
              <div mat-dialog-content>
              <h4>Are you sure?</h4>
              </div>
              <hr/>
              <div mat-dialog-actions>
              <button mat-flat-button color="accent" [mat-dialog-close]="false">No</button>
              <button mat-flat-button color="primary"  [mat-dialog-close]="true">Yes</button>
              </div>`
})
export class UserModalComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}


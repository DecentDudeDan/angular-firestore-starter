import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-authentication-error',
  templateUrl: './authentication-error.component.html',
  styleUrls: ['./authentication-error.component.scss']
})
export class AuthenticationErrorComponent {

  constructor(
    public dialogRef: MatDialogRef<AuthenticationErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { AuthenticationErrorComponent } from './../authentication-error/authentication-error.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AuthenticationErrorComponent, {
      maxWidth: '800px',
      panelClass: 'error-background',
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

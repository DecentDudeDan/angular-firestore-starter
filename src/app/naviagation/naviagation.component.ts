import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, ElementRef, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-naviagation',
  templateUrl: './naviagation.component.html',
  styleUrls: ['./naviagation.component.scss']
})
export class NaviagationComponent implements OnInit {

  private navBarActive: boolean = false;
  private isLoggedIn: boolean = false;

  constructor(private router: Router,
    private elRef: ElementRef,
    private afAuth: AngularFireAuth,
    private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged((user: firebase.User) => {
      this.setLoginState(Boolean(user && user.uid));
      this.cd.detectChanges();
    })
  }

  toggleNavBarMenu() {
    this.navBarActive = !this.navBarActive;
    this.cd.detectChanges();
  }

  doLogout() {
    this.afAuth.auth.signOut();
    this.setLoginState(false);
    this.navBarActive = false;
    this.router.navigate(['/login']);
  }

  setLoginState(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
    if (this.isLoggedIn) {
      this.elRef.nativeElement.ownerDocument.body.classList.add('has-navbar-fixed-top');
    } else {
      if (this.elRef.nativeElement.ownerDocument.body.classList.contains('has-navbar-fixed-top')) {
        this.elRef.nativeElement.ownerDocument.body.classList.remove('has-navbar-fixed-top');
      }
    }
  }
}

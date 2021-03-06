import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase/app';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}
  
  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map((user: User) => {
        if (user.uid) {
          return true;
        } else {
          this.router.navigate(['/login'])
          return false;
        }
      }),
      catchError((val: any) => {
        this.router.navigate(['/login']);
        return of(false)
      })
    )
  }
}
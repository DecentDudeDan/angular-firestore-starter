import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, first } from 'rxjs/operators';

export interface LoginData {
  isLoggedIn: boolean;
}

@Injectable()
export class LoginResolver implements Resolve<Observable<Boolean>> {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  resolve(): Observable<Boolean> {
    return this.afAuth.authState.pipe(
      map((user: firebase.User) => {
        return Boolean(user && user.uid)
      }),
      first()
    )
  }
}

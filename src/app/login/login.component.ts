import { LoginData } from './../services/login.resolver';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, DocumentSnapshot } from 'angularfire2/firestore';

import { User } from '../types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private route: ActivatedRoute) {

    this.route.data.subscribe((data: LoginData) => {
      if (data.isLoggedIn) {
        this.router.navigate(['/main']);
      }
    })
  }

  ngOnInit() {
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then((UserCredential: firebase.auth.UserCredential) => {
          this.updateUserData(UserCredential.user);
          resolve(UserCredential);
        })
    })
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${user.uid}`);

    userRef.get().subscribe((doc: DocumentSnapshot<User>) => {
      if (doc && !doc.get('approved')) {
        const data: User = {
          uid: user.uid,
          email: user.email,
          approved: false
        }
        userRef.set(data, { merge: true })
      }
      this.router.navigate(['/main']);
    })
  }
}

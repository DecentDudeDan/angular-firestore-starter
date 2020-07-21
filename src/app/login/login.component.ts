import { LoginData } from './../services/login.resolver';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, DocumentSnapshot } from '@angular/fire/firestore';

import { User } from '../types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
    let provider = new auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth
      .signInWithPopup(provider)
      .then((userCredential: auth.UserCredential) => {
        this.updateUserData(userCredential.user);
      })
  }

  doTwitterLogin() {
    let provider = new auth.TwitterAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then((userCrediential: auth.UserCredential) => {
      this.updateUserData(userCrediential.user);
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

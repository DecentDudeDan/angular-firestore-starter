import { AuthGuardService } from './auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthenticationErrorComponent } from './authentication-error/authentication-error.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    AuthenticationErrorComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents: [
    AuthenticationErrorComponent
  ]
})
export class AppModule { }

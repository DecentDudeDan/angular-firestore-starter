import { LoginResolver } from './services/login.resolver';
import { AuthGuardService } from './services/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthenticationErrorComponent } from './authentication-error/authentication-error.component';
import { NaviagationComponent } from './naviagation/naviagation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    resolve: {
      isLoggedIn: LoginResolver
    }
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    resolve: {
      isLoggedIn: LoginResolver
    }
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    AuthenticationErrorComponent,
    NaviagationComponent,
    PageNotFoundComponent
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
  providers: [AuthGuardService, LoginResolver],
  bootstrap: [AppComponent],
  entryComponents: [
    AuthenticationErrorComponent
  ]
})
export class AppModule { }

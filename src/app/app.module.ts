import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

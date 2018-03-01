import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

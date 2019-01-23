import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AboutComponent } from './about/about.component';

// 2. Add your credentials from step 1
const config = {
  apiKey: 'AIzaSyCNGXNpOeRLQcJnuSgUXLv8sWcPhvJfyVA',
  authDomain: 'fireship-lessons.firebaseapp.com',
  databaseURL: 'https://fireship-lessons.firebaseio.com',
  projectId: 'fireship-lessons',
  storageBucket: 'fireship-lessons.appspot.com',
  messagingSenderId: '758773997881'
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

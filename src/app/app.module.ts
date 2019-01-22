import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BioComponent } from './bio/bio.component';

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
    BioComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

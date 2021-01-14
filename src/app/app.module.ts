import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { HomeComponent } from './home/home.component';

const firebaseConfig = {
  apiKey: 'AIzaSyCHds_6F3iKLB359jEbY5VhAmmboIFdJe0',
  authDomain: 'ilhagrande-trip.firebaseapp.com',
  projectId: 'ilhagrande-trip',
  storageBucket: 'ilhagrande-trip.appspot.com',
  messagingSenderId: '107379540951',
  appId: '1:107379540951:web:bba4230dc7f5d999484192',
  measurementId: 'G-HE86NKQYBW'
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

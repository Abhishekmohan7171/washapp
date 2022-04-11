import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OurWorksComponent } from './our-works/our-works.component';
import { ShellComponent } from './shell/shell.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SocialsComponent } from './socials/socials.component';
import { DemoComponent } from './demo/demo.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';



import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const firebaseConfig = {

  apiKey: "AIzaSyB-43VoetHgLSCwH6qSbmlHhVC0Bn2bv1M",

  authDomain: "washapp-e00c7.firebaseapp.com",

  databaseURL: "https://washapp-e00c7-default-rtdb.firebaseio.com",

  projectId: "washapp-e00c7",

  storageBucket: "washapp-e00c7.appspot.com",

  messagingSenderId: "167019598224",

  appId: "1:167019598224:web:9dedce4a64c5d060fa6315"

};


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    OurWorksComponent,
    ShellComponent,
    PackagesComponent,
    ContactUsComponent,
    SocialsComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { EmailAuthCredential } from 'firebase/auth';
import {Router} from '@angular/router';

// import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private db: AngularFireDatabase,private route:Router) { }

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  //  async signin(email:string, password:string) => {
  //    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
  //  }



  status = false;


  addToDb() {
    //Authentication
    // const auth = getAuth();

    //   signInWithEmailAndPassword(auth, this.profileForm.value.email , this.profileForm.value.password)
    //     .then((userCredential) => {

    //       const user = usogin
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(error)
    //   });


    // this.loginService.signin(email, password)
    // if (this.loginService.isLoggedIn)
    //   this.isSignedIn = true;
    // // this.router.navigate(['/library'])


    //pushing to db
    this.db.database.ref('login').push(this.profileForm.value);

    this.status = true;

    setTimeout(()=>{
      this. route. navigate(['/']);
    },3000);
    

    

    // console.log(this.profileForm.value);

    // this.profileForm.value = ""
  }



  ngOnInit(): void {

  }

}

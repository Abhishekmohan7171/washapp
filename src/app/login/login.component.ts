import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl, FormGroup } from '@angular/forms';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { EmailAuthCredential } from 'firebase/auth';
// import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  //  async signin(email:string, password:string) => {
  //    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
  //  }




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

    // console.log(this.profileForm.value);

    // this.profileForm.value = ""
  }

  ngOnInit(): void {

  }

}

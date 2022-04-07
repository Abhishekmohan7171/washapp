import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private db:AngularFireDatabase) { }

  profileForm = new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  });

  addToDb(){
    this.db.database.ref('login').push(this.profileForm.value);
    // console.log(this.profileForm.value);
  }

  ngOnInit(): void {
  }

}

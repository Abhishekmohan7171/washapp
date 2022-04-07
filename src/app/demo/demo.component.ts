import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private db:AngularFireDatabase) { }
  
  locations = ["","Guduvanchery","Potheri","Vandalur","MM Nagar","Sp Kovil","Mahindra City"];

  vehicle = ["","Car","Bike"];

  bookingForm = new FormGroup({
    location:new FormControl(''),
    vehicle:new FormControl(''),
    date:new FormControl(''),
    time:new FormControl(''),
  });

  addToDb(){
    console.log(this.bookingForm.value);
    this.db.database.ref('booking').push(this.bookingForm.value);
  }



  ngOnInit(): void {
  }

}

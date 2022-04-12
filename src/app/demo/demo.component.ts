import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl,FormGroup,Validators} from '@angular/forms';

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
    location:new FormControl('',[Validators.required]),
    vehicle:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    time:new FormControl('',[Validators.required]),
  });

  addToDb(){
    console.log(this.bookingForm.value);
    this.db.database.ref('booking').push(this.bookingForm.value);
  }

  confirmDemo(){
    // if( this.bookingForm.value = ""){
    //   alert("Enter all values.")
    // }else{
      alert("Booked Successfully !")
    // }
    // alert("Booked Succesfully!!")

    this.bookingForm.reset();
  }



  ngOnInit(): void {
  }

}

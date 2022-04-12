import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  whyus = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";


  time = [{
    Title: "Weekly",
    Price: "1000",
    Description: "Weekly based services"
  },
  {
    Title: "Monthly",
    Price: "5000",
    Description: "Monthly based services"
  },
  {
    Title: "Yearly",
    Price: "10000",
    Description: "Yearly based services"
  }
  ];

  // times = this.db.database.ref('Packages/Time').get().then((value)=>{
  //   console.log(value)
  // }).catch((err)=>{
  //   console.log(err,"error")
  // });



  ngOnInit(): void {

  }

}

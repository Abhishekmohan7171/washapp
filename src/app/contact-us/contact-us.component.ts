import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }


  addressone = "Guduvanchery,";

  addresstwo = "Nandivaram ,Chennai,";

  addressthree = "Tamilnadu - 602303"

  email = "wash@washapp.com";

  number = "1234567789"
  

  ngOnInit(): void {
  }

}

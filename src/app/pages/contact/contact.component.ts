import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../model/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:Contact = new Contact();

  constructor(private contactService:ContactService,private router:Router) { }

  ngOnInit(): void {
  }

  saveContact(){
    this.contactService.createContact(this.contact).subscribe(data =>{
      console.log(data);
      this.goToContactList();
    },
    error =>console.log(error));
  }

  goToContactList(){
    this.router.navigate(['/contacts']);
  }

  onSubmit(){
    console.log(this.contact);
    this.saveContact();
  }

}

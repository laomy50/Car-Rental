import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../../model/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
// 
  contacts: Contact[] = [];
// 
  constructor(private contactService:ContactService,private router: Router) { }
// 
  ngOnInit(): void {
    this.getContacts();
  }
// 
  private getContacts(){
    this.contactService.getContactsList().subscribe(data => {
      this.contacts = data;
    });
  }
  // 
  contactDetails(id: any){
    this.router.navigate(['contact-details', id]);
  }
  // 
  updateContact(id: any){
    this.router.navigate(['update-contact', id]);
  }
// 
  deleteContact(id: any){
    this.contactService.deleteContact(id).subscribe( data => {
      console.log(data);
      this.getContacts();
    })
  }
}

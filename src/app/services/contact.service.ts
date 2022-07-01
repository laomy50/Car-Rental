import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contact } from '../pages/model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseURL = "http://localhost:8080/api/v1/contacts";

  constructor(private httpClient: HttpClient) { }
// get
  getContactsList(): Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseURL}`);
  }
// post
createContact(contact: Contact): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, contact);
}
// get by id
getContactById(id: number): Observable<Contact>{
  return this.httpClient.get<Contact>(`${this.baseURL}/${id}`);
}
// update
updateContact(id: number, contact: Contact): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, contact);
}
// delete
deleteContact(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

}

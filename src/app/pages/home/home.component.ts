import { Component, OnInit } from '@angular/core';
import { BookingDetailsService } from 'src/app/services/booking-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:BookingDetailsService) { }
  carData:any;
  ngOnInit(): void {
    this.carData =this.service.carDetails;
  }

}

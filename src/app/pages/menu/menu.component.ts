import { Component, OnInit } from '@angular/core';

import { BookingDetailsService } from 'src/app/services/booking-details.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:BookingDetailsService) { }

  carData:any;
  ngOnInit(): void {
    this.carData = this.service.carDetails;
  }

}

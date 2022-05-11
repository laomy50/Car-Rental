import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {

  constructor() { }

// cardetails
carDetails = [
{
  id:1,
  carName:"Alphard",
  carBrand:"Toyota",
  carPrice:200,
  carImage:"https://i.pinimg.com/564x/2d/90/96/2d9096f652ddcd4dfe96393259a8ed5d.jpg"
},
{
  id:2,
  carName:"Harrier",
  carBrand:"Lexus",
  carPrice:250,
  carImage:"https://i.pinimg.com/564x/54/68/13/546813559d8ba0f30cc7ccd4ec8757cb.jpg"
},
{
  id:3,
  carName:"Harrier",
  carBrand:"Toyota",
  carPrice:220,
  carImage:"https://i.pinimg.com/564x/19/6a/3d/196a3d9d075d521bad38b0ec864f93ca.jpg"
},
{
  id:4,
  carName:"Noah",
  carBrand:"Toyota",
  carPrice:200,
  carImage:"https://i.pinimg.com/564x/f3/e7/94/f3e7941d57eb996468a259172e7b6a9c.jpg"
},
{
  id:5,
  carName:"BMW M5",
  carBrand:"BMW",
  carPrice:300,
  carImage:"https://i.pinimg.com/564x/93/c1/ee/93c1eeb75485d04d3fb9b07071d50018.jpg"
},
{
  id:6,
  carName:"Mercede Benz",
  carBrand:"Mercede",
  carPrice:400,
  carImage:"https://i.pinimg.com/564x/39/22/70/392270ec3af1ab28454008db6a5f24e6.jpg"
},
{
  id:7,
  carName:"Swift",
  carBrand:"Suzuki",
  carPrice:55,
  carImage:"https://i.pinimg.com/564x/c2/c7/df/c2c7df09d23825b82382197e0fb13938.jpg"
},
{
  id:8,
  carName:"Fortuner",
  carBrand:"Toyota",
  carPrice:270,
  carImage:"https://i.pinimg.com/564x/95/49/9e/95499e99b5d33c974ced8eb8a06925ee.jpg"
},
{
  id:9,
  carName:"Prado V8",
  carBrand:"Toyota",
  carPrice:310,
  carImage:"https://i.pinimg.com/564x/91/50/c7/9150c70eeb0c702f2193d4c2377edc27.jpg"
},
{
  id:10,
  carName:"Range Rover",
  carBrand:"Land Rover",
  carPrice:500,
  carImage:"https://i.pinimg.com/564x/84/78/cb/8478cba929d370f7b27d4a23d868088f.jpg"
}

]


}

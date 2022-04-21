import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event1 = {
    name:'GenShin impact'
    , date: '3/1/2025'
    , time: '8:00 am'
    , price: '999'
    , location: {
        address: '123 Main St'
        , city: 'Salt Lake City, UT'
        , country: 'USA'}
  }
  constructor() { }

  ngOnInit(): void {
  }

  onClicked(data:string){
    console.log('receive:', data);
  }

}

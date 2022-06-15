import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.sass']
})
export class EventsListComponent implements OnInit {

  flag = true;

  event1={
    id: 1
    ,name: 'Angular Practise'
    ,date: '9/26/2036'
    ,price: 20
    ,location: {
      address: '1075 DT'
      ,city: 'London'
      ,country: 'England'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleEventClicked(e:any){
    console.log('received:', e);
  }

  flagStatus(){
    
    // const isflagtrue = this.flag;
    // return{ red: isflagtrue, green: !isflagtrue}
    
    // if(this.flag){
    //   return 'red'
    // }
    // return'green'

    if(this.flag){
      return ['green']
    }
    return ['red']
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientlist = [
    {id:1, name:'joey', age:455},
    {id:2, name:'joey', age:147},
    {id:3, name:'joey', age:789},
    {id:6, name:'joey', age:963},
    {id:5, name:'joey', age:753},
    {id:4, name:'joey', age:951}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

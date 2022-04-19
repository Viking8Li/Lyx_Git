import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  display: string = '';

  constructor() { }

  ngOnInit(): void {
    this.display = (<HTMLInputElement>document.getElementById("firstname")).value
    .concat('_', (<HTMLInputElement>document.getElementById("lastname")).value)
  }
  onClick(){
    this.display = (<HTMLInputElement>document.getElementById("firstname")).value
    .concat('_', (<HTMLInputElement>document.getElementById("lastname")).value
    , '_', Math.floor(Math.random()*10).toString())
  }

}

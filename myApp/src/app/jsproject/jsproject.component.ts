import { Component, OnInit } from '@angular/core';
import { students } from './students';

@Component({
  selector: 'app-jsproject',
  templateUrl: './jsproject.component.html',
  styleUrls: ['./jsproject.component.css']
})
export class JSProjectComponent implements OnInit {
  li:any
  selected:any

  constructor() { }

  ngOnInit(): void {
    // this.li = students;
  }

  // onClick(data: any) :void{
  //   this.selected.name = data.name;
  //   this.selected.Location = data.Location;
  // }
  username = "Viking";
  month = 0;

}


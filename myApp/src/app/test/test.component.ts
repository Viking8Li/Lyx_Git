import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  sum:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  increase(){
    this.sum++;
  }

}

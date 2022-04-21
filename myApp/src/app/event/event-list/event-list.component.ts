import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  @Input() event:any
  sp:any = 'some value'
  @Output() eventClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    
  }

  onClick(){
    this.eventClick.emit(this.event.name)
  }

  logfoo(){
    console.log('foo')
  }

}

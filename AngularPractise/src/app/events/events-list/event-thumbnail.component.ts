import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
    <p>this is event thumbnail Component </p>
    <div class="well hoverwell thumbnail">
        <div>Date: {{event.date}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
        <button class="btn btn-primary" (click)="handleClickMe()">Click</button>
    </div>

    <div *ngIf="stopped">
      <h1>Congratulations!</h1>
      <h3>You stopped the child component's counter!</h3>
    </div>
    <h3>Child Counter: {{counter}}</h3>
    `,
    styles: [
        `
        .pad-left
            margin-left: 10px
            color: red
        `
    ]
})
export class EventThumbnailComponent {
    @Input() event:any;

    @Output() eventClick = new EventEmitter()

    someporperty:any = 'some Value'
    stopped = false
    counter = 0
    private intervalId:any

    love = {
        type: 'abslutely'
        ,name: 'love'
    }

    ngOnInit() {
        this.intervalId = setInterval(() => {this.counter++}, 1000)
    }
  
    stopTimer() {
        clearInterval(this.intervalId)
        this.stopped = true
    }
    
    handleClickMe(){
        console.log('clicked')
        alert('clicked!')
        this.eventClick.emit(this.love)
    }

    logFoo(){
        console.log('Foo')
    }
}
import { Component } from '@angular/core';

class TodoItem {
  isDone: boolean = false;
  name?: string;
}

class TaskCounter {
  X = 0;
  Y  = 0;
}

@Component({
  selector: 'app-adp',
  template: `
  <input type="text" placeholder="item" [(ngModel)]="itemname">
  <button (click)="add()">Add</button>
  <h3>{{state.X}} remaining out of {{this['task-counter'].Y}}</h3>
  <ul>
    <li *ngFor="let i of items" (click)="toggleItem(i)" [ngClass]="i.isDone?'is-done':''">
      {{i.name}}
    </li>
  </ul>
  `,
  styles: [`
  .is-done {
    text-decoration: line-through;
  }
`]
})
export class AdpComponent{

  public name: string = '';
  public items: Array<TodoItem> = [];

  itemname = '';
  public Y:number = 0;
  // 'task-counter' = 0;

  state:TaskCounter = {
    X:0,
    Y:0
  }

  'task-counter' : TaskCounter = {
    X:0,
    Y:0
  };

  public getRemainingCount() {
    return this.items.filter(item => !item.isDone).length;
  }

  public add() {
    if(this.itemname == ''){
      return;
    }
    this.items.push({
      isDone : false,
      name: this.itemname
    })
    this['task-counter'].Y++;
    this.state.X++;
    console.log(this.items)
  }

  public toggleItem(item: TodoItem) {
    item.isDone = !item.isDone;
    if(item.isDone == true){
      this.state.X--;
    } else {
      this.state.X++;
    }
  }

}

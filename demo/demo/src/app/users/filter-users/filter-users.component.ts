import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.sass']
})
export class FilterUsersComponent implements OnInit {

  @Input()data?: string;
  @Input()tax?: number;
  @Output()updatedList = new EventEmitter<any>();

  constructor(private userservice:UsersService) { }

  ngOnInit(): void {
    const users = this.userservice.getUsers();
    console.log(users);
  }

  updateUsers(){
    const userObj = {id:10, name: 'mark'};
    this.updatedList.emit(userObj);
    alert(JSON.stringify(userObj));
  }

}

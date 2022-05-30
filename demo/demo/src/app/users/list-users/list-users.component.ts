import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.sass']
})
export class ListUsersComponent implements OnInit {

  cName = 'ARC Tutorials';
  taxVal = 200;
  user: any;
  users = {};

  constructor(private userser:UsersService) { }

  ngOnInit(): void {
    this.users = this.userser.getUsers();
  }

  updatedListP(event: any){
    console.log(event);
    this.user = event;
  }

}

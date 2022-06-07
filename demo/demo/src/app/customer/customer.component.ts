import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {

  users:any;
  flag:boolean = false;

  constructor(private userser:UsersService) { }

  ngOnInit(): void {
    this.userser.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    },(e) =>{
      console.log('Unbable to get data' + e);
    })
  }

  click(){
    this.flag = !this.flag;
  }

}

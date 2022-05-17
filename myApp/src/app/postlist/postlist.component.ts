import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from '../api.service.service';
import { Post } from '../post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  public flag : boolean = false
  public posts!:Post[]
  public id!: Number
  constructor(public apiService:ApiService, public router:Router){}
  ngOnInit(){
    this.apiService.getAllPosts().subscribe((res)=>{
      this.posts = JSON.parse(JSON.stringify(res))
      console.log(this.posts)
    })
  }
  title = 'viking';
  public gotoProductDetails(id:any) {
    this.id = id
    this.flag = true
    // console.log(this.id)
  }

}

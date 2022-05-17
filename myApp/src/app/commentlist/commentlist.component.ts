import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service.service';
import { ActivatedRoute } from "@angular/router";
import { Comment } from '../comment';

@Component({
  selector: 'app-commentlist',
  templateUrl: './commentlist.component.html',
  styleUrls: ['./commentlist.component.css']
})
export class CommentlistComponent implements OnInit {

  @Input() public id:Number | undefined
  public comments!:Comment[]
  constructor(public apiService:ApiService, public route: ActivatedRoute) { }
  
  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.apiService.getCommentForAPost(params['id']).subscribe((res)=>{
    //     this.comments = JSON.parse(JSON.stringify(res))
    //     console.log(this.comments)
    //   })
    // });
    console.log(this.id)
    this.apiService.getCommentForAPost(this.id).subscribe((res)=>{
         this.comments = JSON.parse(JSON.stringify(res))
      // console.log(this.comments)
    })
  }

}

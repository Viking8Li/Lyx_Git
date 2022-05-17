import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from '../post-list/post-list.component';
import { CommentListComponent } from './comment-list/comment-list.component';



@NgModule({
  declarations: [
    PostListComponent,
    CommentListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChildM1Module { }

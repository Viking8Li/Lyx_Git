import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { CourseItem } from './store/models/courseItem.model';
// import { AppState } from './store/models/app-state.model';
import { NgForm } from '@angular/forms';
// import { AddItemAction } from './store/actions/course.action';
import { Article } from './store/models/article.module';
import { State } from './store/models/state.model';
import { AddArticleAction } from './store/actions/articles.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articles$: Observable<Array<Article>> | undefined;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.articles$ = this.store.select((store) => store.article);
  }

  addArticle(form: NgForm) {
    this.store.dispatch(
      new AddArticleAction(form.value)
    );
    form.reset();
  }

}

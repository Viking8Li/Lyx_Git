import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  color: String ='';
  price = 0;
  priceTo = 0;
  size = 'M';

  constructor( private activitedRoute:ActivatedRoute ) { 
    this.activitedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.color = params['color'];
      this.price = params['price'];
      this.priceTo = params['priceTo'];
      this.size = params['size'];
    })
  }

  ngOnInit(): void {
  }

}

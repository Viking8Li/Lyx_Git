import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  
  li:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products')
    .subscribe(Response => {
 
      // If response comes hideloader() function is called
      // to hide that loader
      if(Response){ 
        hideloader();
      }
      console.log(Response)
      this.li=Response;
    });
    function hideloader(){
      // document.getElementById('loading').style.display = 'none';
      // !document.getElementById('loading')?.style.display;
    }
  }
}



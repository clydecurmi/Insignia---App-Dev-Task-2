import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private http: HttpClient) { }

  friends: any = [];

  runHttp(){
    this.http.get('https://demo8634050.mockable.io')
    .subscribe(data =>{
      console.log();
      this.friends = data;
    })
  }

  ngOnInit() {
  }

}

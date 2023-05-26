import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  lastContribs:  { index: number, title: String }[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    console.log("VVVVVVVVVVVVVVVV");
    this.loadData();
  }

  loadData() {
    this.http.get<any>('http://localhost:8080/api/questions').subscribe(data => {
      console.log("Get done");
      console.log(data);

      for (let i = 0; i< data.length; i++) {
        this.lastContribs.push({
          index: i,
          title: "aaa"
        });
      }

  })
  }


}

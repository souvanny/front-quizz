import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contribute-details',
  templateUrl: './contribute-details.component.html',
  styleUrls: ['./contribute-details.component.css']
})
export class ContributeDetailsComponent {

  answers:  { title: String }[] = [];

  title: String = "";
  hashtags: String = "";

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    console.log("ContributeDetailsComponent init ============");
    this.loadData();
  }

  loadData() {
    this.http.get<any>('http://localhost:8080/api/questions/26').subscribe(data => {
      console.log("Get done");
      console.log(data);

      this.title = data.title;
      this.hashtags = data.hashtags;
      this.answers = data.answers;
      

     })
  }
}

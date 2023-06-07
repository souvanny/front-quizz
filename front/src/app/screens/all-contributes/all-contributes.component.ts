import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-contributes',
  templateUrl: './all-contributes.component.html',
  styleUrls: ['./all-contributes.component.css']
})
export class AllContributesComponent {

  questions:  { index: number, title: String, username: String }[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    console.log("AllContributesComponent init ============");
    this.loadData();
  }

  loadData() {
    this.http.get<any>('http://localhost:8080/api/questions').subscribe(data => {
      console.log("Get done");
      console.log(data);

      for (let i = 0; i< data.length; i++) {
        let row = data[i];
        this.questions.push({
          index: i,
          title: row.title,
          username: row.user.username
        });
      }

    })
  }
}

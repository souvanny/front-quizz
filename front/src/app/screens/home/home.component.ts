import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  questions:  { index: number, id: number, title: String, username: String }[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    console.log("HomeComponent init ============");
    this.loadData();
  }

  loadData() {
    this.http.get<any>('http://localhost:8080/api/questions').subscribe(data => {
      console.log("Get done");
      console.log(data);

      for (let i = 0; i< data.length; i++) {
        let row = data[i];
        console.log(row);
        this.questions.push({
          index: i,
          id: row.id,
          title: row.title,
          username: row.user.username
        });
      }
      console.log("==");
      console.log(this.questions);

     })
  }

  btnClick(idQuestion: number) {
    console.log("btnClick ...", idQuestion);
    this.router.navigateByUrl('/contribute-details?idQuestion=' + idQuestion);
  }
}

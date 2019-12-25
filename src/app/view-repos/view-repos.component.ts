import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Repo } from 'src/models/Repo.model';

@Component({
  selector: 'app-view-repos',
  templateUrl: './view-repos.component.html',
  styleUrls: ['./view-repos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewReposComponent implements OnInit {
  list: Observable<Repo[]> = null;
  ready = null;
  constructor(http: HttpClient) {
    const path = 'https://api.github.com/search/repositories?q=angular';
    this.list = http.get<Repo[]>(path).pipe(
      map((data:any) => data.items)
    )
    this.list.subscribe(data => {
      this.ready = true;
    });
  }

  ngOnInit() {
    let l = [];
    this.list.forEach(list => {
      list.forEach(item => {
        l.push(new Repo(item));
      })
    });
  }

}

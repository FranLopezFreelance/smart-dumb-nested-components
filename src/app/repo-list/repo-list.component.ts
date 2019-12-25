import { Component, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Repo } from 'src/models/Repo.model';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoListComponent implements OnInit {
  @Input() list: Repo[];

  constructor() { }

  ngOnInit() {
  }

}

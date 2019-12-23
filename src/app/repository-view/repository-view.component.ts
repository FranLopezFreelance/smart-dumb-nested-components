import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repository-view',
  templateUrl: './repository-view.component.html',
  styleUrls: ['./repository-view.component.css']
})
export class RepositoryViewComponent implements OnInit {
  @Input() repository: any;

  constructor() { }

  ngOnInit() {
  }

}

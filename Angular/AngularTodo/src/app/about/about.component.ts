import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  readonly origin = window.location.origin;
  readonly name: string = '<你的學號 + 姓名>';

  constructor() {}

  ngOnInit(): void {}
}

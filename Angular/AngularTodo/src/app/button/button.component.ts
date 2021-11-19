import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input('type') type: 'submit' | 'reset' | 'button' = 'button';
  @Input('color') color: 'primary' | 'secondary' | 'warn' | 'error' = 'primary';
  @Output('click') onClick: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}

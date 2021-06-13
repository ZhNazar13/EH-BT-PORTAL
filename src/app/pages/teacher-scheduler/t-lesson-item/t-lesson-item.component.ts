import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-t-lesson-item',
  templateUrl: './t-lesson-item.component.html',
  styleUrls: ['./t-lesson-item.component.css']
})
export class TLessonItemComponent implements OnInit {
  @Input() public lessonItem: any;
  constructor() { }

  ngOnInit(): void {
  }

}

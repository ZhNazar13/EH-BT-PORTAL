import { Component, OnInit } from '@angular/core';
import {TeacherWsService} from '../../../shared/service/teacher-ws.service';

@Component({
  selector: 'app-teacher-hot-to-do',
  templateUrl: './teacher-hot-to-do.component.html',
  styleUrls: ['./teacher-hot-to-do.component.css']
})
export class TeacherHotToDoComponent implements OnInit {
  list = [];
  myDate = new Date();

  constructor(private teacherWsService: TeacherWsService) {
  }

  ngOnInit(): void {
    this.getHotDataTeacher();
  }

  getHotDataTeacher(){
    this.teacherWsService.getHotDataTeacher(1).subscribe(res => {
      this.list = res;
    });
  }
}

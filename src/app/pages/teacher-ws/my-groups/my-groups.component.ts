import { Component, OnInit } from '@angular/core';
import {TeacherWsService} from '../../../shared/service/teacher-ws.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {
  list = [];

  constructor(private teacherWsService: TeacherWsService) {
  }

  ngOnInit(): void {
    this.getMyGroups();
  }

  getMyGroups() {
    this.teacherWsService.getMyGroups(1).subscribe(res => {
      this.list = res;
    });
  }
}

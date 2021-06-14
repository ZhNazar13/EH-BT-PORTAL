import { Component, OnInit } from '@angular/core';
import {TeacherSchedulerService} from '../../shared/service/teacher-scheduler.service';

@Component({
  selector: 'app-teacher-scheduler',
  templateUrl: './teacher-scheduler.component.html',
  styleUrls: ['./teacher-scheduler.component.css']
})
export class TeacherSchedulerComponent implements OnInit {
  public displayedColumns: string[] = ['1', '2', '3', '4', '5', '6'];
  public dataSource = [];
  public curUser: any;
  public curLogin: any;

  constructor(private teacherSchedulerService: TeacherSchedulerService) { }

  ngOnInit(): void {
    this.getTeacherScheduler();
    this.curUser = JSON.parse(localStorage.getItem('user'));
    console.log(JSON.parse(localStorage.getItem('user')).authorities);
  }

  getTeacherScheduler(){
    this.teacherSchedulerService.getTeacherScheduler(1).subscribe(res => {
      this.dataSource = res;
    });
  }
}

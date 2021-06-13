import {Component, OnInit} from '@angular/core';
import {StudentWsService} from '../../../shared/service/student-ws.service';

@Component({
  selector: 'app-hot-to-do-list',
  templateUrl: './hot-to-do-list.component.html',
  styleUrls: ['./hot-to-do-list.component.css']
})
export class HotToDoListComponent implements OnInit {
  toList = [];
  myDate = new Date();

  constructor(private studentWsService: StudentWsService) {
  }

  ngOnInit(): void {
    this.getHotData();
  }

  getHotData() {
    this.studentWsService.getHotData(1).subscribe(res => {
      this.toList = res;
    });
  }
}

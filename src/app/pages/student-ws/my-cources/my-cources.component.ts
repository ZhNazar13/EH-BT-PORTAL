import {Component, OnInit} from '@angular/core';
import {StudentWsService} from '../../../shared/service/student-ws.service';

@Component({
  selector: 'app-my-cources',
  templateUrl: './my-cources.component.html',
  styleUrls: ['./my-cources.component.css']
})
export class MyCourcesComponent implements OnInit {
  list = [];

  constructor(private studentWsService: StudentWsService) {
  }

  ngOnInit(): void {
    this.getMyCources();
  }

  getMyCources() {
    this.studentWsService.getMyCources(1).subscribe(res => {
      this.list = res;
    })
  }
}

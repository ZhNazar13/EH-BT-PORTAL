import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {TeacherSchedulerComponent} from './teacher-scheduler.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherSchedulerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class TeacherSchedulerRoutingModule {
}

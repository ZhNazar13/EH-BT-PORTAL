import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {TeacherWsComponent} from './teacher-ws.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherWsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class TeacherWsRoutingModule {
}

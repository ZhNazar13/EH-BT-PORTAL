import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {StudentWsComponent} from './student-ws.component';

const routes: Routes = [
  {
    path: '',
    component: StudentWsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class StudentWsRoutingModule {
}

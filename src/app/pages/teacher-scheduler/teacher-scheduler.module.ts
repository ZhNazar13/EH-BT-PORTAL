import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherSchedulerComponent } from './teacher-scheduler.component';
import {SharedModule} from '../../shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { TLessonItemComponent } from './t-lesson-item/t-lesson-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    TeacherSchedulerComponent,
    TLessonItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class TeacherSchedulerModule { }

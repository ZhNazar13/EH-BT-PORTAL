import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherWsComponent } from './teacher-ws.component';
import {TeacherWsRoutingModule} from './teacher-ws-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { TeacherHotToDoComponent } from './teacher-hot-to-do/teacher-hot-to-do.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    TeacherWsComponent,
    MyGroupsComponent,
    TeacherHotToDoComponent
  ],
    imports: [
        CommonModule,
        TeacherWsRoutingModule,
        SharedModule,
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        MatExpansionModule
    ]
})
export class TeacherWsModule { }

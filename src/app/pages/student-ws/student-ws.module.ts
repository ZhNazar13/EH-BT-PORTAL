import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentWsComponent} from './student-ws.component';
import {StudentWsRoutingModule} from './student-ws-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { HotToDoListComponent } from './hot-to-do-list/hot-to-do-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MyCourcesComponent } from './my-cources/my-cources.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    StudentWsComponent,
    HotToDoListComponent,
    MyCourcesComponent
  ],
    imports: [
        CommonModule,
        StudentWsRoutingModule,
        SharedModule,
        MatToolbarModule,
        MatTabsModule,
        MatExpansionModule,
        MatCardModule
    ],
  exports: [
    HotToDoListComponent
  ]
})
export class StudentWsModule {
}

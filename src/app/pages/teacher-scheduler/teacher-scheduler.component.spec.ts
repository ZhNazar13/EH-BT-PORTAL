import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSchedulerComponent } from './teacher-scheduler.component';

describe('TeacherSchedulerComponent', () => {
  let component: TeacherSchedulerComponent;
  let fixture: ComponentFixture<TeacherSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

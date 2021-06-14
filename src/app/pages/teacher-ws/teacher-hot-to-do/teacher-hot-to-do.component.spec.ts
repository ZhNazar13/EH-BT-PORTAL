import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherHotToDoComponent } from './teacher-hot-to-do.component';

describe('TeacherHotToDoComponent', () => {
  let component: TeacherHotToDoComponent;
  let fixture: ComponentFixture<TeacherHotToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherHotToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherHotToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

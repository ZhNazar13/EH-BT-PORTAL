import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherWsComponent } from './teacher-ws.component';

describe('TeacherWsComponent', () => {
  let component: TeacherWsComponent;
  let fixture: ComponentFixture<TeacherWsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherWsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
